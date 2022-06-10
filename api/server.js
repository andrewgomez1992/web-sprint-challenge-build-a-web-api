const express = require('express');
const server = express();
const cors = require('cors');
const morgan = require('morgan')
const { logger, count } = require('./projects/projects-middleware');

server.use(morgan("dev"))
server.use(cors());
server.use('/api/projects', logger)

server.use(express.json());

const actionsRouter = require('./actions/actions-router');
const projectsRouter = require('./projects/projects-router');

server.get('/', logger, count, (req, res) => {
    res.send(`<h1>${process.env.MESSAGE}</h1>`)
})

server.use((err, req, res, next) => {
    res.status(500).json({ message: err.message, stack: err.stack })
})

module.exports = server;
