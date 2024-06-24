const quizData = [{
    question: "where dose dhanvi likes to go?",
    a: "bangalore",
    b: "goa",
    c: "delhi",
    d: "uttar pradesh",
    correct: "a",
}, {
    question: "what dose dhanvi like?",
    a: "biryani",
    b: "choclates",
    c: "tomato",
    d: "aloo fry",
    correct: "c",
}, {
    question: "where dose dhanvi likes to travel",
    a: "europe",
    b: "united kingdom",
    c: "usa",
    d: "around the world",
    correct: "d",
}, {
    question: "what weather dose dhanvi like",
    a: "summer",
    b: "winter",
    c: "rainy",
    d: "none of the above",
    correct: "c",
}, ];
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
};
const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = ` <h2>You answered ${score}/${quizData.length} questions correctly</h2> 
                <button onclick="history.go(0)">Play Again</button> `
                // location.reload() won't work in CodePen for security reasons; } } });
        }
    }
});