// Get reference to the form, input box, and the list where notes will be shown
const form = document.getElementById('noteForm'); 
const input = document.getElementById('noteInput');
const notesList = document.getElementById('notesList');

// Load all existing notes from the server when the page loads
window.onload = loadNotes;


function loadNotes() {
    fetch('/api/notes') // Fetches all notes from the server.
    .then(res => res.json()) // Converts the response to JSON.
    .then(data => {
        notesList.innerHTML = ''; // Clear the list first (to avoid duplicates)
        data.forEach(note => addNoteToGUI(note));  // For each note in the data, add it to the page
    })
};

function addNoteToGUI(note) {
  const li = document.createElement("li"); // Create a new <li> for the note

  li.innerHTML = `
    <span>${note.text}</span>
    <div class="actions">
      <button onclick="editNote(${note.id}, '${note.text}')">Edit</button>
      <button onclick="deleteNote(${note.id})">Delete</button>
    </div>
  `;

  notesList.appendChild(li); // Add the new note <li> to the <ul>
}

form.onsubmit = function(e) {
    e.preventDefault(); // Stop the page from reloading when the form is submitted

    const text = input.value; // Get the value from the input box

    // Send the note to the backend using POST
    fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }) // send the note text as JSON
    })
        .then(res => res.json())
        .then(note => {
            addNoteToGUI(note); // Add new note to the screen
            input.value = ""; // Clear the input box
        });
};



