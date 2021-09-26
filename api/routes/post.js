const express = require('express')
const router = express.Router()

const {createPost, getPost, getOne, deletePost} = require('../controllers/post')
const Post = require('../models/Post')

const upload = require('../middleware/upload-photo')


router.post('/post', upload.single('photo'), createPost)


router.get('/post/:slug', getOne)
router.get('/posts', getPost)
router.delete('/post/:id', deletePost)



module.exports =  router
