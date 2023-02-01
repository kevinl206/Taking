const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = 3001;

// Initialize our app variable by setting it to the value of express()
const app = express();

//Sets up the Express app to handle data parsing
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"))
});

//Listener
app.listen(PORT, () => 
    console.log(`Example app listening on port ! http://localhost:${PORT}`)
    );