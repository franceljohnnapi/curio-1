const express = require ('express');
const router = express.Router();

const { signIn, signUp, adminsignIn, adminsignUp} = require('../controllers/authController');

router.post("http://localhost:3000/", (req, res) => {
    const { fullname, emailadd, password} = req.body;
    const user = { fullname, emailadd, password };
    signUp(user, (err, user) => {
        if(err){
            console.error("Error signing up:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        res.status(201).json({ id: user, message: "User signed up successfully" });
    });
});


module.exports = router;