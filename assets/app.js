
$(document).ready(function () {
  $("#welcomeModal").modal("show");
});

$("#startBtn").on("click", function () {
  if ($("#userName").val().length !== 0) {
    $("#timerModal").modal("show");
    $("#customizeTime").hide();
    $("#modalMsg").html("<p>Welcome " + $("#userName").val() + ", select a time!</p>");
  }
});

$("#customizeBtn").on("click", function () {
  $("#customizeTime").show();
});

