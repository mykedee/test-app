const Post = require('../models/Post')
const upload = require('../middleware/upload-photo')


exports.deletePost = (req, res) => {
const id = req.params.id;
Post.findByIdAndRemove(id)
.then(post =>  {
if(!post)  {
res.json({
error: "not deleted"
})
}
else {
res.json({
post: "Deleted"
})
}

})
.catch(err => {
res.json({
err: "could not delete"
})
})
}


exports.getPost = async (req, res) => {
try {
let posts = await Post.find({}, 'title slug photo tag')
res.json({posts})
} catch (err) {
res.json({err: err.message})
}
}

exports.getOne = (req, res) => {
Post.findOne({slug: req.params.slug}, 'title description slug photo tag', (error, post)=> {
if (error) {
return res.json({error: "error"})
}
res.json({post})
})
}


// (upload.single('photo'),

exports.createPost =  async (req, res)=> {
try {
req.body.photo = req.file.location;
const post = new Post(req.body)
await post.save()
return res.status(200).json({message: "post saved"})

} catch (err) {
res.status(400).json({err: err.message})
console.log(err.message)
}
}
