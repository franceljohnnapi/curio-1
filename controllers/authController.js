const db = require('./db');
const User = require('../models/userModel');

// function signUp(user, callback){
//     const { fullname, emailadd, password } = user;
//     const sql = 'INSERT INTO `user` (fullname, emailadd, password) VALUES (?, ?, ?)';
//     db.query(sql, [fullname, emailadd, password], (err, result) => {
//         if (err){
//             return callback(err, null);
//         }
//         callback(null, result.insertId);
//     });

// }

function signIn(email, password, callback){
    const sql = 'SELECT * FROM user WHERE emailadd = ? AND password = ?';
    db.query(sql, [email, password], (err, results) => {
        if(err) {
            return callback(err, null);
        }
        if (results.length === 0){
            return callback(null, null);
        }
        const user = new User(results[0].fullname, results[0].email, results[0].password);
    });
}

// function adminsignIn(){

// }

// function adminsignUp(){

// }


module.exports = {
    signIn
};