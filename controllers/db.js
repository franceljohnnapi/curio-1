const mysql = require('mysql2');
const dotenv = require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Database connected');

});

module.exports = db;