const express = require('express');
const mongoose = require('mongoose');
const Tweet = require('./models/tweet')
const app = express();

const port = 3000;

//Database configuration
DATABASE_URL = 'mongodb+srv://admin:abc1234@cluster0.3iwy6.mongodb.net/tweeter?retryWrites=true&w=majority'

const db = mongoose.connection;

//connect to mongoDB Atlas different from connection above
mongoose.connect(DATABASE_URL);

mongoose.connect(DATABASE_URL, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware
// Body parser middleware: it creates req.body
app.use(express.urlencoded({ extended: false }));

// Routes / Controllers

// Create
app.post('/tweets', (req, res) => {
	Tweet.create(req.body, (error, createdTweet) => {
        res.send(createdTweet);
    })
    
});

// Delete
app.delete('/tweets/:id', (req, res) => {
	Tweet.findByIdAndDelete(req.params.id, (error, deletedTweet) => {
		res.send({ success: true });
	});
});

// Index
app.get('/tweets', (req, res) => {
	Tweet.find({}, (error, foundTweets) => {
		res.send(foundTweets);
	});
});

// Show
app.get('/tweets/:id', (req, res) => {
	Tweet.findById(req.params.id, (error, foundTweet) => {
		res.send(foundTweet);
	});
});

// Database Connection Error/Success
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));



app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {
   console.log(`Listening on ${port}`);
}) 