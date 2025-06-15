// Template literal in JavaScript
const person = "Marc";
const msg = 'Hello, ${person}! Welcome.';

// Destructuring assignment in JavaScript

const arr = [1, 2, 3, 4, 5];
const [first, second, ...rest] = arr; // without the ... rest would be 3

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5] 

// Destructuring an object (Creates variables from object properties)
const user = {name: "Marc", age: 20};
const {name, age} = user; 
console.log(name); // Marc
console.log(age);  // 20

// Renaming variables during destructuring (Creates new variables with different names)
const {name: userName, age: userAge} = user; // renaming variables
console.log(userName); // Marc
console.log(userAge);  // 20

const clone = { ...user, course: "JavaScript" }; // Cloning an object using spread operator
console.log(clone); // { name: 'Marc', age: 20, course: 'JavaScript' }

const {name: userName2, ...restOfUser} = clone; // Destructuring with rest operator
console.log(userName2); // Marc
console.log(restOfUser); // { age: 20, course: 'JavaScript' }

const post = {
  id: 1,
  title: "Hello World",
  author: {
    nickname: "Mac",
    email: "marc@email.com"
  }
}

const { title, author } = post;
const { nickname } = author;
console.log(`Post: ${title} by ${nickname}`); // backticks must be used for template literals
// Output: Post: Hello World by Mac

