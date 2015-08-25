$(document).ready(function(){
  var userNumber = prompt("Please enter a number");
  userNumber = +userNumber;

  ValidateInput(userNumber);

  function ValidateInput (x) {
    if (!(parseInt(x))) {
      return $('body').append('<div>Please enter a number!</div>'); 
    }

  }

  function Fizzy(n) {
    for (i =1; i <= n; i++) {
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

  };

  Fizzy(userNumber);

});
