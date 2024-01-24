const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const resultsButton = document.getElementById("results-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const resultsArea = document.getElementById("results-area");
const restartButton = document.getElementById("restart-btn");
const instructions = document.getElementById("instructions");
const playerName = document.getElementById("player-name");
let score = 0;

/* Variable so questions are shuffled so different question is displayed each time you play */
let shuffledQuestions, currentQuestionIndex;

/* Add Event Listeners to Start and Next Buttons*/
startButton.addEventListener("click", startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < 10) {
        setNextQuestion();
    } else {
        resultsButton.classList.remove('hide');
    }
});

/** 
 * Starts the game by hiding the start button and showing the question container element
 * Questions are shuffled and 10 questions will be displayed at random
 * Question counter will add 1 each question
 */
function startGame() {
    instructions.classList.add("hide");
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    const currentQuestionNumber = document.getElementById("current-question");
    currentQuestionNumber.classList.remove("hide");
    currentQuestionNumber.innerText = currentQuestionIndex + 1;

    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

/* Hides the old answer buttons, to display current question's answers in buttons */
function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/**
 * Upon clicking an answer button
 * If it is the correct answer, adds 1 to the incrimented score
 * If the question is less than 10, it will show the next button
 * If the question is 10, it will show results button
 */
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    if (correct) {
        score++;
        console.log('score incremented to', score);
    }
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (currentQuestionIndex < 9) {
        nextButton.classList.remove('hide');
        resultsButton.classList.add('hide');
    } else {
        resultsButton.classList.remove('hide');
    }
}

/* If the answer is correct, changes button background colour to green
* If the answer is wrong, changes button background colour to red
*/
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

/* Get current score from DOM and increment by 1
*/

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

/** 
 * When click on results button goes to results page
*/
resultsButton.addEventListener("click", () => {
    resultsButton.classList.add("hide");
    questionContainerElement.classList.add("hide");
    resultsArea.classList.remove("hide");
    showResult();
});

/* Display set for end of game
7 different responses based on final score*/
function showResult() {
    document.getElementById('score').textContent = score;
    let scoreText = document.getElementById("score-text");
    restartButton.classList.remove('hide');
    let player = playerName.value;
    document.getElementById("name").innerText = `${player}`;
    if (score > 8) {
        scoreText.innerText = `You have been awarded a grade of: \n OUTSTANDING`;
    } else if (score > 6) {
        scoreText.innerText = `You have been awarded a grade of: \n EXCEEDS EXPECTATIONS`; 
    } else if (score > 4) {
        scoreText.innerText = `You have been awarded a grade of: \n ACCEPTABLE`;
    } else if (score > 2) {
        scoreText.innerText = `You have been awarded a grade of: \n POOR`;
    } else if (score > 0) {
        scoreText.innerText = `You have been awarded a grade of: \n DREADFUL`;
    } else {
        scoreText.innerText = `You have been awarded a grade of: \n TROLL`;
    }
}

restartButton.addEventListener("click", () => {
    resultsArea.classList.add("hide");
    score = 0;
    startGame();
});