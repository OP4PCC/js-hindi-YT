//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(typeof id)
// console.log(typeof anotherId)

// console.log(id === anotherId);
// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

// const heros1 = ["shaktiman", "naagraj", "doga"]; 
// heros1.push("dilse");      // ✅ Works
// heros1 = ["newhero"];      // ❌ Error: Assignment to constant variable



let heros2 = ["shaktiman", "naagraj", "doga"];
heros2 = ["newhero"];      // ✅ Works
console.log(heros2)
// let heros2 = ["another"];  // ❌ SyntaxError: Identifier 'heros' has already been declared

var heros3 = ["shaktiman", "naagraj", "doga"];
heros3 = ["newhero"];      // ✅ Works
var heros3 = ["another"];  // ✅ Allowed, can cause confusion


const heros = ["shaktiman", "naagraj", "doga"];



let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3