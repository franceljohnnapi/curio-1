const express = require ('express');
const router = express.Router();

const { signIn } = require('../controllers/authController');

router.post("/signin", (res, req) => {
    const { email, password } = req.body;
    signIn (email, password, (err, user) => {
        if(err){
            console.error("Error Signing in:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        if(!user){
            return res.status(401).json({ error: "Invalid Credentials" });
        }
        res.json({message: "User Signed In Successfully!", user: user });
    });
});

// router.post("http://localhost:3000/", (req, res) => {
//     const { fullname, emailadd, password} = req.body;
//     const user = { fullname, emailadd, password };
//     signUp(user, (err, user) => {
//         if(err){
//             console.error("Error signing up:", err);
//             return res.status(500).json({ error: "Internal Server Error" });
//         }
//         res.status(201).json({ id: user, message: "User signed up successfully" });
//     });
// });


module.exports = router;