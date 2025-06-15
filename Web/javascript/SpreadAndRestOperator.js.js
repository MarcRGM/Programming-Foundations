const a = [1, 2, 3];
const b = [...a, 4, 5]; // without the three dots, it would be // [[1, 2, 3], 4, 5]

console.log(b); // Output: [1, 2, 3, 4, 5]

const user = { name: "Marc", age: 20 };
const version1 = {...user, age:21 }; // age overrides the previous value
console.log(version1); // Output: { name: "Marc", age: 21 }
const version2 = { ...version1, city: "Berlin" }; // adding a new property
console.log(version2); // Output: { name: "Marc", age: 21, city: "Berlin" }

// rest parameters

function sum (...nums) { // gathering all arguments into an array called nums
  return nums.reduce((acc, num) => acc + num, 0); // Using reduce to sum all numbers
  // acc (accumulator) starts at 0 (the second argument to reduce).
  // For each num in nums, it adds num to acc.
}
console.log(sum(1, 2, 3, 4)); // Output: 10