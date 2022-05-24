const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cows'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!

const getAllCows = (callback) => {
  let queryString = 'SELECT * FROM cowList';
  connection.query(queryString, (err, results) => {
    if(err) {
      console.log('ERROR getting all cows info from databse!');
      callback(err, null);
    } else {
      console.log('SUCCESS getting all cows info from databse!')
      callback(null, results);
    }

  });

};



const addOneCow = (cowData, callback) => {
  let queryString = `INSERT INTO cowList (name, description) VALUES (?, ?)`;
  let queryArgs = [cowData.name, cowData.description];
  connection.query(queryString, queryArgs, (err, results) => {
    if(err) {
      console.log('ERROR adding one cow info to the database!');
      //callback(err, null);
    } else {
      console.log('SUCCESS adding one cow info to the database!');
      callback(null, results);
    }

  });

};





// Don't forget to export your functions!
module.exports = {
  // connection,
  getAllCows,
  addOneCow


};
