require('dotenv').config()

const server = require('./api/server');

const PORT = process.env.PORT || 9000;
console.log(process.env)

server.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})