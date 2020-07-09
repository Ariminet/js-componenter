const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// Create our question
let questions = [
  {
    question: "what does HTML stand for?",
    imgSrc: "./assets/images/html.png",
    choiceA: "Hyper text markup language",
    choiceB: "Cascading style sheet",
    choiceC: "JavaScript",
    correct: "A"
  },
  {
    question: "what does CSS stand for?",
    imgSrc: "./assets/images/css.png",
    choiceA: "React",
    choiceB: "Cascading style sheet",
    choiceC: "Angular",
    correct: "B"
  },
  {
    question: "what does JS stand for?",
    imgSrc: "./assets/images/js.png",
    choiceA: "Cascading style sheet",
    choiceB: "Hyper text markup language",
    choiceC: "JavaScript",
    correct: "C"
  },
  {
    question: "Who is this",
    imgSrc: "./assets/images/einstein.jpg",
    choiceA: "Nikola Tesla",
    choiceB: "Donald Trump",
    choiceC: "Einstein",
    correct: "C"
  },
  {
    question: "Who is this",
    imgSrc: "./assets/images/gates.jpg",
    choiceA: "Bill Gates",
    choiceB: "Steve Jobs",
    choiceC: "Donald Trump",
    correct: "A"
  },
  {
    question: "Who is this",
    imgSrc: "./assets/images/grande.jpg",
    choiceA: "Will Smith",
    choiceB: "Miley Cyrus",
    choiceC: "Arianna Grande",
    correct: "C"
  },
  {
    question: "Who is this",
    imgSrc: "./assets/images/jobs.jpg",
    choiceA: "Nikola Tesla",
    choiceB: "Bill Gates",
    choiceC: "Steve Jobs",
    correct: "C"
  },
  {
    question: "Who is this",
    imgSrc: "./assets/images/smith.jpg",
    choiceA: "Lue Ferigno",
    choiceB: "Arnold Swchartznegger",
    choiceC: "Will SMith",
    correct: "C"
  },
  {
    question: "Who is this",
    imgSrc: "./assets/images/tesla.jpg",
    choiceA: "Nikola Tesla",
    choiceB: "Bent Fabricous Bjerre",
    choiceC: "Leonardo DeCaprio",
    correct: "A"
  },
  {
    question: "Who is this",
    imgSrc: "./assets/images/trump.jpg",
    choiceA: "Donald Trump",
    choiceB: "Barrack Obama",
    choiceC: "John F. Kennnedy",
    correct: "A"
  }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + "> </img>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
}
start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "grid";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000);
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// counter render

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit + "px";
    count++;
  } else {
    count = 0;
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      clearInterval(TIMER);
    }
  }
}

// checkAnswer
function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    //answer is correct
    asnwerIsCorrect();
    score++;
  } else {
    answerIsWrong();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    clearInterval(TIMER);
    scoreRender();
  }
}

function asnwerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

function scoreRender() {
  scoreDiv.style.display = "block";

  const scorePercent = Math.round((100 * score) / questions.length);

  let img =
    scorePercent >= 80
      ? "./assets/images/5.png"
      : scorePercent >= 60
      ? "./assets/images/4.png"
      : scorePercent >= 40
      ? "./assets/images/3.png"
      : scorePercent >= 20
      ? "./assets/images/2.png"
      : "./assets/images/1.png";
  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + scorePercent + "%</p>";
}
