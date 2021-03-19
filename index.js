require('dotenv').config();

// require your server and launch it here
const server = require('./api/server.js');

const port = process.env.PORT;

server.listen(port, () => {
    console.log(`Server Running of ${port}`)
})