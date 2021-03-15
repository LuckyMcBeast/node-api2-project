// implement your server here
const express = require('express');
const PostRouter = require('./posts/posts-router')
const server = express();
server.use(express.json())

server.use('/api/posts', PostRouter)
// require your posts router and connect it here


module.exports = server;