//require our dependencies
const express = require('express');
const res = require('express/lib/response');
const mongoose = require('mongoose');
const Tweet = require('./models/tweet')
//initialize the express app
const app = express();
const PORT = 3000;

//configure sever settings

//establish a connection to MongoDb
mongoose.connect('mongodb+srv://admin:abc1234@cluster0.ucawo5v.mongodb.net/tweeter?retryWrites=true&w=majority')
//listen for mongo events
const db = mongoose.connection;

db.on('connected', () => console.log('connected to MongoDb'));
db.on('disconnected', () => console.log('disconnected from MongoDb'));
db.on('error', (err) => console.log('MongoDb error: ' + error.message));

//mount middleware
app.use(express.urlencoded({ extended: false}));

//Most common mongoose model methods for performing CRUD
/*
Model.create()<- creating model instances -> creating documents in our MongoDB collection

Model.find({})<- read all documents from a particular collection in MongoDb

Model.find({title: 'soccer'})<- read all documents from a particular collection in mogoDb that meet certain criteria

Model.findById()<- find and read one document by its id

Model.findByIdDelete()<- find and delete one document by its id

Model.fundByIdAndUpdate()<-find and update one document by it's id
*/

//Mount routes

//Index Route
app.get('/tweets', (req, res) => {
    Tweet.find({}, (err, tweets) => {
    res.send(tweets)
    })
})

//DELETE ROUTE
app.delete('/tweets/:id', (req, res) => {
    Tweet.findByIdAndDelete(req.params.id, (err, deletedTweet) => {
        res.send(deletedTweet);
    })
})

//UPDATE
app.put('/tweets/:id', (req, res) => {
    Tweet.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        (error, updatedTweet) => {
            res.send(updatedTweet);
        }
    )
})

//Create Route
app.post('/tweets', (req, res) => {
    Tweet.create(req.body, (err, tweet) => {
        res.send(tweet);
    }); //this is asynchronous
});

//SHOW ROUTE
app.get('/tweets/:id', (req, res) => {
    Tweet.findById(req.params.id, (err, tweet) => {
        res.send(tweet)   
    })
})

//tell the server to listern for request
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});