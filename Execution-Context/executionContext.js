// execution context makes a imaginary container whenever we call a function and stores 3 things in it
// 1) variables
// 2) function inside parent function
// 3) lexical environment of that function

// This imaginary container is called exucation container.

function abcd() {
  var a = 10;
  function xyz() {
    var b = 10;
  }
}

abcd();

// Now execution context will contain variables , function inside function in this case xyz and lexical enviroment ==> which tells us the things we can access or not
