// This code will run as soon as the page loads
window.onload = function() {
  $("#starter").on("click", function() {
    start();
   //tenQuestions(); 
  });
  $("#answers-div").on("click", ".dataOption", function(){
    name = $(this).attr("name");
    compareAnswer(name);
   //tenQuestions();
  });
};

var correct = 0;
var wrong = 0;
var not_answered = 0; 
var correctAnswer = ""; // To store the correct answer given by the Trivia API
var i = 0;       // Variable used as index to display the 4 answer options
var j = 0;       // Variable used as index to display the 10 questions.
var result = []; // Variable to store the array obtanied for the Trivia API 
var name = "";   // To store the attribute "name" of the options selected by the user

// Generate the start button 
var questionAnswer = $("<div>"); 
var starting = $("<button>");
starting.text("Start");
starting.addClass("button");
questionAnswer.append(starting);
$('#starter').append(questionAnswer);

//To make the call to the Trivia API and store the response in the variable result
function start(){
  $.ajax({
    //url: "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple",
    //url: "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple",
    url: "https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple",  //Category: Cartoon & Animations
    method: "GET"
  }).done(function(resp) {

//    $("#starter").empty();  ///////\\\\\\ To remove the initial Start button
    result = resp.results;
    tenQuestions(); //Call function to display the 1st question  /\/\/\/\/\
}); // End of .done function

function tenQuestions() {
  console.log("correct answer: " + result[j].correct_answer);
  console.log("wrong answers: " + result[j].incorrect_answers);
  //Array to go through the 10 questions returned by the API
//  for (var j=0; j<10; j++) {
//    if (j < 10) {    
    var number = Math.floor(Math.random() * 4);
      //  $("#answers-div").empty(); /////////////////<<<<<<<<<< 12/10/17 @ 22:27
    correctAnswer = result[j].correct_answer;
    //Array and for-loop store the correct answer in a random place to be displayed (stored ramdomly) in a 4 options array)
    displayValue(result[j].question, "question");  //Display Question on Screen
    var answersArray = []; //Array to store the 4 anwsers, including the correct one
    for (var i = 0; i < 4; i++ ) {
      if (i < number ) {
        answersArray[i] = result[j].incorrect_answers[i];
      } else if (i > number) {
        answersArray[i] = result[j].incorrect_answers[i-1];
      } else {                                     //Stores the correct answer in the random position of the array 
        answersArray[i] = result[j].correct_answer;
      }
      displayValue(answersArray[i], "dataOption"); //Call function to display information on screen
    } // End of i-for-loop
//      j++;
//    } // End if j<10 condition
//  } // End of tenQuestions function (j-for-loop) 
  }
}// End of tenQuestions function

function displayValue(info, typeAttr) {
//  $(this).addClass("optns");//////////////////
  var questionAnswer = $("<div>");
  var z = info;
  questionAnswer.addClass(typeAttr);
  questionAnswer.attr("name", z);
  var infoQuestion = info;
  // var p = $("<p>");
  // questionAnswer.append(p);
  questionAnswer.append("<p>" + infoQuestion + "</p>");
  $('#answers-div').append(questionAnswer);
} // End displayValue function

function compareAnswer(nameHere){
  
  if (nameHere === correctAnswer) {
    correct++;
    console.log("corrects: " + correct);
  } else {
    wrong++;
    console.log("wrong: " + wrong);
  }
  j++;
//  $(".dataOption").empty();

} // End of compareAnswer function







  /* NEXT STEPS:
  - Compare attribute name from selected option with the correct answer.
  - Add counters for correct answers, incorrect answers and not answered.
  - Add logic to show correct/incorrect answer when option is selected. 
  - Add timer and display it on screen above question.
  - Modify logic to include to show answer if no option is selectedin the alloted time and show "Out of Time!".
  - Add API to show GIF for the correct answer, including in the search the content stored in attribute "name".
  - Add for-loop/counter to go through the 10 elements of the array (10 questions).
  - Show at the end the summary of the score and the "Start Over" option"
  - If start over option is selceted initialize counters and show the next 10 questions.

  */