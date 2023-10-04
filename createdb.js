const mysql = require('mysql');

// Create a connection to the MySQL database
const con= mysql.createConnection({
  host: 'localhost',
  user: 'root', // XAMPP's default MySQL username
  password: '', // XAMPP's default MySQL password is empty
  
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE sqlpractise2", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});