var startBtn = $(".startBtn");
var exitBtn = $(".exitBtn");
var introCont = $(".introCont");
var quizCont = $(".quizCont");
quizCont.hide();

// if start button is clicked start quiz
function startBtnClicked() {
  introCont.hide();
  quizCont.show();
}
startBtn.click(startBtnClicked);

// if exit button is clicked return to home landing page
function exitBtnClicked() {
  quizCont.hide();
  introCont.show();
}
exitBtn.click(exitBtnClicked);
