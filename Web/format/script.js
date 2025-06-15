/**
 * script.js
 * Adds interactivity to the HTML page.
 */

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const alertBtn = document.getElementById('alertBtn');
    const changeTextBtn = document.getElementById('changeTextBtn');
    const textToChange = document.getElementById('textToChange');
    const inputField = document.getElementById('inputField');
    const showInputBtn = document.getElementById('showInputBtn');
    const inputResult = document.getElementById('inputResult');

    // Show an alert when the first button is clicked
    alertBtn.addEventListener('click', function() {
        alert('Hello! This is an alert.');
    });

    // Change the text of the paragraph when the second button is clicked
    changeTextBtn.addEventListener('click', function() {
        textToChange.textContent = 'The text has been changed!';
    });

    // Show the value from the input field below when the third button is clicked
    showInputBtn.addEventListener('click', function() {
        // Get the value from the input field
        const userInput = inputField.value;
        // Display the value in the paragraph
        inputResult.textContent = `You typed: ${userInput}`;
    });
});