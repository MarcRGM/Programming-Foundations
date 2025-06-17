const express = require('express'); // express: Web framework for creating routes (URLs that accept requests).
const sqlite3 = require('sqlite3').verbose(); // sqlite3: Enables the app to read/write from a SQLite database file.
const bodyParser = require('body-parser'); // body-parser: Parses JSON data sent from the frontend (like form input).

const app = express(); // Create an Express application instance.
const PORT = 3000; // Define the port number for the server to listen on.

app.use(bodyParser.json()); // Lets Express read JSON data in requests.
app.use(express.static('.')); // Serves static files from the current directory, allowing access to HTML, CSS, and JS files.
// . means the current directory, so it serves files like index.html, style.css, and script.js.

const db = new sqlite3.Database('notes.db'); // Creates or opens a SQLite database file named 'notes.db'.

// uses ` to allow multi-line SQL queries
db.run(`CREATE TABLE IF NOT EXISTS notes (
  id INTEGER PRIMARY KEY AUTOINCREMENT, // id: Unique identifier for each note, automatically increments.
  text TEXT NOT NULL
)`);

// GET
app.get("/api/notes", (req, res) => { // When the browser (or client) requests GET /api/notes(URL path, not a folder path.), this function runs.
  // Handles GET requests to fetch all notes from the database.
  db.all("SELECT * FROM notes", [], (err, rows) => {
    /*
    db.all(...) runs a SQL SELECT query to get all rows from the notes table.
    [] is the array of parameters for the query (none in this case).
    (err, rows) is a callback:
    err holds any error that happens.
    rows contains the list of notes from the database
    */
    if (err) {
      res.status(500).json({ error: err.message }); // If there's an error, send a 500 status with the error message.
      return;
    }
    res.json(rows); // Send the retrieved notes as a JSON response.
  });
});

// POST
app.post("/api/notes", (req, res) => { // Sets up a route to handle POST requests to /api/notes.
  const { text } = req.body; // Gets the text field from the request body.
  db.run("INSERT INTO notes (text) VALUES (?)", [text], function (err) { // function (err) lets us use this.lastId
    /*
    Runs an INSERT SQL query to add a new row to the notes table.
    The ? is a placeholder to avoid SQL injection.
    [text] replaces the ? with the actual note content.
    function (err) is a callback that runs after the database query, handling any error and giving access to results like this.lastID.
    */
    if (err) return res.status(500).json({ error: err.message }); // If there’s a database error, send a 500 Internal Server Error with details.
    res.json({ id: this.lastID, text }); // If successful, send back the new note's ID and text as a JSON response.
  });
});
