var questionAnswer = $("<div>");
// function starter() {
  var starting = $("<button>");
  starting.text("Start");
  starting.attr("href", "#");
  starting.addClass("button");
  questionAnswer.append(starting);
  $('#display-data').append(questionAnswer);

// }
$(".button").on("click", function() {

  $.ajax({
    //url: "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple",
    url: "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple",
    //url: "https://opentdb.com/api.php?amount=10",
    method: "GET"
  }).done(function(response) {
    
    $("#answers-div").empty();

    var result = response.results;
    number = Math.floor(Math.random() * 4);
    console.log("number: " + number);

    //Array and for-loop to store the 4 options icluding the correct option in a random place to be displayed  
    displayValue(result[0].question, "question");  //Display Question on Screen
    var optionAnswer = [];
    for (var i = 0; i < 4; i++ ) {
      if (i < number ) {
        optionAnswer[i] = result[0].incorrect_answers[i];
      } else if (i > number) {
        optionAnswer[i] = result[0].incorrect_answers[i-1];
      } else {
        optionAnswer[i] = result[0].correct_answer;
      }
        displayValue(optionAnswer[i], "dataOption"); //Call function to display information on screen
    }
  });

  // var p = $("<P>").text("Time R`emaining: " + clock);
  // here goes the FOR-LOOP
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
  }
});

    // Adding a click event listener to all elements with a class of "movie"
    //this is the good code      $("#answers-div").on("click", ".dataOption", calling );
      $("#answers-div").on("click", ".dataOption", function(){
        console.log($(this).attr("name"));
      });

// $(".dataOption").click(function(event){
//   event.preventDefault();
// //  console.log(this); 
// //  calling();
// });


function calling() {
  console.log("You selected an answer");
};

/*
  function EvaluateAnswer () {
    alert("correct, #: " );
    console.log(this.name);
  } 


*/