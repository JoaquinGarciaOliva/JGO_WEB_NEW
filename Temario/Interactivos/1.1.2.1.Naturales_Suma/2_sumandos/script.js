document.addEventListener('DOMContentLoaded', () => {
    const sumaContainer = document.getElementById('sumaContainer');
    const cifrasSelect = document.getElementById('cifrasSelect');
    const newOperationButton = document.getElementById('newOperationButton');
    const playerScoreSpan = document.getElementById('playerScore');
    const digitButtons = document.querySelectorAll('.digit-btn');

    let totalCifras = parseInt(cifrasSelect.value);
    let totalAttempts = 0;
    let successfulHits = 0;

    // El orden de las celdas secuenciales que el usuario debe rellenar
    let gameSteps = []; 
    let currentStepIndex = 0;

    function generateSuma(cifras) {
        const min = Math.pow(10, cifras - 1);
        const max = Math.pow(10, cifras) - 1;

        let numA = Math.floor(Math.random() * (max - min + 1)) + min;
        let numB = Math.floor(Math.random() * (max - min + 1)) + min;
        
        // Convertir a texto rellenando con ceros a la izquierda según las cifras fijadas
        const strA = numA.toString().padStart(cifras, '0');
        const strB = numB.toString().padStart(cifras, '0');
        
        // Estructura fija: cifras + 1 columna (1 columna a la izquierda para '+' y desbordamiento)
        let totalColumnas = cifras + 1; 
        let llevadas = Array(totalColumnas).fill(0);
        let resultadosColumna = Array(totalColumnas).fill(0);
        
        let acarreo = 0;
        for (let i = 0; i < totalColumnas; i++) {
            let charIdx = cifras - 1 - i; 
            let dA = charIdx >= 0 ? parseInt(strA[charIdx]) : 0;
            let dB = charIdx >= 0 ? parseInt(strB[charIdx]) : 0;
            
            let sumaCol = dA + dB + acarreo;
            resultadosColumna[i] = sumaCol % 10;
            
            acarreo = Math.floor(sumaCol / 10);
            if (i < totalColumnas - 1) {
                llevadas[i + 1] = acarreo;
            }
        }

        return { strA, strB, llevadas, resultadosColumna, totalColumnas, cifras };
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

        // --- 2. FILA DEL PRIMER NÚMERO ---
        // Columna 0 (Extrema izquierda): Celda vacía para alinear con el signo '+' de abajo
        createGridCell('', 'meta-cell'); 
        for (let char of data.strA) {
            createGridCell(char, 'digit-cell');
        }

        // --- 3. FILA DEL SEGUNDO NÚMERO ---
        // Columna 0 (Extrema izquierda): Colocar el signo '+'
        createGridCell('+', 'sign-cell');
        for (let char of data.strB) {
            createGridCell(char, 'digit-cell');
        }

        // --- 4. LÍNEA DIVISORIA ---
        const linea = document.createElement('div');
        linea.classList.add('num2-line');
        linea.style.gridColumn = `1 / span ${data.totalColumnas}`;
        sumaContainer.appendChild(linea);

        // --- 5. FILA DE RESULTADOS ---
        for (let i = data.totalColumnas - 1; i >= 0; i--) {
            const cell = document.createElement('div');
            cell.classList.add('cell-input');
            cell.dataset.expected = data.resultadosColumna[i];
            cell.dataset.type = 'resultado';

            // Ocultar la primera celda si es la columna de desbordamiento (extrema izquierda) y el resultado es 0
            if (i === data.totalColumnas - 1 && data.resultadosColumna[i] === 0) {
                cell.classList.add('empty-result');
                cell.style.visibility = 'hidden';
            }

            sumaContainer.appendChild(cell);
            cellsResultado.push({ el: cell, col: i, type: 'resultado', value: data.resultadosColumna[i] });
        }

        // --- MAPEAR EL ORDEN DEL JUEGO (De derecha a izquierda) ---
        gameSteps = [];
        for (let i = 0; i < data.totalColumnas; i++) {
            const resCell = cellsResultado.find(c => c.col === i);

            // 1. Añadir el resultado de la columna actual si es necesario (>0 o no es la columna vacía de desbordamiento)
            if (resCell && !(i === data.totalColumnas - 1 && resCell.value === 0)) {
                gameSteps.push(resCell);
            }

            // 2. Añadir la llevada de la SIGUIENTE columna (si existe y es mayor que 0)
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
        const data = generateSuma(totalCifras);
        renderSuma(data);
        currentStepIndex = 0;
        highlightActiveStep();
    }

    function highlightActiveStep() {
        // Limpiar estados activos
        document.querySelectorAll('.cell-input, .cell-llevada').forEach(el => el.classList.remove('active'));

        if (currentStepIndex < gameSteps.length) {
            gameSteps[currentStepIndex].el.classList.add('active');
        } else {
            setTimeout(() => {
                alert('¡Excelente! Suma completada de forma correcta.');
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
            // ACIERTO
            successfulHits++;
            currentStep.el.textContent = digit;
            currentStep.el.classList.remove('active', 'wrong');
            currentStep.el.classList.add('correct');
            
            currentStepIndex++;
            highlightActiveStep();
        } else {
            // FALLO
            currentStep.el.classList.add('wrong');
            currentStep.el.style.animation = 'none';
            setTimeout(() => currentStep.el.style.animation = '', 10);
        }

        playerScoreSpan.textContent = `${successfulHits} / ${totalAttempts}`;
    }

    // Eventos de botones numéricos
    digitButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            handleInput(parseInt(btn.textContent));
        });
    });

    cifrasSelect.addEventListener('change', (e) => {
        totalCifras = parseInt(e.target.value);
        initGame();
    });

    newOperationButton.addEventListener('click', initGame);

    // Arrancar juego
    initGame();
});