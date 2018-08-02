$(document).ready(function () {
});
var topics = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "angry birds", "ferret", "turtle", "nemo"];
//function for dumping JSON content for each button into div
function displayGif() {
  $("#gifs-area").empty();
  var x = $(this).attr("data-name");
 

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=dc6zaTOxFJmzC&limit = 10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function (response) {

    console.log(response);
     for (var i = 0; i < 10; i++) {
       var nameDiv = $("<div>");
       nameDiv.addClass("xgif");

       var xx = $("<img width = 150px height = 150px class ='prop-gif'>");
       xx.attr("src", response.data[i].images.original_still.url);
       xx.attr("data-still", response.data[i].images.original_still.url);
       xx.attr("data-animate", response.data[i].images.original.url);
       xx.attr("data-state", "still");
       xx.attr("class", "gif");
       nameDiv.append(xx);

       var rating = response.data[i].rating;
       console.log(response);
       var p = $("<p>").text("Rating: " + rating);
       nameDiv.append(p);                                                  

       $("#gifs-area").append(nameDiv);
    }
  });
}
//function for displaying gif data
function renderButtons() {
  // Deleting the GIFs prior to adding new Gifs
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-area").empty();
  // Looping through the array of movies
  for (var k = 0; k < topics.length; k++) {
    // Then dynamicaly generating buttons for each topic in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of gif-btn to our button
    a.addClass("gif-btn");
    // Adding a data-attribute topic
    a.attr("data-name", topics[k]);
    // Providing the initial button text
    a.text(topics[k]);
    // Adding the button to the buttons-view div
    $("#buttons-area").append(a);
  }
}
//function to animate gifs
function animateGif() {

  var state = $(this).attr("data-state");
  var playGif = $(this).attr("data-animate");
  var pauseGif = $(this).attr("data-still");

  if (state === "still") {
    $(this).attr("src", playGif);
    $(this).attr("data-state", "animate");
  }

  else if (state === "animate") {
    $(this).attr("src", pauseGif);
    $(this).attr("data-state", "still");
  }
}

// Function that handles events for submit button
$("#add-gif").on("click", function (event) {
 event.preventDefault();

// grab input from text box
  var newTopic = $("#gif-input").val().trim();
  // new topic is added to end of topics array  
  topics.push(newTopic);
  // buttons re loaded with new topic
  
  renderButtons();

  
                                                                   
});
renderButtons();
$(document).on("click", ".gif", animateGif);
$(document).on("click", ".gif-btn", displayGif);
