//$('#containerId').append('<input type="checkbox" name="myCheckbox" />');

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
