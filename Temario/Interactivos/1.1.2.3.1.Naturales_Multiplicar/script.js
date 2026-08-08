document.addEventListener('keydown', (event) => {
    // Comprueba si la tecla pulsada es un dígito del 0 al 9 (funciona con teclado principal y numérico)
    if (event.key >= '0' && event.key <= '9') {
        // Selecciona todos los botones de dígitos
        const buttons = document.querySelectorAll('.score-buttons .digit-btn');
        
        // Busca el botón cuyo texto coincide exactamente con la tecla pulsada
        const targetButton = Array.from(buttons).find(
            (btn) => btn.textContent.trim() === event.key
        );

        // Si se encuentra el botón, simula el clic en pantalla
        if (targetButton) {
            targetButton.click();
            
            // Opcional: añade un leve efecto visual al pulsar en el teclado
            targetButton.classList.add('active');
            setTimeout(() => targetButton.classList.remove('active'), 150);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const multiContainer = document.getElementById('multiContainer');
    const cifrasASelect = document.getElementById('cifrasASelect');
    const cifrasBSelect = document.getElementById('cifrasBSelect');
    const newOperationButton = document.getElementById('newOperationButton');
    const playerScoreSpan = document.getElementById('playerScore');
    const digitButtons = document.querySelectorAll('.digit-btn');

    let cifrasA = parseInt(cifrasASelect.value);
    let cifrasB = parseInt(cifrasBSelect.value);
    let totalAttempts = 0;
    let successfulHits = 0;

    let gameSteps = []; 
    let currentStepIndex = 0;

    function generateMultiplicacion(cA, cB) {
        const minA = Math.pow(10, cA - 1);
        const maxA = Math.pow(10, cA) - 1;
        const minB = Math.pow(10, cB - 1);
        const maxB = Math.pow(10, cB) - 1;

        let numA = Math.floor(Math.random() * (maxA - minA + 1)) + minA;
        let numB = Math.floor(Math.random() * (maxB - minB + 1)) + minB;
        let productoTotal = numA * numB;

        const strA = numA.toString();
        const strB = numB.toString();
        const strResultado = productoTotal.toString();

        // Calcular los productos parciales
        const parcialesStr = [];
        for (let i = strB.length - 1; i >= 0; i--) {
            let digitoB = parseInt(strB[i]);
            let prodParcial = numA * digitoB;

            // Si el dígito es 0, rellenar con ceros del mismo tamaño que el multiplicando (strA.length)
            if (digitoB === 0) {
                parcialesStr.push('0'.repeat(strA.length));
            } else {
                parcialesStr.push(prodParcial.toString()); 
            }
        }

        // Calcular número total de columnas
        let maxLongitud = Math.max(strA.length, strB.length, strResultado.length);
        parcialesStr.forEach((pStr, idx) => {
            if (pStr.length + idx > maxLongitud) {
                maxLongitud = pStr.length + idx;
            }
        });

        let totalColumnas = maxLongitud + 1; // +1 espacio para el signo multiplicador

        return { strA, strB, parcialesStr, strResultado, totalColumnas };
    }

    function renderMultiplicacion(data) {
        multiContainer.innerHTML = '';
        multiContainer.style.gridTemplateColumns = `repeat(${data.totalColumnas}, 38px)`; // 38px sincronizado con el CSS reducido

        // --- 1. FILA DEL MULTIPLICANDO (Arriba) ---
        createGridCell('', 'meta-cell');
        let espaciosA = data.totalColumnas - 1 - data.strA.length;
        for (let i = 0; i < espaciosA; i++) createGridCell('', 'digit-cell');
        for (let char of data.strA) createGridCell(char, 'digit-cell');

        // --- 2. FILA DEL MULTIPLICADOR (Abajo) ---
        createGridCell('x', 'sign-cell');
        let espaciosB = data.totalColumnas - 1 - data.strB.length;
        for (let i = 0; i < espaciosB; i++) createGridCell('', 'digit-cell');
        for (let char of data.strB) createGridCell(char, 'digit-cell');

        // --- 3. PRIMERA LÍNEA DIVISORIA ---
        createHorizontalLine(data.totalColumnas);

        const parcialesCellsGroup = [];

        // --- 4. FILAS DE PRODUCTOS PARCIALES (Solo si el multiplicador tiene 2 o más cifras) ---
        if (data.strB.length > 1) {
            data.parcialesStr.forEach((pStr, idx) => {
                if (idx === 1 && data.parcialesStr.length > 1) {
                    createGridCell('+', 'sign-cell');
                } else {
                    createGridCell('', 'meta-cell');
                }

                let espaciosDerecha = idx; 
                let espaciosIzquierda = data.totalColumnas - 1 - pStr.length - espaciosDerecha;

                for (let i = 0; i < espaciosIzquierda; i++) createGridCell('', 'meta-cell');

                const filaActualCells = [];
                for (let i = 0; i < pStr.length; i++) {
                    const cell = document.createElement('div');
                    cell.classList.add('cell-input', 'parcial-cell');
                    cell.dataset.expected = pStr[i];
                    multiContainer.appendChild(cell);
                    filaActualCells.push(cell);
                }

                for (let i = 0; i < espaciosDerecha; i++) {
                    createGridCell('•', 'step-dot-cell');
                }

                parcialesCellsGroup.push(filaActualCells.reverse());
            });

            // --- 5. SEGUNDA LÍNEA DIVISORIA ---
            createHorizontalLine(data.totalColumnas);
        }

        // --- 6. FILA DEL RESULTADO FINAL ---
        createGridCell('', 'meta-cell');
        let espaciosRes = data.totalColumnas - 1 - data.strResultado.length;
        for (let i = 0; i < espaciosRes; i++) createGridCell('', 'meta-cell');

        const resultadoCells = [];
        for (let i = 0; i < data.strResultado.length; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell-input', 'total-cell');
            cell.dataset.expected = data.strResultado[i];
            multiContainer.appendChild(cell);
            resultadoCells.push(cell);
        }
        const resultadoCellsReversed = resultadoCells.reverse();

        // --- CONSTRUIR SECUENCIA DE PASOS ---
        gameSteps = [];

        // Si hay parciales (2+ cifras), se añaden primero
        parcialesCellsGroup.forEach(filaCells => {
            filaCells.forEach(cell => gameSteps.push(cell));
        });

        // Fila del resultado (en 1 cifra será la única fila activa)
        resultadoCellsReversed.forEach(cell => gameSteps.push(cell));
    }

    function createGridCell(text, className) {
        const cell = document.createElement('div');
        cell.classList.add(className);
        cell.textContent = text;
        multiContainer.appendChild(cell);
    }

    function createHorizontalLine(columnas) {
        const linea = document.createElement('div');
        linea.classList.add('num2-line');
        linea.style.gridColumn = `1 / span ${columnas}`;
        multiContainer.appendChild(linea);
    }

    function initGame() {
        const data = generateMultiplicacion(cifrasA, cifrasB);
        renderMultiplicacion(data);
        currentStepIndex = 0;
        highlightActiveStep();
    }

    function highlightActiveStep() {
        document.querySelectorAll('.cell-input').forEach(el => el.classList.remove('active'));

        if (currentStepIndex < gameSteps.length) {
            gameSteps[currentStepIndex].classList.add('active');
        } else {
            setTimeout(() => {
                alert('¡Perfecto! Has completado todo el desarrollo de la multiplicación.');
                initGame();
            }, 400);
        }
    }

    function handleInput(digit) {
        if (currentStepIndex >= gameSteps.length) return;

        const currentCell = gameSteps[currentStepIndex];
        const expected = parseInt(currentCell.dataset.expected);

        totalAttempts++;

        if (digit === expected) {
            successfulHits++;
            currentCell.textContent = digit;
            currentCell.classList.remove('active', 'wrong');
            currentCell.classList.add('correct');
            
            currentStepIndex++;
            highlightActiveStep();
        } else {
            currentCell.classList.add('wrong');
            currentCell.style.animation = 'none';
            setTimeout(() => currentCell.style.animation = '', 10);
        }

        playerScoreSpan.textContent = `${successfulHits} / ${totalAttempts}`;
    }

    // Eventos
    digitButtons.forEach(btn => {
        btn.addEventListener('click', () => handleInput(parseInt(btn.textContent)));
    });

    cifrasASelect.addEventListener('change', (e) => {
        cifrasA = parseInt(e.target.value);
        initGame();
    });

    cifrasBSelect.addEventListener('change', (e) => {
        cifrasB = parseInt(e.target.value);
        initGame();
    });

    newOperationButton.addEventListener('click', initGame);

    initGame();
});