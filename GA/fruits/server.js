// require dependencies
const express = require('express');
const methodOverride = require("method-override")
const fruits = require('./models/fruits');

// initialize express application
const app = express();

// configure application settings
const port = 3000;

//MIDDLEWARE
app.use(express.urlencoded({ extended: false }))

//Middleware that allows delete button to work
app.use(methodOverride("_method"))

//ROUTES

// Index================================================================
app.get('/fruits', (req, res) => {
    res.render('index.ejs', { allFruits: fruits });
                            // ^-- this is just a descriptive way of referencing our fruits array inside index.ejs
});

// NEW================================================================
//this adds data to req.body so we can access it in create
app.get("/fruits/new", (req, res) => {
    res.render('new.ejs')
})


// DESTROY================================================================
app.delete('/fruits/:indexOfFruitsArray', (req, res) => {
  fruits.splice(req.params.indexOfFruitsArray, 1)
  res.redirect('/fruits')
})

// UPDATE================================================================
app.get("/fruits/:indexOfFruitsArray/edit", (req, res) => {
  res.render(
    "edit.ejs", //render views/edit.ejs
    {
      //pass in an object that contains
      fruit: fruits[req.params.indexOfFruitsArray], //the fruit object
      index: req.params.indexOfFruitsArray, //... and its index in the array
    }
  )
})

// CREATE================================================================
app.post("/fruits", (req, res) => {
    if (req.body.readyToEat === "on") {
      //if checked, req.body.readyToEat is set to 'on'
      req.body.readyToEat = true //do some data correction
    } else {
      //if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false //do some data correction
    }
    fruits.push(req.body)
    
    res.redirect("/fruits");
  })

// EDIT================================================================
app.put("/fruits/:indexOfFruitsArray", (req, res) => {
  //:indexOfFruitsArray is the index of our fruits array that we want to change
  if (req.body.readyToEat === "on") {
    //if checked, req.body.readyToEat is set to 'on'
    req.body.readyToEat = true
  } else {
    //if not checked, req.body.readyToEat is undefined
    req.body.readyToEat = false
  }
  fruits[req.params.indexOfFruitsArray] = req.body //in our fruits array, find the index that is specified in the url (:indexOfFruitsArray).  Set that element to the value of req.body (the input data)
  res.redirect("/fruits") //redirect to the index page
})

// Show================================================================
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    // render is a special method that
    // informs the template engine to render a template
    // we just provide the name as a string
    res.render('show.ejs', {
        fruit: fruits[req.params.indexOfFruitsArray] // this references a single fruit
        // and passes it to the template so we can access it there
    });
});

// tell the app to listen
app.listen(port, () =>{
    console.log(`Listening on port`, port)
});
