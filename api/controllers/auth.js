// const User = require('../models/User')

// exports.signUp = async (req, res) => {
// const userExists = await User.findOne({email: req.body.email})
// if(userExists)
// return res.status(403).json({
// error: "Email already exist"
// })
// const user = await new User(req.body)
// await user.save()
// res.status(200).json({
// user
// })
// }

// exports.signIn = (req, res) => {

// }