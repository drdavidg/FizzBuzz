$(document).ready(function(){


  function numberPrompt (msg) {
    var x = prompt(msg);
    if (x === null) { //otherwise theres no way to get out of the prompt except putting in a valid number
      return;
    }
    x = +x; //convert string from prompt to a number

    if (!parseInt(x)) {
      return numberPrompt("You entered a string!!! Enter a number.");
    }
    else {
      return Fizzy(x);
    }
  }


  function Fizzy(n) {
    for (i =1; i <= n; i++) {
      if ( ((i % 3) === 0) && ((i % 5) === 0) ) {
        $('body').append('<div>fizz buzz</div>');
      }
      else if ((i % 3) === 0) {
        $('body').append('<div>fizz</div>');
      }
      else if ((i % 5) === 0) {
        $('body').append('<div>buzz</div>');
      }
      else {
        $('body').append("<div>" + i + "</div>");
      }
    }

  }

numberPrompt("Please enter a number");

});
