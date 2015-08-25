$(document).ready(function(){

  function numberPrompt (msg) {
    var x = prompt(msg);
    if (x === null) { //otherwise theres no way to get out of the prompt except putting in a valid number
      return;
    }
    x = +x; //convert string from prompt to a number

    if (!parseInt(x)) {  //check if its a string
      return numberPrompt("You entered a string!!! Enter a number.");
    }
    else if (x % 1 !== 0) return numberPrompt("Please enter a number with NO DECIMAL PLACES!");  //check for decimal places
    else {
      return Fizzy(x);  //x passed all the checks, so run Fizzy function on it to generate FizzBuzz
    }
  }

  function Fizzy(n) { //didn't refactor my original FizzBuzz code (i now know there are many ways to code this, some better than this)
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
