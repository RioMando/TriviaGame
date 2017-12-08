    $("#start").on("click", function() {
      console.log(this);
  

  $.ajax({
    url: "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple",
    method: "GET"
  }).done(function(response) {
      console.log(response);
      console.log(response.results[0].question);
      console.log(response.results[0].correct_answer);
      console.log(response.results[0].incorrect_answers);
      console.log(response.results[0].incorrect_answers[0]);
      console.log(response.results[0].incorrect_answers[1]);
      console.log(response.results[0].incorrect_answers[2]);
      console.log(response.question);
  });



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