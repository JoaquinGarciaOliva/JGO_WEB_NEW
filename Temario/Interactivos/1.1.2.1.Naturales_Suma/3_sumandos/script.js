document.addEventListener('DOMContentLoaded', () => {
    const sumaContainer = document.getElementById('sumaContainer');
    const cifrasSelect = document.getElementById('cifrasSelect');
    const sumandosSelect = document.getElementById('sumandosSelect');
    const newOperationButton = document.getElementById('newOperationButton');
    const playerScoreSpan = document.getElementById('playerScore');
    const digitButtons = document.querySelectorAll('.digit-btn');

    let totalCifras = parseInt(cifrasSelect.value);
    let totalSumandos = parseInt(sumandosSelect.value);
    let totalAttempts = 0;
    let successfulHits = 0;

    let gameSteps = []; 
    let currentStepIndex = 0;

    // Genera los sumandos y calcula resultados/llevadas
    function generateMultiSuma(cifras, numSumandos) {
        const min = Math.pow(10, cifras - 1);
        const max = Math.pow(10, cifras) - 1;

        // 1. Generar números y convertirlos a String con padding exacto de cifras
        const listaNumerosStr = [];
        for (let s = 0; s < numSumandos; s++) {
            let num = Math.floor(Math.random() * (max - min + 1)) + min;
            listaNumerosStr.push(num.toString().padStart(cifras, '0'));
        }

        // El número total de columnas será cifras + 1 (1 columna a la izquierda para el signo '+' / desbordamiento)
        let totalColumnas = cifras + 1;
        let llevadas = Array(totalColumnas).fill(0);
        let resultadosColumna = Array(totalColumnas).fill(0);

        let acarreo = 0;
        // Calcular de derecha a izquierda (columna 0 es la más a la derecha)
        for (let i = 0; i < totalColumnas; i++) {
            let charIdx = cifras - 1 - i;
            let sumaColumna = acarreo;

            if (charIdx >= 0) {
                listaNumerosStr.forEach(numStr => {
                    sumaColumna += parseInt(numStr[charIdx]);
                });
            }

            resultadosColumna[i] = sumaColumna % 10;
            acarreo = Math.floor(sumaColumna / 10);

            if (i < totalColumnas - 1) {
                llevadas[i + 1] = acarreo;
            }
        }

        return { listaNumerosStr, llevadas, resultadosColumna, totalColumnas, cifras };
    }

    function renderSuma(data) {
        sumaContainer.innerHTML = '';
        // Configurar exactamente las columnas requeridas (ej: 4 columnas de 50px para 3 cifras)
        sumaContainer.style.gridTemplateColumns = `repeat(${data.totalColumnas}, 50px)`;

        const cellsLlevadas = [];
        const cellsResultado = [];

        // --- 1. FILA DE LLEVADAS ---
        for (let i = data.totalColumnas - 1; i >= 0; i--) {
            const cell = document.createElement('div');
            cell.classList.add('cell-llevada');
            cell.dataset.expected = data.llevadas[i];
            cell.dataset.type = 'llevada';
            
            // Si no hay llevada en esta columna, la marcamos como vacía (inactiva)
            if (data.llevadas[i] === 0) {
                cell.classList.add('empty-llevada');
            }
            
            sumaContainer.appendChild(cell);
            cellsLlevadas.push({ el: cell, col: i, type: 'llevada', value: data.llevadas[i] });
        }

        // --- 2. FILAS DE LOS SUMANDOS ---
        data.listaNumerosStr.forEach((numStr, index) => {
            // Columna 0 (Extrema Izquierda): Reservada para el signo '+' en el último sumando
            if (index === data.listaNumerosStr.length - 1) {
                createGridCell('+', 'sign-cell');
            } else {
                createGridCell('', 'meta-cell');
            }

            // Columnas siguientes: Dígitos del número alineados a la derecha
            for (let char of numStr) {
                createGridCell(char, 'digit-cell');
            }
        });

        // --- 3. LÍNEA DIVISORIA ---
        const linea = document.createElement('div');
        linea.classList.add('num2-line');
        linea.style.gridColumn = `1 / span ${data.totalColumnas}`;
        sumaContainer.appendChild(linea);

        // --- 4. FILA DE RESULTADOS ---
        for (let i = data.totalColumnas - 1; i >= 0; i--) {
            const cell = document.createElement('div');
            cell.classList.add('cell-input');
            cell.dataset.expected = data.resultadosColumna[i];
            cell.dataset.type = 'resultado';
            
            // Si es la columna de desbordamiento (extrema izquierda) y el resultado es 0, no se pide rellenar
            if (i === data.totalColumnas - 1 && data.resultadosColumna[i] === 0) {
                cell.classList.add('empty-result');
                cell.style.visibility = 'hidden'; // Se oculta visualmente si no hay dígito de desbordamiento
            }

            sumaContainer.appendChild(cell);
            cellsResultado.push({ el: cell, col: i, type: 'resultado', value: data.resultadosColumna[i] });
        }

        // --- 5. MAPEAR SECUENCIA DEL JUEGO (De derecha a izquierda) ---
        gameSteps = [];
        for (let i = 0; i < data.totalColumnas; i++) {
            const resCell = cellsResultado.find(c => c.col === i);
            
            // Solo añadir al flujo si la casilla de resultado es necesaria (>0 o no es la columna vacía de desbordamiento)
            if (resCell && !(i === data.totalColumnas - 1 && resCell.value === 0)) {
                gameSteps.push(resCell);
            }

            // Añadir la llevada si existe para la siguiente columna
            const llevCell = cellsLlevadas.find(c => c.col === i + 1);
            if (llevCell && llevCell.value > 0) {
                gameSteps.push(llevCell);
            }
        }
    }

    function createGridCell(text, className) {
        const cell = document.createElement('div');
        cell.classList.add(className);
        cell.textContent = text;
        sumaContainer.appendChild(cell);
    }

    function initGame() {
        const data = generateMultiSuma(totalCifras, totalSumandos);
        renderSuma(data);
        currentStepIndex = 0;
        highlightActiveStep();
    }

    function highlightActiveStep() {
        document.querySelectorAll('.cell-input, .cell-llevada').forEach(el => el.classList.remove('active'));

        if (currentStepIndex < gameSteps.length) {
            gameSteps[currentStepIndex].el.classList.add('active');
        } else {
            setTimeout(() => {
                alert('¡Perfecto! Has resuelto toda la operación correctamente.');
                initGame();
            }, 400);
        }
    }

    function handleInput(digit) {
        if (currentStepIndex >= gameSteps.length) return;

        const currentStep = gameSteps[currentStepIndex];
        const expected = parseInt(currentStep.el.dataset.expected);

        totalAttempts++;

        if (digit === expected) {
            successfulHits++;
            currentStep.el.textContent = digit;
            currentStep.el.classList.remove('active', 'wrong');
            currentStep.el.classList.add('correct');
            
            currentStepIndex++;
            highlightActiveStep();
        } else {
            currentStep.el.classList.add('wrong');
            currentStep.el.style.animation = 'none';
            setTimeout(() => currentStep.el.style.animation = '', 10);
        }

        playerScoreSpan.textContent = `${successfulHits} / ${totalAttempts}`;
    }

    // --- Listeners ---
    digitButtons.forEach(btn => {
        btn.addEventListener('click', () => handleInput(parseInt(btn.textContent)));
    });

    cifrasSelect.addEventListener('change', (e) => {
        totalCifras = parseInt(e.target.value);
        initGame();
    });

    sumandosSelect.addEventListener('change', (e) => {
        totalSumandos = parseInt(e.target.value);
        initGame();
    });

    newOperationButton.addEventListener('click', initGame);

    // Inicializar primera partida
    initGame();
});