document.addEventListener('DOMContentLoaded', () => {
    const multiContainer = document.getElementById('multiContainer');
    const cifrasASelect = document.getElementById('cifrasASelect');
    const tipoOperadorSelect = document.getElementById('tipoOperadorSelect');
    const newOperationButton = document.getElementById('newOperationButton');
    const playerScoreSpan = document.getElementById('playerScore');
    const digitButtons = document.querySelectorAll('.digit-btn');
    const feedbackMessage = document.getElementById('feedbackMessage');

    let cifrasA = parseInt(cifrasASelect.value);
    let tipoOperador = tipoOperadorSelect.value;
    let totalAttempts = 0;
    let successfulHits = 0;

    let gameSteps = []; 
    let currentStepIndex = 0;

    function generateMultiplicacion(cA, tipo) {
        // Generar multiplicando (ej. 234 o 4760)
        const minA = Math.pow(10, cA - 1);
        const maxA = Math.pow(10, cA) - 1;
        let numA = Math.floor(Math.random() * (maxA - minA + 1)) + minA;

        // Opcionalmente se puede añadir un cero al final del multiplicando
        if (Math.random() > 0.5) {
            numA = numA * 10;
        }

        // Generar multiplicador segun el tipo elegido
        const cerosCount = Math.floor(Math.random() * 3) + 1; // 1, 2 o 3 ceros
        let numB = Math.pow(10, cerosCount); // Potencia de 10 (10, 100, 1000)

        if (tipo === 'digitoCeros') {
            const digitoInicial = Math.floor(Math.random() * 8) + 2; // Dígito entre 2 y 9
            numB = digitoInicial * numB; // Ej: 6 x 100 = 600
        }

        let productoTotal = numA * numB;

        return {
            strA: numA.toString(),
            strB: numB.toString(),
            strResultado: productoTotal.toString()
        };
    }

    function renderMultiplicacion(data) {
        multiContainer.innerHTML = '';
        feedbackMessage.textContent = '';
        feedbackMessage.className = 'feedback-msg';

        // --- ENCABEZADO DE LA OPERACIÓN EN LÍNEA ---
        const operationRow = document.createElement('div');
        operationRow.classList.add('inline-operation');

        const factorA = document.createElement('span');
        factorA.textContent = data.strA;
        factorA.classList.add('num-inline');

        const operator = document.createElement('span');
        operator.textContent = 'x';
        operator.classList.add('operator-inline');

        const factorB = document.createElement('span');
        factorB.textContent = data.strB;
        factorB.classList.add('num-inline');

        const equals = document.createElement('span');
        equals.textContent = '=';
        equals.classList.add('operator-inline');

        operationRow.appendChild(factorA);
        operationRow.appendChild(operator);
        operationRow.appendChild(factorB);
        operationRow.appendChild(equals);

        // --- CONTENEDOR DEL RESULTADO (Celdas editables) ---
        const resultBox = document.createElement('div');
        resultBox.classList.add('result-inline');

        const resultCells = [];
        for (let i = 0; i < data.strResultado.length; i++) {
            const cell = document.createElement('div');
            cell.classList.add('digit-input');
            cell.dataset.expected = data.strResultado[i];
            resultBox.appendChild(cell);
            resultCells.push(cell);
        }

        operationRow.appendChild(resultBox);
        multiContainer.appendChild(operationRow);

        // Los pasos del juego van de DERECHA a IZQUIERDA (última cifra en adelante)
        gameSteps = [...resultCells].reverse();
    }

    function initGame() {
        const data = generateMultiplicacion(cifrasA, tipoOperador);
        renderMultiplicacion(data);
        currentStepIndex = 0;
        highlightActiveStep();
    }

    function highlightActiveStep() {
        document.querySelectorAll('.digit-input').forEach(el => el.classList.remove('active'));

        if (currentStepIndex < gameSteps.length) {
            gameSteps[currentStepIndex].classList.add('active');
        } else {
            feedbackMessage.textContent = '¡Excelente! Multiplicación completada correctamente.';
            feedbackMessage.classList.add('success');
            setTimeout(() => {
                initGame();
            }, 1800);
        }
    }

    function handleInput(val) {
        if (currentStepIndex >= gameSteps.length && val !== 'backspace') return;

        if (val === 'backspace') {
            if (currentStepIndex > 0) {
                if (currentStepIndex === gameSteps.length || !gameSteps[currentStepIndex].textContent) {
                    currentStepIndex--;
                }
                const cellToClear = gameSteps[currentStepIndex];
                cellToClear.textContent = '';
                cellToClear.classList.remove('correct', 'wrong', 'active');
                highlightActiveStep();
            }
            return;
        }

        const digit = parseInt(val);
        if (isNaN(digit)) return;

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

    // Teclado en pantalla
    digitButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.getAttribute('data-val');
            handleInput(val);
        });
    });

    // Teclado físico
    document.addEventListener('keydown', (e) => {
        if (e.key >= '0' && e.key <= '9') {
            handleInput(e.key);
        } else if (e.key === 'Backspace') {
            handleInput('backspace');
        }
    });

    // Eventos de selección y reinicio
    cifrasASelect.addEventListener('change', (e) => {
        cifrasA = parseInt(e.target.value);
        initGame();
    });

    tipoOperadorSelect.addEventListener('change', (e) => {
        tipoOperador = e.target.value;
        initGame();
    });

    newOperationButton.addEventListener('click', initGame);

    initGame();
});