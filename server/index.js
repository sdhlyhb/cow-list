const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();
const { getAllCows, addOneCow} = require('../database/index.js');



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
  console.log('this is req.body:', req.body, typeof(req.body));
  var cowData = req.body;
  addOneCow(cowData, (err, result) => {
    if(err) {
      console.log('Err POST new cow data!', err);
    } else {
      res.send(cowData);
    }

  });








});


app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
