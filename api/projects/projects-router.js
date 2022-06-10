// Write your "projects" router here!
const express = require('express')
const { get, insert, update, remove, getProjectActions } = require('./projects-model')
const { validateId } = require('./projects-middleware')

const projectsRouter = express.Router()

projectsRouter.get('/', (req, res) => {
    get()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(() => {
            res.status(500).json({ message: 'failed to add projects' })
        })
})

module.exports = projectsRouter;