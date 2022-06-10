const express = require('express');
const server = express();
const cors = require('cors');
const morgan = require('morgan')
const projectsRouter = require('./projects/projects-router')

server.use(morgan("dev"))
server.use(cors());

server.use(express.json());

server.use('/api/projects', projectsRouter)

server.get('/', (req, res) => {
    res.send(`<h1>${process.env.MESSAGE}</h1>`)
})

server.use("*", (req, res) => {
    res.status(404).json({ message: "YOUR A LITTLE LOST" })
})

module.exports = server;
