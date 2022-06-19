//require dependencies
const mongoose = require('mongoose')
//set up a shorcut variable
const Schema = mongoose.Schema;

//define the schema
const tweetSchema = new Schema({
    title: String,
    body: String,
    author: String,
    likes: {
        type: Number,
        default: 0
    },
    sponsored: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});


//export the shchema complued into a model
// creates a special object called a model that provides a methods that allows us to perform crud


module.exports =  mongoose.model('Tweet', tweetSchema);

