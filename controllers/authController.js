const db = require('./db');
const user = require('../models/userModel');

function signUp(user, callback){
    const { fullname, emailadd, password } = user;
    const sql = 'INSERT INTO `user` (fullname, emailadd, password) VALUES (?, ?, ?)';
    db.query(sql, [fullname, emailadd, password], (err, result) => {
        if (err){
            return callback(err, null);
        }
        callback(null, result.insertId);
    });

}

function signIn(){

}

function adminsignIn(){

}

function adminsignUp(){

}


module.exports = {
    signIn, signUp, adminsignIn, adminsignUp
};