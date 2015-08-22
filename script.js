$(document).ready(function(){

  for (i = 1; i <= 100; i++) {
    if ( ((i % 3) == 0) && ((i % 5) == 0) ) {
      $('body').append('<div>fizz buzz</div>');
    }

    else if ((i % 3) == 0) {
      $('body').append('<div>fizz</div>');
    }
    else if ((i % 5) == 0) {
      $('body').append('<div>buzz</div>');
    }
    else {
      $('body').append("<div>" + i + "</div>");
    }
  }

});
