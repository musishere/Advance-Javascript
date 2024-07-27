// Difference between var and let const

// VAR:

// 1 - var is from old javascript(es5)

// 2 - var is function scoped variable it is accesable anywhere in its parent function
function print() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }

  console.log(i); // i is accesable here too because of var
}

// 3 - var add it self in window object
var a = 10; //a = 10 is added in window object(browser)

// ---------------------------------------------------------------------------------------------------------------------------------------------

// LET & CONST:

// 1 - let & const is from modern javascirpt(es6)

// 2 - let & const are braces scoped variable
function print2() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(i); // it is not accesable here because of let/const
}

// 3 - let & const are not added in window object(browser)
let a = 10; // a = 10 is not added in window object
