const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const resultsButton = document.getElementById('results-btn');
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

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
    
})

/** 
 * Starts the game by hiding the start button and showing the question container element
 * Questions are shuffled and 10 questions will be displayed at random
 * Question counter will add 1 each question
 */
function startGame() {
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide");
    setNextQuestion()
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
    })
}

/* Hides the old answer buttons, to display current question's answers in buttons */
function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/**
 * When clicking on button, it checks if it is the correct answer or not
 */ 
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);     
    })
    if (currentQuestionIndex < 9 ) {
        nextButton.classList.remove('hide');
        resultsButton.classList.add('hide');
    } else {
        resultsButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
