// Initial array of gifs
var button;
var topic = ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "angry birds", "ferret", "turtle", "nemo"];
//function for displaying gif data
function renderButtons() {
  //deleting the topic buttons before adding new topic buttons
  //this is necessary to prevent buttons being repeated
  $("#gifs-view").empty();
  // looping through the array of topics, then generate button for ea topic in the array
  for (var i = 0; i < topic.length; i++) {
    var a = $("<button>");
    //adding a class
    a.addClass("topic-btn");
    //adding a data-attribute with a value of the topci 
    a.attr("data-name", topic[i]);
    //providing the button's text with a value of the movie at
    a.text(topic[i]);
    //adding the button to the HTML
    $("#gif-view").append(a);
  }
}
// then dynamically generating buttons for each topic 
$(document).ready(function () {});
$("button").on("click", function () {
  var item = $(this).attr("data");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + item + "&api_key=dc6zaT0xfJmzC&limit=10";


  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .done(function (response) {
      console.log(response);
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        // create a new div for any gif
        var newDiv = $("<div>");
        // Get rating for gif and display
        var p = $("<p>");
        p.text(results[i].rating);
        var p = $("<p>");
        p.text(results[i].rating);
        var p = $("<p>").text("Rating: " + results[i].rating);

      }
    })
})