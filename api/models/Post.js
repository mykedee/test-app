const mongoose = require('mongoose')
const slugify = require('slugify')

const PostSchema = new mongoose.Schema({
photo: {
type: String
},

title: {
type: String,
// required: true,
},

description: {
type: String,
// required: true
},

tag: {
type: String,
// required: true
},

slug: {
type: String,
required: true,
unique: true,
}
})

PostSchema.pre('validate', function(next) {
if(this.title) {
this.slug = slugify(this.title, { lower: true, strict: true })
}
next()
})
module.exports = mongoose.model('Post', PostSchema);