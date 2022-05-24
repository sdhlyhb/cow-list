const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();
const {db, getAllCows} = require('../database/index.js');



app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/cows', (req, res) => {

  getAllCows((err, allCowData) => {
    if(err) {
      console.log('Err getting all cows data!', err);
    } else {
      res.send(allCowData);
    }

  });


});



app.post('/api/cows', (req, res) => {
  console.log(req.body);
  var cowData = req.body;
  let queryString = `INSERT INTO cowList (name, description) VALUES (?, ?)`;
  let queryArgs = [cowData.name, cowData.description];
  db.query(queryString, queryArgs, (err, results) => {
    if(err) {
      console.log('ERROR adding one cow info to the database!');
      res.send(err);
    } else {
      console.log('SUCCESS adding one cow info to the database!');
      res.send(results);
    }

  });





});


app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
