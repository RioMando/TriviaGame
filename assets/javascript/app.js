var questionAnswer = $("<div>");
//function starter() {
  var starting = $("<button>");
  starting.text("Start");
  starting.attr("href", "#");
  starting.addClass("button");
  questionAnswer.append(starting);
  $('#display-data').append(questionAnswer);


$(".button").on("click", function() {
      console.log(this);

  $.ajax({
//    url: "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple",
    url: "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple",
//    url: "https://opentdb.com/api.php?amount=10",
    method: "GET"
  }).done(function(response) {
    console.log(response);
    console.log("Correct Answ: " + response.results[0].correct_answer);
    console.log(response.results[0].incorrect_answers);
    $("#display-data").empty();

    var result = response.results;
    number = Math.floor(Math.random() * 4);
    console.log("number: " + number);
    //Array and for-loop to store the 4 options icluding the correct option in a random place to be displayed  
    
    displayValue(result[0].question, "type-question");  //Display Question on Screen
    var optionAnswer = [];
    for (var i = 0; i < 4; i++ ) {
      if (i < number ) {
        optionAnswer[i] = result[0].incorrect_answers[i];
      } else if (i > number) {
        optionAnswer[i] = result[0].incorrect_answers[i-1];
      } else {
        optionAnswer[i] = result[0].correct_answer;
      }
        displayValue(optionAnswer[i], "  /  type-multiOption"); //Call function to display information on screen
    }
  });

    // var p = $("<P>").text("Time R`emaining: " + clock);
    //here goes the FOR-LOOP
  function displayValue(info, typeAttr) {
    console.log("info: " + info + " Type: " + typeAttr);
    var questionAnswer = $("<div>");
    questionAnswer.attr("class", typeAttr);
    var infoQuestion = info;
    var p = $("<p>");
    //  .text(result[0]);
    //infoQuestion.append(p);
    questionAnswer.append(p);
    questionAnswer.append(infoQuestion)
    
    $('#display-data').append(questionAnswer);
/*
    var answDiv = $("<Div>")
    //.text(result.correct_answer);
    var infoOptions = result[0].incorrect_answers[0];
//    var p = $("<p>").text(infoOptions);
    console.log("Q2: " + infoOptions);
    // questionAnswer.append(p);
    //  questionAnswer.append(infoQuestion);
    questionAnswer.append(infoOptions);
    $('#data-answer').append(answDiv);   */
    }
  });



/*

    var responses = ["unoUno ", "dosDos ", "tresTres ", "cuatroCuatro " ];
    

function renderAnswers() {
   // Loops through the array of responses
   console.log($("input").is(":checked"))
  for (var i = 0; i < responses.length; i++) {
    // Then dynamicaly generates buttons for each response option in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<p>");
    // Adds a class of response option to our checkbox
    a.addClass("response");
   // a.addType("checkbox");
    // Added a data-attribute
   // a.attr("type", checkbox);
    a.attr("options", responses[i]);
    // Provided the text asociated to the response
    a.text(responses[i]);
    //a = $("div input[type='checkbox']").attr('checked','checked');
    // Added the button to the buttons-view div
    $("#checkbox-view").append(a);
  }

}
      renderAnswers();
var URL = https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple
*/

//////////////////////////////////////////////////////////////////////////////////////////////

//$('#containerId').append('<input type="checkbox" name="myCheckbox" />');
/*
  // Loops through the array of responses
  for (var i = 0; i < responses.one.length; i++) {
    // Then dynamicaly generates buttons for each response option in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<div>");
        // Adds a class of response option to our checkbox
    a.addClass("response");
    // Added a data-attribute
    a.attr("option", responses.one[i]);
    
    
    // Provided the text asociated to the response
    a.text(responses.one[i]);
    // Added the button to the buttons-view div
    $("#bcheckbox-view").append(a);
  }


// var URL=https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple

*/