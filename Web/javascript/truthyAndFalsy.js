// Falsy values in JavaScript are values that evaluate to false in a boolean context.
// false
// 0
// ""      empty string
// null
// undefined
// NaN

// Truthy values in JavaScript are values that evaluate to true in a boolean context.
// "0"       
// "false"   
// []        
// {}        
// function(){} 

const name = "";

if (name) {
  console.log("Has a name");
} else {
  console.log("No name set");
}
// Output: No name set


console.log(false == 0);       // true
console.log(null == undefined); // true
console.log([] == false);      // true 😬
// This is because an empty array is coerced to a string, which is an empty string, and then to a number, which is 0.
// === is a strict equality operator that does not perform type coercion.

let userInput = "";
let finalName = userInput || "Anonymous";
console.log(finalName); // → "Anonymous" is a case default value if userInput is falsy


