const express = require('express'); // express: Web framework for creating routes (URLs that accept requests).
const sqlite3 = require('sqlite3').verbose(); // sqlite3: Enables the app to read/write from a SQLite database file.
const bodyParser = require('body-parser'); // body-parser: Parses JSON data sent from the frontend (like form input).

const app = express(); // Create an Express application instance.
const PORT = 3000; // Define the port number for the server to listen on.

app.use(bodyParser.json()); // Lets Express read JSON data in requests.
app.use(express.static('.')); // Serves static files from the current directory, allowing access to HTML, CSS, and JS files.
// . means the current directory, so it serves files like index.html, style.css, and script.js.

