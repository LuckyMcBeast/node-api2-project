// implement your posts router here
const express = require('express');

const router = express.Router();
const Posts = require('./posts-model');


router.get('/', (req, res) => {
    Posts.find()
        .then(blogs => {
            res.status(200).json(blogs);
        })
        .catch(err => res.status(500).json({
            message : 'Error retrieving Blog Posts',
            error : err
        }))
})

module.exports = router;
