// Get reference to the form, input box, and the list where notes will be shown
const form = document.getElementById('noteForm'); 
const input = document.getElementById('noteInput');
const notesList = document.getElementById('notesList');

// Load all existing notes from the server when the page loads
window.onload = LoadNotes;


function LoadNotes() {
    fetch('/api/notes') // Fetches all notes from the server.
    .then(res => res.json()) // Converts the response to JSON.
    .then(data => {
        notesList.innerHTML = ''; // Clear the list first (to avoid duplicates)
        data.forEach(note => addNoteToGUI(note));  // For each note in the data, add it to the page
    })
};


