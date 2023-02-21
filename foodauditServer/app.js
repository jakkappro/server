const express = require('express');

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'server',
  password: 'password',
  database: 'db',
  family: 4
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to database: ', error);
  } else {
    console.log('Connected to database');
  }
});


const app = express();

// Route to create a row in the database
app.post('/create', (req, res) => {
  // Code to create a row in the database
});

// Route to get a specific row from the database by username
app.get('/get/:username', (req, res) => {
  // Code to get a specific row from the database by username
});

// Route to get all rows from the database
app.get('/get', (req, res) => {
  // Code to get all rows from the database
});

// Start the server
app.listen(3001, () => {
  console.log('Server running on port 3001');
});
