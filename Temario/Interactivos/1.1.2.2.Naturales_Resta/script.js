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
    const restaContainer = document.getElementById('restaContainer');
    const cifrasSelect = document.getElementById('cifrasSelect');
    const newOperationButton = document.getElementById('newOperationButton');
    const playerScoreSpan = document.getElementById('playerScore');
    const digitButtons = document.querySelectorAll('.digit-btn');

    let totalCifras = parseInt(cifrasSelect.value);
    let currentResta = {};
    let activeCellIndex = 0; // Apunta al índice del array de celdas de respuesta (de DERECHA a IZQUIERDA)
    let totalAttempts = 0;
    let successfulHits = 0;

    // Genera números según las cifras y asegura que Minuendo >= Subtraendo
    function generateResta(cifras) {
        const min = Math.pow(10, cifras - 1);
        const max = Math.pow(10, cifras) - 1;

        let numA = Math.floor(Math.random() * (max - min + 1)) + min;
        let numB = Math.floor(Math.random() * (max - min + 1)) + min;

        const minuendo = Math.max(numA, numB);
        const subtraendo = Math.min(numA, numB);
        const resultado = minuendo - subtraendo;

        // Convertir a cadenas rellenando con espacios si es necesario
        const minuendoStr = minuendo.toString().padStart(cifras, ' ');
        const subtraendoStr = subtraendo.toString().padStart(cifras, ' ');
        const resultadoStr = resultado.toString().padStart(cifras, '0'); 

        return { minuendoStr, subtraendoStr, resultadoStr, cifras };
    }

    function renderResta() {
        restaContainer.innerHTML = '';
        
        // Estructura en Grid CSS basada en el número de cifras (+ 1 para el signo '-' a la izquierda)
        const columnas = currentResta.cifras + 1;
        restaContainer.style.gridTemplateColumns = `repeat(${columnas}, 50px)`;

        // 1. Renderizar Fila del Minuendo
        // Primer bloque vacío para alinearse con el signo de abajo
        createGridCell('', 'meta-cell');
        for (let char of currentResta.minuendoStr) {
            createGridCell(char, 'digit-cell');
        }

        // 2. Renderizar Fila del Subtraendo
        createGridCell('-', 'sign-cell');
        for (let char of currentResta.subtraendoStr) {
            createGridCell(char, 'digit-cell');
        }

        // 3. Línea divisoria (Ocupa todo el ancho de las columnas)
        const linea = document.createElement('div');
        linea.classList.add('num2-line');
        linea.style.gridColumn = `1 / span ${columnas}`;
        restaContainer.appendChild(linea);

        // 4. Renderizar Fila de Celdas de Respuesta (Inputs vacíos deshabilitados)
        // Celda vacía debajo del signo menos
        createGridCell('', 'meta-cell');
        
        // Creamos las celdas de resultado de izquierda a derecha en el DOM
        const resultCells = [];
        for (let i = 0; i < currentResta.cifras; i++) {
            const cell = document.createElement('div');
            cell.classList.add('cell-input');
            cell.textContent = '';
            // Guardamos el valor esperado real en el dataset de la celda
            cell.dataset.expected = currentResta.resultadoStr[i];
            restaContainer.appendChild(cell);
            resultCells.push(cell);
        }

        // Definimos el orden del juego: de DERECHA a IZQUIERDA
        // Las celdas con espacios vacíos a la izquierda (en restas pequeñas) se omiten o se autocompletan
        return resultCells;
    }

    function createGridCell(text, className) {
        const cell = document.createElement('div');
        cell.classList.add(className);
        cell.textContent = text;
        restaContainer.appendChild(cell);
    }

    let activeCellsOrder = [];

    function initGame() {
        currentResta = generateResta(totalCifras);
        const cells = renderResta();
        
        // El orden de resolución matemática es de derecha a izquierda
        activeCellsOrder = [...cells].reverse();
        activeCellIndex = 0;
        
        highlightActiveCell();
    }

    function highlightActiveCell() {
        // Quitar estado activo previo
        activeCellsOrder.forEach(cell => cell.classList.remove('active'));
        
        if (activeCellIndex < activeCellsOrder.length) {
            activeCellsOrder[activeCellIndex].classList.add('active');
        } else {
            // Si ya no quedan celdas, se ha terminado la resta con éxito
            setTimeout(() => {
                alert('¡Felicidades! Has completado la resta correctamente.');
                initGame();
            }, 400);
        }
    }

    function handleInput(digit) {
        if (activeCellIndex >= activeCellsOrder.length) return;

        const currentCell = activeCellsOrder[activeCellIndex];
        const expectedDigit = currentCell.dataset.expected;

        totalAttempts++;

        if (digit === parseInt(expectedDigit)) {
            // Acierto
            successfulHits++;
            currentCell.textContent = digit;
            currentCell.classList.remove('active', 'wrong');
            currentCell.classList.add('correct');
            
            // Avanzar a la siguiente celda de la izquierda
            activeCellIndex++;
            highlightActiveCell();
        } else {
            // Fallo
            currentCell.classList.add('wrong');
            // Efecto flash para indicar error si vuelve a pulsar mal
            currentCell.style.animation = 'none';
            setTimeout(() => currentCell.style.animation = '', 10);
        }

        updateScore();
    }

    function updateScore() {
        playerScoreSpan.textContent = `${successfulHits} / ${totalAttempts}`;
    }

    // --- Listeners de Eventos ---
    
    // Botonera virtual numérica
    digitButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = parseInt(btn.textContent);
            handleInput(val);
        });
    });

    // Cambiar tamaño de cifras
    cifrasSelect.addEventListener('change', (e) => {
        totalCifras = parseInt(e.target.value);
        initGame();
    });

    // Botón nueva operación
    newOperationButton.addEventListener('click', initGame);

    // Iniciar por primera vez
    initGame();
});