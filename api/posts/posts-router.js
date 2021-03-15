// implement your posts router here
const express = require('express');

const router = express.Router();
const Posts = require('./posts-model');


router.get('/', async (req, res) => {
    await Posts.find()
        .then(blogs => {
            res.status(200).json(blogs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
            message: "The posts information could not be retrieved"
        })})
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;

    await Posts.findById(id)
    .then(blog => {
        if(!blog){
            res.status(404).json(
                { message: "The post with the specified ID does not exist" })
        }
        else{
            res.status(200).json(blog);
        }     
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: "The post information could not be retrieved" })
    })
})

router.post('/', async (req, res) => {
    const blog = req.body;
    if(!blog.title || !blog.contents){
        res.status(400).json({ message: "Please provide title and contents for the post" })
    }
    else{
        await Posts.insert(blog)
        .then(post => {
            res.status(201).json(post)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "There was an error while saving the post to the database" })
        })
    }
})

module.exports = router;
