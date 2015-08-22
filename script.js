$(document).ready(function(){

  for (i = 1; i <= 100; i++) {
    if ( ((i % 3) == 0) && ((i % 5) == 0) ) {
      console.log("fizz buzz");
      $('body').append('<div>fizz buzz</div>');
    }

    else if ((i % 3) == 0) {
      console.log("fizz");
      $('body').append('<div>fizz</div>');
    }
    else if ((i % 5) == 0) {
      console.log("buzz");
      $('body').append('<div>buzz</div>');
    }
    else {
      console.log(i);
      $('body').append("<div>" + i + "</div>");
    }
  }

});
