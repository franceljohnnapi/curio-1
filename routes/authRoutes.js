const express = require ('express');
const router = express.Router();

const { signIn, signUp, adminsignIn, adminsignUp} = require('../controllers/authController');

router.post("http://localhost:3000/", (req, res)) => {
    const { fullname, emailadd, password} = req.body;
    const user = { fullname, emailadd, password };
    signUp(user, (err, ))
}

