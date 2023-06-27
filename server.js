// Requirements
const path = require('path');
const studentsDB = require('./data/students-db');
const express = require('express');
const app = express();

// Config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
// Root path as students page
app.get('/', function(req, res) {
  res.redirect('/students');
});

// Route to display students from the database
app.get('/students', function(req, res) {
  res.render('students/index', {
    students: studentsDB.getAll()
  });
});

// Request
// Listening to port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
