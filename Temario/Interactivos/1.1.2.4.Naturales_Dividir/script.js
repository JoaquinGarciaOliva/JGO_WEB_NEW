document.addEventListener('DOMContentLoaded', () => {
    const divisionContainer = document.getElementById('divisionContainer');
    const helperTableContainer = document.getElementById('helperTableContainer');
    const cifrasASelect = document.getElementById('cifrasASelect');
    const cifrasBSelect = document.getElementById('cifrasBSelect');
    const newOperationButton = document.getElementById('newOperationButton');
    const toggleTableButton = document.getElementById('toggleTableButton');
    const playerScoreSpan = document.getElementById('playerScore');
    const digitButtons = document.querySelectorAll('.digit-btn');

    let cifrasA = parseInt(cifrasASelect.value);
    let cifrasB = parseInt(cifrasBSelect.value);
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

            // Guardamos qué carácter del dividendo original se baja en este paso (si no es el primero sin cifra nueva)
            let cifraBajadaAqui = (index < strA.length) ? strA[index] : "";

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

        // --- ENCABEZADO: DIVIDENDO, DIVISOR Y COCIENTE ---
        const headerBlock = document.createElement('div');
        headerBlock.className = 'div-header-block';

        const leftSideContainer = document.createElement('div');
        leftSideContainer.className = 'left-side-container';

        const dividendoDiv = document.createElement('div');
        dividendoDiv.className = 'dividendo-row';
        for (let char of data.strA) {
            const c = document.createElement('div');
            c.className = 'num-cell static-text';
            c.textContent = char;
            dividendoDiv.appendChild(c);
        }
        leftSideContainer.appendChild(dividendoDiv);
        headerBlock.appendChild(leftSideContainer);

        const divisorCocienteBox = document.createElement('div');
        divisorCocienteBox.className = 'divisor-cociente-box';

        const divisorRow = document.createElement('div');
        divisorRow.className = 'divisor-row';
        for (let char of data.strB) {
            const c = document.createElement('div');
            c.className = 'num-cell static-text';
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

        // --- BLOQUE CUERPO: PASOS OPERATIVOS SIMPLIFICADOS ---
        const bodyBlock = document.createElement('div');
        bodyBlock.className = 'div-body-block';
        divisionContainer.appendChild(bodyBlock);

        data.stepsData.forEach((step, stepIdx) => {
            
            // 1. FILA DEL SUSTRAENDO (Producto a restar)
            const rowResta = document.createElement('div');
            rowResta.className = 'body-row';
            
            let offsetResta = step.cifrasBajadas - step.productoResta.length;
            for(let i = 0; i < offsetResta; i++) {
                let s = document.createElement('div'); s.className = 'num-cell empty-space';
                rowResta.appendChild(s);
            }

            const signMinus = document.createElement('div');
            signMinus.className = 'num-cell sign-cell';
            signMinus.textContent = '-';
            rowResta.insertBefore(signMinus, rowResta.firstChild);

            let prodCellsFila = [];
            for (let i = 0; i < step.productoResta.length; i++) {
                const cell = document.createElement('div');
                cell.className = 'num-cell cell-input resta-cell';
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
            lineElem.style.marginLeft = `calc(var(--box-size) * ${offsetResta + 1})`;
            lineElem.style.width = `calc(var(--box-size) * ${step.productoResta.length})`;
            rowLine.appendChild(lineElem);
            bodyBlock.appendChild(rowLine);

            // 3. FILA UNIFICADA: RESULTADO DE LA RESTA + CASILLA DE BAJAR CIFRA
            const rowResultado = document.createElement('div');
            rowResultado.className = 'body-row';
            
            let dSign = document.createElement('div'); dSign.className = 'num-cell empty-space';
            rowResultado.appendChild(dSign);

            let offsetResto = step.cifrasBajadas - step.resto.length;
            for(let i = 0; i < offsetResto; i++) {
                let s = document.createElement('div'); s.className = 'num-cell empty-space';
                rowResultado.appendChild(s);
            }

            // Celdas del resultado de la resta
            let restoCellsFila = [];
            for (let i = 0; i < step.resto.length; i++) {
                const cell = document.createElement('div');
                cell.className = 'num-cell cell-input ' + (step.esUltimo ? 'final-resto-cell' : 'parcial-cell');
                cell.dataset.expected = step.resto[i];
                rowResultado.appendChild(cell);
                restoCellsFila.push(cell);
            }

            // ¡Novedad! Si no es la última resta, añadimos la casilla de bajar cifra en este mismo renglón
            let cellBajarCifra = null;
            if (!step.esUltimo) {
                let proximoStep = data.stepsData[stepIdx + 1];
                cellBajarCifra = document.createElement('div');
                cellBajarCifra.className = 'num-cell cell-input subdiv-cell';
                cellBajarCifra.dataset.expected = proximoStep.cifraBajadaCuerpo;
                rowResultado.appendChild(cellBajarCifra);
            }

            bodyBlock.appendChild(rowResultado);

            // --- FLUJO DIDÁCTICO ASIGNADO ---
            // A) Dígito del Cociente (Izquierda a Derecha)
            gameSteps.push(cocienteCells[stepIdx]); 
            
            // B) Multiplicación a restar (Derecha a Izquierda: Unidades, Decenas...)
            prodCellsFila.reverse().forEach(c => gameSteps.push(c)); 
            
            // C) Resultado de la resta (Derecha a Izquierda: Unidades, Decenas...)
            restoCellsFila.reverse().forEach(c => gameSteps.push(c)); 
            
            // D) Si corresponde, se activa la casilla de al lado para bajar la cifra
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
            gameSteps[currentStepIndex].classList.add('active');
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

    newOperationButton.addEventListener('click', initGame);
    toggleTableButton.addEventListener('click', () => {
        showTable = !showTable;
        updateHelperTable();
    });

    initGame();
});