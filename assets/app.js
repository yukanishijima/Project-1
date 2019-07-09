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