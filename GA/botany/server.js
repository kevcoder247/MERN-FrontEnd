const express = require('express');
const app = express();
const port = 3000;

const plants = [
    "Monstera Deliciosa",
    "Corpse Flower",
    "Elephant-Foot Yam",
    "Witches' Butter",
  ]
  //home route
  app.get('/', (req, res) => {
      res.send('home route')
  })

  //Query Request
  app.get('/howdy/:firstName', function (req, res){
      console.log(req.params)
      console.log(req.query)
      res.send(`howdy ${req.query.title} ${req.params.firstName}`)
  })

//multiple params
  app.get('/hello/:firstname/:lastname', (req, res) => {
      console.log(req);
      res.send(`<h1><a href="#">hello ${req.params.firstname} ${req.params.lastname}</a></h1>`)
  })

app.get("/awesome", (req, res) => {
    //this will never be reached
    res.send(`
      <h1>Plants are awesome!</h1>
      <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `)
  })

  app.get('/plants/:indexOfPlantsArray', (req, res) => {
        if(plants[req.params.indexOfPlantsArray]) {
            res.send(plants[req.params.indexOfPlantsArray])
        }else{
            res.send(`Sorry we cannot find this index  ${req.params.indexOfPlantsArray}`)   
        }
    // res.send(req.params.indexOfPlantsArray);
  })



app.listen(port, (req, res) => {
    console.log('listening on port', port)
})