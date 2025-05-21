// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

/*
IIFE in JavaScript stands for:
Immediately Invoked Function Expression
It’s a function that runs as soon as it’s defined.

semicolon is must to end iife 

🔹 Syntax:
(function() {
  // code inside IIFE
  console.log("IIFE is running");
})();
Or with arrow function:

(() => {
  console.log("Arrow IIFE running");
})();
🔍 Why use IIFE?
Avoid polluting the global scope
Variables inside an IIFE are not accessible outside.
Encapsulation
Useful for keeping data private (before let/const and modules were common).
Execute logic immediately
Run setup or configuration code instantly.
 */