//welcome modal function
$(document).ready(function () {
  $("#welcomeModal").modal("show");
});

//timer modal function
$("#startBtn").on("click", function () {
  if ($("#userName").val().length !== 0) {
    $("#timerModal").modal("show");
    $("#welcomeModal").modal("hide");
    $("#customizeTime").hide();
    $("#modalMsg").html("<p>Welcome " + $("#userName").val() + ", select a time!</p>");
  }
});

$("#customizeBtn").on("click", function () {
  $("#customizeTime").toggle();
});

$("#submitBtn").on("click", function () {
  $("#timerModal").modal("hide");
  $("#welcomeModal").modal("hide");
});

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
    success: function (response) {
      $('#quote').html(response.quoteText)
      $('#author').html("<br/>&dash; " + response.quoteAuthor)

    }
  });
}

$("#quoteButton").on("click", function () {

  quote();
});

// //Functions for Play,Pause, Stop
// var intervalID;

// //function for 1 minute selection
// var number= 1;

//    function minuteBtn1(){
//    clearInterval(intervalID);
//    intervalID = setInterval(decrement, 60000);}

//    function decrement(){
//     number--;
//     console.log(number)
//     if ( number === 0){
//       stop();
//      }
//     }
// //function for 5 minute selection 
// var timer5= 5;
// //function for 10 minute selection
// var timer10= 10;

// //Play Button
// $(".BeginBtn").on("click", function(){

//   if ("#minuteBtn1"){
//     minuteBtn1()
//   }
//   console.log("playbutton");
// })
// //Pause Button

// function RecurringTimer(callback, delay) {
//   var timerId, start, remaining = delay;

//   this.pause = function() {
//       window.clearTimeout(timerId);
//       remaining -= new Date() - start;
//   };

//   var resume = function() {
//       start = new Date();
//       timerId = window.setTimeout(function() {
//           remaining = delay;
//           resume();
//           callback();
//       }, remaining);
//   };

//   this.resume = resume;

//   this.resume();
// }
// //Stop Function
// function stop (){
//   clearInterval(intervalID)
// }
// //Timeut Function
// function timeout(){

//   clearInterval(intervalID)

// }
// //Stop Button/Timeout






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
