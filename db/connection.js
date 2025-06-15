const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',  // Adjust if necessary
    database: 'ankitkumarsingh'
});

con.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("Database connected successfully!");
});

module.exports = con;
