require('dotenv').config();

// require your server and launch it here
const server = require('./api/server.js');

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server Running of ${PORT}`)
})