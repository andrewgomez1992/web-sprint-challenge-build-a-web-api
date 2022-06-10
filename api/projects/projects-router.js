// Write your "projects" router here!
const express = require('express')
const { get, insert, update, remove, getProjectActions } = require('./projects-model')
const { validateId, count, postProject } = require('./projects-middleware')

const projectsRouter = express.Router()

projectsRouter.get('/', count, (req, res) => {
    get()
        .then(project => {
            res.json(project)
        })
        .catch(() => {
            res.status(500).json({ message: 'failed to add projects' })
        })
})

projectsRouter.get('/:id', validateId, (req, res) => {
    if (!req.params.id) {
        res.status(404).json({ message: "project id doesnt exist" })
    } else {
        get(req.params.id)
            .then(project => {
                res.json(project)
            })
    }
});

projectsRouter.post('/', postProject, (req, res) => {
    const newProject = req.body
    insert(newProject)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(() => {
            res.status(400).json({ message: "cannot post for some reason" })
        })
})


module.exports = projectsRouter;