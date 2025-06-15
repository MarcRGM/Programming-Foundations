const square = x => x * x;
console.log(square(5)); // 25

const add = (a, b) => a + b;
console.log(add(3, 4)); // 7

const greet = name => `Hello, ${name}!`;
console.log(greet("Alice")); // Hello, Alice!

const greet2 = name => {
    console.log("Greeting:");
    return `Hello, ${name}!`;
}

console.log(greet2("Bob")); // Greeting: Hello, Bob!

