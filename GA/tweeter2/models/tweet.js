const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//setting up the schema
const tweetSchema = new Schema(
    {
        title: String,
        body: String,
        author: String,
        like: {type: Number, default: 0},
        sponsored: { type: Boolean, default: false},
    },
    {timestamp: true}
)

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;