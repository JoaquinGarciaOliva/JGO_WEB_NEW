let currentAnswer = 0;
let score = 0;
let streak = 0;
let inputBuffer = "";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateProblem() {
    inputBuffer = "";
    updateAnswerDisplay();
    
    const types = ['value', 'base', 'exponent'];
    const type = types[getRandomInt(0, 2)];
    
    let base, exp, value;

    // Generar potencias sencillas pero variadas
    const mode = getRandomInt(1, 3);
    if (mode === 1) {
        base = getRandomInt(2, 5);
        exp = getRandomInt(2, 4);
    } else if (mode === 2) {
        base = getRandomInt(6, 10);
        exp = getRandomInt(2, 3);
    } else {
        base = getRandomInt(2, 10);
        exp = getRandomInt(0, 1);
    }

    value = Math.pow(base, exp);

    let qText = "";
    let latex = "";

    if (type === 'value') {
        qText = "Calcula el valor de la potencia:";
        latex = `$$${base}^{${exp}} = ?$$`;
        currentAnswer = value;
    } else if (type === 'base') {
        qText = "¿Cuál es la base faltante?";
        latex = `$$\\square^{${exp}} = ${value}$$`;
        currentAnswer = base;
    } else if (type === 'exponent') {
        qText = "¿Cuál es el exponente?";
        latex = `$$${base}^x = ${value}$$`;
        currentAnswer = exp;
    }

    document.getElementById('question-text').innerText = qText;
    const mathDisplay = document.getElementById('math-expression');
    mathDisplay.innerHTML = latex;

    // Renderizar con MathJax
    if (window.MathJax) {
        MathJax.typesetPromise([mathDisplay]);
    }
}

function pressKey(num) {
    if (inputBuffer.length < 6) {
        inputBuffer += num;
        updateAnswerDisplay();
    }
}

function deleteKey() {
    inputBuffer = inputBuffer.slice(0, -1);
    updateAnswerDisplay();
}

function updateAnswerDisplay() {
    document.getElementById('user-answer').innerText = inputBuffer;
}

function checkAnswer() {
    if (inputBuffer === "") return;

    const userNum = parseInt(inputBuffer, 10);
    const feedback = document.getElementById('feedback');

    if (userNum === currentAnswer) {
        score += 10;
        streak += 1;
        feedback.innerText = "¡Correcto!";
        feedback.className = "feedback correct";
    } else {
        streak = 0;
        feedback.innerText = `Incorrecto. Era ${currentAnswer}`;
        feedback.className = "feedback incorrect";
    }

    document.getElementById('score').innerText = score;
    document.getElementById('streak').innerText = streak;

    setTimeout(() => {
        feedback.innerText = "";
        generateProblem();
    }, 1200);
}

// Soporte opcional para teclado físico
document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') pressKey(e.key);
    else if (e.key === 'Backspace') deleteKey();
    else if (e.key === 'Enter') checkAnswer();
});

// Inicializar el primer ejercicio
window.onload = generateProblem;