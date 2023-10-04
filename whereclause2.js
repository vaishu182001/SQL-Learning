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

  // Define the salary value you want to search for
  const targetname = 'John Doe';

  // SQL query to retrieve records where "esal" is equal to the target salary
  const query = 'SELECT * FROM employee WHERE ename = ?';

  // Execute the query with the target salary as a parameter
  connection.query(query, [targetname], (error, results) => {
    if (error) {
      console.error('Error executing query:', error);
      connection.end(); // Close the database connection
      return;
    }

    // Print records where "esal" is equal to the target salary
    console.log(`Employee Records with name ${targetname}:`);
    results.forEach((row) => {
      console.log(`Employee ID: ${row.eid}, Name: ${row.ename},Age: ${row.eage} Salary :${row.esal}`);
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
