// Write your "projects" router here!
const express = require('express')

const Projects = require('./projects-model');

const router = express.Router()

router.get('/', (req, res) => {
    Projects.get()
        .then(result => {
            res.json(Projects)
        })
        .catch(err => {
            res.status(500).json({ message: "error" })
        })
})