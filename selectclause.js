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

  // SQL query to retrieve all records from the "employee" table
  const query = 'SELECT * FROM employee';

  // Execute the query
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      connection.end(); // Close the database connection
      return;
    }

    // Print all records
    console.log('All Employee Records:');
    results.forEach((row) => {
      console.log(`Employee ID: ${row.eid}, Name: ${row.ename}`);
      // You can print other columns as well
    });

    // Close the database connection
    connection.end((err) => {
      if (err) {
        console.error('Error closing the database connection:', err);
      }
    });
  });
});
