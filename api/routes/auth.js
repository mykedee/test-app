const express = require('express')
const User = require('../models/User')
const verifyToken = require('../middleware/verify-token')
const jwt = require('jsonwebtoken')
const router = express.Router()

// router.post('/signup', signUp)

// router.post('/login', getUserByEmail, logUser)


router.post('/auth/signup', async (req, res) => {
if (!req.body.email || !req.body.password) {
res.json({success: false, message: "Please Enter Email and Password"})
} else {
try {
let newUser = new User();
newUser.username = req.body.username;
newUser.email = req.body.email;
newUser.password = req.body.password;
// console.log(newUser)


await newUser.save()

let token = jwt.sign(newUser.toJSON(), process.env.SECRET, {
expiresIn: 604800
});
res.json({
success: true,
message: 'User successfully created',
token: token
})
} catch(err) {
res.json({message: err.message})
}
}
})


router.get('/auth/user', verifyToken, async (req, res)=> {
try {
let foundUser = await User.findOne({
_id: req.decoded._id
});
if (foundUser) {
res.json({success: true, user: foundUser})
}
} catch(err) {
res.status(500).json({
success: false,
message: err.message
})
}
})



router.post('/auth/login', async (req, res) => {
try {
let foundUser = await User.findOne({ email: req.body.email})
if(!foundUser) {
res.status(403).json({
success: false,
message: "Authentication failed, user not found"
})
} else {
if (foundUser.comparePassword(req.body.password)) {
let token = jwt.sign(foundUser.toJSON(), process.env.SECRET, {
expiresIn: 604800
})
res.json({success: true, token : token})
} else {
res.status(403).json({success: false,
message: "Authentication fail, wrong password"
})
}
}
} catch (err) {
res.status(500).json({
success: false,
message: err.message
})
}
})


//profile update
router.put('/auth/user', verifyToken, async(req, res)=> {

try {
let foundUser = await User.findOne({_id: req.decoded._id})
if(foundUser) {
if(req.body.username) foundUser.username = req.body.username
if(req.body.email) foundUser.name = req.body.email
if(req.body.password) foundUser.password = req.body.password

await foundUser.save();

res.json({
success: true,
message: "Updated successfully"
})
}

}
catch (err) {
res.status(500).json({
success: false,
message: err.message
})
}
})


module.exports = router
