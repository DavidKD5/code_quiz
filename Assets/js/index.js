var startBtn = $(".startBtn");
var exitBtn = $(".exitBtn");
var introCont = $(".introCont");
var quizCont = $(".quizCont");
var questionText = $(".questionCont");
var answerList = $(".answerList");
var nextBtn = $(".nextBtn");
var questionCounter = $(".questionCount");
var timeCount = $(".timer");
var resultCont = $(".allDoneCont");

// Begin at first question
var questionNumber = 0;
var questionNumberSelected = 1;
var counter;

// Hide quiz content until start buttne is clicked
quizCont.hide();
resultCont.hide();

// if start button is clicked start quiz
function startBtnClicked() {
  introCont.hide();
  quizCont.show();
  showQuestions(0);
  totalQuestionCounter(1);
  beginTimer(60);
}
startBtn.click(startBtnClicked);

// if exit button is clicked return to home
function exitBtnClicked() {
  quizCont.hide();
  introCont.show();
}
exitBtn.click(exitBtnClicked);

// if next button is clicked move on to next question
function nextBtnClicked() {
  if (questionNumber < questions.length - 1) {
    questionNumber++;
    questionNumberSelected++;
    showQuestions(questionNumber);
    totalQuestionCounter(questionNumberSelected);
    nextBtn.hide();
  } else {
    showResult();
  }
}
nextBtn.click(nextBtnClicked);

// Show current question and answer choices
function showQuestions(questionsIndex) {
  var currentQuestion =
    "<span>" + questions[questionsIndex].question + "</span>;";

  var currentAnswer =
    '<div class="answer"><span>' +
    questions[questionsIndex].choice[0] +
    "</span></div>" +
    '<div class="answer"><span>' +
    questions[questionsIndex].choice[1] +
    "</span></div>" +
    '<div class="answer"><span>' +
    questions[questionsIndex].choice[2] +
    "</span></div>" +
    '<div class="answer"><span>' +
    questions[questionsIndex].choice[3] +
    "</span></div>";

  questionText.html(currentQuestion);
  answerList.html(currentAnswer);
  var option = $(".answer");

  for (var i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "answerSelected(this)");
  }
}

// Show if user selected right or wrong answer
function answerSelected(answer) {
  var userAnswer = answer.textContent;
  var correctAnswer = questions[questionNumber].answer;
  var allAnswers = answerList.children().length;

  if (userAnswer == correctAnswer) {
    answer.classList.add("correct");
  } else {
    answer.classList.add("wrong");
  }

  answerList.children().addClass("disable");
  nextBtn.show();
}

// Allows the question number to change after clicking next
function totalQuestionCounter(questionNumberStart) {
  var totalQuestionsCount =
    "<span><p>" +
    questionNumberStart +
    "</p>Of<p>" +
    questions.length +
    "</p>Questions</span>";

  questionCounter.html(totalQuestionsCount);
}

function showResult() {
  quizCont.hide();
  resultCont.show();
}

// Set timer with countdown
function beginTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.text(time);
    time--;
    if (time < 0) {
      clearInterval(counter);
      timeCount.text("0");
    }
  }
}

function beginTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.text(time);
    time--;
    if (time < 0) {
      clearInterval(counter);
      timeCount.text("0");
    }
  }
}

var initialsBtn = $("#mybtn");

function initialBtnClicked() {
  var inputString = $("#myinput").val();
  highscore();
}

initialsBtn.click(initialBtnClicked);

function highscore() {}
