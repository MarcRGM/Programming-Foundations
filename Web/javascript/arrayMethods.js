// .map()
// This method creates a new array populated with the results of calling a provided function 
// on every element in the calling array.
const nums = [ 1, 2, 3 ];
const double = nums.map(n => n*2);
console.log(double); // [2, 4, 6]

const users = [
    { name: "Marc", age: 20 },
    { name: "Bob", age: 17 }
];

// .filter()
// This method creates a new array with all elements that pass the test implemented by the provided function.
const adults = users.filter(user => user.age >= 18);
console.log(adults); // [{ name: "Marc", age: 20 }]

// .map() again
const names = users.map(user => user.name);
console.log(names); // ["Marc", "Bob"]
const ages = users.map(user => user.age);
console.log(ages); // [20, 17]

// .find()
// This method returns the value of the first element in the array that satisfies the provided testing function.
const found = users.find(user => user.name === "Marc");
console.log(found); // { name: "Marc", age: 20 }

// .reduce()
// This method executes a reducer function on each element of the array, resulting in a single output value.
// The first argument is the accumulator, and the second is the current value.
const total = [ 5, 10, 15 ].reduce((acc, total) = acc + total, 0);
console.log(total); // 30

// .some()
// This method tests whether at least one element in the array passes the test implemented by the provided function.
const hasAdult = users.some(user => user.age >= 18);
console.log(hasAdult); // true

// .every()
// This method tests whether all elements in the array pass the test implemented by the provided function.
const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // false

// .forEach()
// This method executes a provided function once for each array element.
users.forEach(user => console.log(user.name));

// .flatMap()
// This method first maps each element using a mapping function, then flattens the result into a new array.
const nestedArray = [[1, 2], [3, 4], [5]];
const flatMapped = nestedArray.flatMap(x => x);
console.log(flatMapped); // [1, 2, 3, 4, 5] 

const squaredFlatMapped = nestedArray.flatMap(x => x.map(y => y * y));
console.log(squaredFlatMapped); // [1, 4, 9, 16, 25]


// practice
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num*num);
console.log(squares); // [1, 4, 9, 16, 25]
const even = squares.filter(num => num % 2 === 0);
console.log(even); // [4, 16]
const firstEven = squares.find(num => num % 2 === 0);
console.log(firstEven); // 4
const sum = squares.reduce((acc, num) => acc + num, 0);
console.log(sum); // 55
// Check if any number is greater than 10
const hasGreaterThanTen = squares.some(num => num > 10);
console.log(hasGreaterThanTen); // true
// Check if all numbers are greater than 0
const allGreaterThanZero = squares.every(num => num > 0);
console.log(allGreaterThanZero); // true
// Log each number in the squares array
squares.forEach(num => console.log(num));
// Output:
// 1
// 4
// 9
// 16
// 25

