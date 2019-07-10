// Create quote function
function quote() {
    $.ajax({
      url: "https://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(response) {
        $('#quote').html(response.quoteText)
        $('#author').html("<br/>&dash; " + response.quoteAuthor)
  
      }
    });
  }
  
  $("#quoteButton").on("click", function() {
  
    quote();
  });

// Create function for weather status
$("#add-city").on("click", function (event) {

    event.preventDefault();

    let location = $("#location-input").val().trim();

    var APIKey = "d15b9c0cdc5ef1799aacbfc05974ff66";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
        location + "&units=metric&appid=" + APIKey;

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // We store all of the retrieved data inside of an object called "response"
        .then(function (response) {

            // Log the queryURL
            console.log(queryURL);

            // Log the resulting object
            console.log(response);

            // Transfer content to HTML
            $(".city").html("<h1>" + response.name + " Weather </h1>");
            $(".current-temp").text("Current Temperature (C): " + response.main.temp);
            $(".max-temp").text("Today's High (C): " + response.main.temp_max);
            $(".min-temp").text("Today's Low (C): " + response.main.temp_min);

        });
});