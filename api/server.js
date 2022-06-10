const express = require('express');
const server = express();
const cors = require('cors');

server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h1>${process.env.MESSAGE}</h1>`)
})

server.use((err, req, res, next) => {
    res.status(500).json({ message: err.message, stack: err.stack })
})

// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!

module.exports = server;
