const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();
const { getAllCows, addOneCow, getCowById, updateOneCow, deleteOneCow} = require('../database/index.js');



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



app.patch(`/api/cows/:id`, (req, res) => {
  console.log('this is the req.body for PATCH:', req.body, typeof(req.body));
  var updatedCowData = req.body;
  updateOneCow(updatedCowData.description, updatedCowData.name, updatedCowData.id, (err, result) => {
    if(err) {
      console.log('Err updating the cow data!', err);
    } else {
      console.log('Sucess updating the cow data!');
      res.send(result);
    }
  });



});

app.delete(`/api/cows/:id`, (req, res)=> {
  console.log('this is req.params in DELETE:', req.params);
  var id = Number(req.params.id[1]);
  deleteOneCow(id, (err, result) => {
    if(err) {
      console.log('Err delete the cow data!', err);
    } else {
      console.log('Sucess deleted the cow data!');
      res.send(result);
    }
  })

})




app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
