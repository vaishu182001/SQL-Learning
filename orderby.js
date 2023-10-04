const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // XAMPP's default MySQL username
    password: '', // XAMPP's default MySQL password is empty
    database: 'sqlpractise', // Replace with your database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');

  // SQL query to retrieve records sorted by ename in descending order
  const query = 'SELECT * FROM employee ORDER BY ename DESC';

  
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      connection.end(); // Close the database connection
      return;
    }

    // Print the sorted results
    console.log('Sorted Records (ename in descending order):');
    results.forEach((row) => {
      console.log(`Employee ID: ${row.eid}, Name: ${row.ename}`);
    });

    // Close the database connection
    connection.end((err) => {
      if (err) {
        console.error('Error closing the database connection:', err);
      }
    });
  });
});
