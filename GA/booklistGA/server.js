// Dependencies
const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./models/book.js');

// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// MIDDLEWARE & BODY PARSER
app.use(express.urlencoded({ extended: true }));



// ROUTES
// INDEX
app.get('/books', (req, res) => {
    Book.find({}, (error, allBooks) => {
        res.render('index.ejs', {
            books: allBooks,
        });
    });
})

// NEW
app.get('/books/new', (req, res) => {
    res.render('new.ejs');
})

// D

// CREATE
app.post('/books', (req, res) => {

    if (req.body.completed === 'on') {
        //if checked, req.body.completed is set to 'on'
        req.body.completed = true;
    } else {
        //if not checked, req.body.completed is undefined
        req.body.completed = false;
    }

    Book.create(req.body, (error, createdBook) => {
        res.redirect('/books');
    });
})

// E



// Listenter
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`The server is listening on port: ${PORT}`)
})