$(document).ready(function () {
  $("#welcomeModal").modal("show");
});

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCM-FDklynhgyxsuprIgI_Nd5f0RrBAJfk",
  authDomain: "get-mindful.firebaseapp.com",
  databaseURL: "https://get-mindful.firebaseio.com",
  projectId: "get-mindful",
  storageBucket: "",
  messagingSenderId: "714912023665",
  appId: "1:714912023665:web:918d3042e7ba2251"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.database();
var userName;
var userTime;

// welcome modal function
$("#startBtn").on("click", function () {
  event.preventDefault();
  userName = $("#userName").val();

  if (userName.length !== 0) {
    $("#timerModal").modal("show");
    $("#welcomeModal").modal("hide");
    $("#customizeTime").hide();
    $("#modalMsg").html("<p>Welcome " + userName + ", select a time!</p>");

    db.ref().set({
      name: userName
    });
  }
});

// timer modal function
$("#minuteBtn1").on("click", function (event) {
  event.preventDefault();

  $("#timerModal").modal("hide");
  $("#welcomeModal").modal("hide");

  userTime = $("#minuteBtn1").attr("val") * 10000;
  db.ref().update({
    time: userTime,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});

$("#minuteBtn2").on("click", function (event) {
  event.preventDefault();

  $("#timerModal").modal("hide");
  $("#welcomeModal").modal("hide");

  userTime = $("#minuteBtn2").attr("val") * 10000;
  db.ref().update({
    time: userTime,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});

$("#minuteBtn3").on("click", function (event) {
  event.preventDefault();

  $("#timerModal").modal("hide");
  $("#welcomeModal").modal("hide");

  userTime = $("#minuteBtn3").attr("val") * 10000;
  db.ref().update({
    time: userTime,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
});

$("#customizeBtn").on("click", function () {
  $("#customizeTime").toggle();
});

$("#submitBtn").on("click", function (event) {
  event.preventDefault();

  $("#timerModal").modal("hide");
  $("#welcomeModal").modal("hide");

  var hour = $("#hour").val();
  var minute = $("#minute").val();
  var second = $("#second").val();

  userTime = ((hour * 60 * 60) + (minute * 60) + second) * 1000;
  console.log(userTime);

  db.ref().update({
    time: userTime,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });
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
