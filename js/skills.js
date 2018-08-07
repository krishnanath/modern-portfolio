var lang = {
    "html": "75%",
    "css": "67%",
    "javascript": "60%",
    "php": "55%",
    "angular": "52%",
    "sql" :"44%",
    "python": "11%"
  };
  
  var multiply = 4;
  
  $.each( lang, function( language, pourcent) {
  
    var delay = 700;
    
    setTimeout(function() {
      $('#'+language+'-pourcent').html(pourcent);
    },delay*multiply);
    
    multiply++;
  
  });