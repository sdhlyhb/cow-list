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
      callback(err, null);
    } else {
      console.log('SUCCESS adding one cow info to the database!');
      callback(null, results);
    }

  });

};

const getCowById = (id, callback) => {
  let queryString = `SELECT name, description FROM cowList WHERE id = ${id}`;
  connection.query(queryString, (err, result) => {
    if(err) {
      console.log('Err getting one cow by id from database!', err);
      callback(err, null);

    }else {
      console.log('Sucess getting one cow by id from database!');
      callback(null, result);
    }
  })
}


const updateOneCow = (newDes, newName, id, callback) => {
  let queryString = `UPDATE cowList SET description = "${newDes}", name = "${newName}" WHERE id = ${id}`;
  connection.query(queryString, (err, results) => {
    if(err) {
      console.log('ERR updating info in the database!');
      callback(err, null);
    } else {
      console.log('Sucess updating info!')
      callback(null, results);
    }
  });
}





// Don't forget to export your functions!
module.exports = {
  // connection,
  getAllCows,
  addOneCow,
  getCowById,
  updateOneCow


};
