// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const Tweet = require('./models/tweet')

const app = express();
const PORT = 3000;

// Database configuration
const DATABASE_URL = 'mongodb+srv://admin:abc1234@cluster0.pp92mk6.mongodb.net/tweeter?retryWrites=true&w=majority'
const db = mongoose.connection;

// Connect to MongoDB Atlas
mongoose.connect(DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});


//MIDDLEWARE=====================================
//GIVE ACCESS TO REQ.BODY
app.use(express.urlencoded({ extended: false }));

//Route==========================================
//INDEX======================
app.get('/tweets', (req, res) => {
    Tweet.find({}, (error, foundTweets) => {
        res.send(foundTweets);
    })
})

// simple post request to body
app.post('/tweets', (req, res) => {
    Tweet.create(req.body, (error, createdTweet) => {
        res.send(createdTweet)
    })
    console.log(req.body)
    // console.log(Tweet);
})

// Delete======================
app.delete('/tweets/:id', (req, res) => {
	Tweet.findByIdAndDelete(req.params.id, (error, deletedTweet) => {
		res.send({ success: true });
	});
});

//UPDATE============================
app.put('/tweets/:id', (req, res) => {
    Tweet.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (error, updatedTweet) => {
            res.send(updatedTweet)
        }
    )
})

//SHOW===============================
app.get('/tweets/:id', (req, res) => {
    Tweet.findById(req.params.id, (error, foundTweet) => {
        res.send(foundTweet);
    })
})


// Database Connection Error/Success
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.listen(PORT, () => console.log(`express listening on port ${PORT}`) )