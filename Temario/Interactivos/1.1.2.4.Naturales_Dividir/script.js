document.addEventListener('keydown', (event) => {
    if (event.key >= '0' && event.key <= '9') {
        const buttons = document.querySelectorAll('.score-buttons .digit-btn');
        const targetButton = Array.from(buttons).find(
            (btn) => btn.textContent.trim() === event.key
        );

        if (targetButton) {
            targetButton.click();
            targetButton.classList.add('active');
            setTimeout(() => targetButton.classList.remove('active'), 150);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const divisionContainer = document.getElementById('divisionContainer');
    const helperTableContainer = document.getElementById('helperTableContainer');
    const cifrasASelect = document.getElementById('cifrasASelect');
    const cifrasBSelect = document.getElementById('cifrasBSelect');
    const conRestaCheckbox = document.getElementById('conRestaCheckbox');
    const newOperationButton = document.getElementById('newOperationButton');
    const toggleTableButton = document.getElementById('toggleTableButton');
    const playerScoreSpan = document.getElementById('playerScore');
    const digitButtons = document.querySelectorAll('.digit-btn');
    const keypadWrapper = document.getElementById('keypadWrapper');

    let cifrasA = parseInt(cifrasASelect.value);
    let cifrasB = parseInt(cifrasBSelect.value);
    let conResta = conRestaCheckbox.checked;
    let totalAttempts = 0;
    let successfulHits = 0;
    let showTable = false;

    let gameSteps = []; 
    let currentStepIndex = 0;
    let currentDivisor = 1;

    function generateDivision(cA, cB) {
        const minA = Math.pow(10, cA - 1);
        const maxA = Math.pow(10, cA) - 1;
        const minB = Math.pow(10, cB - 1);
        const maxB = Math.pow(10, cB) - 1;

        let numA = Math.floor(Math.random() * (maxA - minA + 1)) + minA;
        let numB = Math.floor(Math.random() * (maxB - minB + 1)) + minB;
        
        if (numB > numA) { [numA, numB] = [numB, numA]; }
        currentDivisor = numB;

        const strA = numA.toString();
        const strB = numB.toString();

        let stepsData = [];
        let index = 0;
        let currentSubDividendoStr = "";
        let cocienteCompletoStr = "";

        while (index < strA.length) {
            currentSubDividendoStr += strA[index];
            let currentSubDividendoInt = parseInt(currentSubDividendoStr);

            if (currentSubDividendoInt < numB && index + 1 < strA.length && cocienteCompletoStr === "") {
                index++;
                continue; 
            }

            let digitoCociente = Math.floor(currentSubDividendoInt / numB);
            let productoResta = digitoCociente * numB;
            let restoIntermedio = currentSubDividendoInt - productoResta;

            cocienteCompletoStr += digitoCociente.toString();

            let cifraBajadaAqui = strA[index];

            stepsData.push({
                subDividendo: currentSubDividendoStr,
                digitoCociente: digitoCociente.toString(),
                productoResta: productoResta.toString(),
                resto: restoIntermedio.toString(),
                esUltimo: (index === strA.length - 1),
                cifrasBajadas: index + 1,
                cifraBajadaCuerpo: cifraBajadaAqui
            });

            currentSubDividendoStr = restoIntermedio.toString();
            if (currentSubDividendoStr === "0" && index + 1 < strA.length) {
                currentSubDividendoStr = "";
            }
            index++;
        }

        return { strA, strB, stepsData, cociente: cocienteCompletoStr };
    }

    function renderDivision(data) {
        divisionContainer.innerHTML = '';
        gameSteps = [];

        const headerBlock = document.createElement('div');
        headerBlock.className = 'div-header-block';

        // Lado Izquierdo: Dividendo y todo el cuerpo debajo para mantener alineación estricta
        const leftSideContainer = document.createElement('div');
        leftSideContainer.className = 'left-side-container';

        const dividendoDiv = document.createElement('div');
        dividendoDiv.className = 'dividendo-row';
        for (let char of data.strA) {
            const c = document.createElement('div');
            c.className = 'num-cell static-text dividendo-cell';
            c.textContent = char;
            dividendoDiv.appendChild(c);
        }
        leftSideContainer.appendChild(dividendoDiv);

        const bodyBlock = document.createElement('div');
        bodyBlock.className = 'div-body-block';
        leftSideContainer.appendChild(bodyBlock);

        headerBlock.appendChild(leftSideContainer);

        // Lado Derecho: Divisor (con raya izquierda y abajo) y Cociente (sin raya izquierda)
        const divisorCocienteBox = document.createElement('div');
        divisorCocienteBox.className = 'divisor-cociente-box';

        const divisorRow = document.createElement('div');
        divisorRow.className = 'divisor-row';
        for (let char of data.strB) {
            const c = document.createElement('div');
            c.className = 'num-cell static-text divisor-cell';
            c.textContent = char;
            divisorRow.appendChild(c);
        }
        divisorCocienteBox.appendChild(divisorRow);

        const cocienteRow = document.createElement('div');
        cocienteRow.className = 'cociente-row';
        const cocienteCells = [];
        for (let i = 0; i < data.cociente.length; i++) {
            const cell = document.createElement('div');
            cell.className = 'num-cell cell-input cociente-cell';
            cell.dataset.expected = data.cociente[i];
            cocienteRow.appendChild(cell);
            cocienteCells.push(cell);
        }
        divisorCocienteBox.appendChild(cocienteRow);
        headerBlock.appendChild(divisorCocienteBox);

        divisionContainer.appendChild(headerBlock);

        // --- CONSTRUCCIÓN DEL CUERPO ---
        data.stepsData.forEach((step, stepIdx) => {
            let prodCellsFila = [];

            if (conResta) {
                // 1. FILA DEL SUSTRAENDO (Producto a restar)
                const rowResta = document.createElement('div');
                rowResta.className = 'body-row';
                
                let offsetResta = step.cifrasBajadas - step.productoResta.length;
                for (let i = 0; i < offsetResta; i++) {
                    let s = document.createElement('div'); 
                    s.className = 'num-cell empty-space';
                    rowResta.appendChild(s);
                }

                for (let i = 0; i < step.productoResta.length; i++) {
                    const cell = document.createElement('div');
                    cell.className = 'num-cell cell-input resta-cell';
                    if (i === 0) {
                        cell.classList.add('resta-cell-first'); // Añade el signo '-' flotante
                    }
                    cell.dataset.expected = step.productoResta[i];
                    rowResta.appendChild(cell);
                    prodCellsFila.push(cell);
                }
                bodyBlock.appendChild(rowResta);

                // 2. LÍNEA HORIZONTAL DE LA RESTA
                const rowLine = document.createElement('div');
                rowLine.className = 'body-row';
                const lineElem = document.createElement('div');
                lineElem.className = 'visual-line';
                lineElem.style.marginLeft = `calc(${offsetResta} * (var(--box-size) + var(--cell-gap)))`;
                lineElem.style.width = `calc(${step.productoResta.length} * var(--box-size) + ${step.productoResta.length - 1} * var(--cell-gap))`;
                rowLine.appendChild(lineElem);
                bodyBlock.appendChild(rowLine);
            }

            // 3. FILA DEL RESULTADO + CASILLA DE LA CIFRA QUE SE BAJA
            const rowResultado = document.createElement('div');
            rowResultado.className = 'body-row';

            let offsetResto = step.cifrasBajadas - step.resto.length;
            for (let i = 0; i < offsetResto; i++) {
                let s = document.createElement('div'); 
                s.className = 'num-cell empty-space';
                rowResultado.appendChild(s);
            }

            let restoCellsFila = [];
            for (let i = 0; i < step.resto.length; i++) {
                const cell = document.createElement('div');
                cell.className = 'num-cell cell-input ' + (step.esUltimo ? 'final-resto-cell' : 'parcial-cell');
                cell.dataset.expected = step.resto[i];
                rowResultado.appendChild(cell);
                restoCellsFila.push(cell);
            }

            let cellBajarCifra = null;
            if (!step.esUltimo) {
                let proximoStep = data.stepsData[stepIdx + 1];
                cellBajarCifra = document.createElement('div');
                cellBajarCifra.className = 'num-cell cell-input subdiv-cell';
                cellBajarCifra.dataset.expected = proximoStep.cifraBajadaCuerpo;
                rowResultado.appendChild(cellBajarCifra);
            }

            bodyBlock.appendChild(rowResultado);

            // --- ORDEN DE INTERACCIÓN DEL JUEGO ---
            // A) Digitar cifra del cociente
            gameSteps.push(cocienteCells[stepIdx]); 
            
            // B) Digitar producto a restar (si aplica)
            if (conResta) {
                prodCellsFila.reverse().forEach(c => gameSteps.push(c)); 
            }
            
            // C) Digitar resto de la resta
            restoCellsFila.reverse().forEach(c => gameSteps.push(c)); 
            
            // D) Bajar exactamente una cifra
            if (cellBajarCifra) {
                gameSteps.push(cellBajarCifra);
            }
        });
    }

    function updateHelperTable() {
        helperTableContainer.innerHTML = `<h3>Tabla del ${currentDivisor}</h3>`;
        for (let i = 1; i <= 9; i++) {
            const row = document.createElement('div');
            row.className = 'table-row';
            row.textContent = `${currentDivisor} x ${i} = ${currentDivisor * i}`;
            helperTableContainer.appendChild(row);
        }
        if (showTable) {
            helperTableContainer.classList.remove('hidden');
            toggleTableButton.textContent = "Ocultar Tabla";
        } else {
            helperTableContainer.classList.add('hidden');
            toggleTableButton.textContent = "Mostrar Tabla";
        }
    }

    function initGame() {
        const data = generateDivision(cifrasA, cifrasB);
        renderDivision(data);
        updateHelperTable();
        currentStepIndex = 0;
        highlightActiveStep();
    }

    function highlightActiveStep() {
        document.querySelectorAll('.cell-input').forEach(el => el.classList.remove('active'));

        if (currentStepIndex < gameSteps.length) {
            const activeCell = gameSteps[currentStepIndex];
            activeCell.classList.add('active');
            
            // Desplaza la botonera dinámicamente a la altura de la casilla activa
            const activeRect = activeCell.getBoundingClientRect();
            const containerRect = divisionContainer.getBoundingClientRect();
            const offsetTop = activeRect.top - containerRect.top;
            
            keypadWrapper.style.transform = `translateY(${Math.max(0, offsetTop)}px)`;
        } else {
            setTimeout(() => {
                alert('¡Perfecto! Has completado todo el desarrollo de la división.');
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

    conRestaCheckbox.addEventListener('change', (e) => {
        conResta = e.target.checked;
        initGame();
    });

    newOperationButton.addEventListener('click', initGame);
    toggleTableButton.addEventListener('click', () => {
        showTable = !showTable;
        updateHelperTable();
    });

    initGame();
});