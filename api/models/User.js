const mongoose = require('mongoose')
// const { v4: uuidv4 } = require('uuid');
// uuidv4();
// const crypto = require('crypto')
const bcrypt = require('bcrypt-nodejs')

const userSchema = new mongoose.Schema({

username: {
type: String,
trim: true,
required: true
},

email: {
type: String,
trim: true,
required: true
},

// hashed_password: {
// type: String,
// required: true
// },
// salt: String,
// created: {
// type: Date,
// default: Date.now
// },
// updated: Date
// }

password: {
type: String,
trim: true,
required: true
}
})

userSchema.pre('save', function(next) {
let user = this;
if(this.isModified('password') || this.isNew) {
bcrypt.genSalt(10, function (err, salt){
if(err) {

return next (err)
}
bcrypt.hash(user.password, salt, null, function (err, hash) {
if(err) {
return next (err);
}
user.password = hash;
next();
})
})
} else {
return next();
}
})






userSchema.methods.comparePassword = function(password, next) {
let user = this;
return bcrypt.compareSync(password, user.password)
 }




// userSchema.virtual('password')
// .set(function(password) {
//create temporary variable called _password
// this._password = password

// this.salt = uuidv4()
// this.hashed_password = this.encryptPassword(password)
// })
// .get(function() {
// return this._password
// })

//methods
// userSchema.methods = {
// encryptPassword (password) {
// if(!password)
// return '';
// try {
// return crypto.createHmac('sha1', this.salt).update(password)
// .digest('hex');
// }
// catch (err) {
// return ''
// }
// }
// }

module.exports = mongoose.model('User', userSchema)
