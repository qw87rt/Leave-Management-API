const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'leave_management',
});

connection.connect((error) => {
  if (error) {
    console.error('Database connection failed: ', error);
  } else {
    console.log('Connected to the database');
  }
});

module.exports = connection;
