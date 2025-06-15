async function getPokemon() {
    try {
        const res =await fetch('https://pokeapi.co/api/v2/pokemon');
        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error('Error! ', err);
    }
}

// res is a Response object
// data is a JavaScript object containing the JSON data from the API
// The function fetches data from the PokeAPI and logs it to the console

// This creates a promise that resolves to the data from the API
// Promises are used to handle asynchronous operations in JavaScript
// async functions always return a promise
// await is used inside async functions to wait for a promise to resolve
// await can only be used inside async functions
// without await, the function would return a promise immediately but not the expected data
// try/catch is used to handle errors in asynchronous code