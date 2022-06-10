// Write your "projects" router here!
const express = require('express')
const { get, insert, update, remove, getProjectActions } = require('./projects-model')
const { validateId } = require('./projects-middleware')

const projectsRouter = express.Router()

projectsRouter.get('/', (req, res) => {
    get()
        .then(project => {
            res.json(project)
        })
        .catch(() => {
            res.status(500).json({ message: 'Failed to add projects' })
        })
})

projectsRouter.get('/:id', validateId, (req, res) => {
    if (!req.params.id) {
        res.status(404).json({ message: 'Project id doesnt exist' })
    } else {
        get(req.params.id)
            .then(project => {
                res.json(project)
            })
            .catch(() => {
                res.status(500).json({ message: "Getting id not working" })
            })
    }
});

projectsRouter.post('/', (req, res) => {
    const newProject = req.body
    insert(newProject)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(() => {
            res.status(400).json({ message: 'Cannot post for some reason' })
        })
})

projectsRouter.put("/:id", validateId, (req, res) => {
    const { name, description, completed } = req.body
    if (!name || !description || typeof completed !== 'boolean') {
        res.status(400).json({ message: 'Project id doesnt exist' })
    } else {
        update(req.params.id, req.body)
            .then((updateProject) => {
                res.status(200).json(updateProject);
            })
            .catch(() => {
                res.status(500).json({ message: 'Failed to update project' })
            })
    }
});

projectsRouter.delete('/:id', validateId, (req, res) => {
    remove(req.params.id)
        .then(deletedProject => {
            res.json(deletedProject)
        })
        .catch(() => {
            res.status(500).json({ message: 'Failed to delete project' })
        })
})

projectsRouter.get('/:id/actions', validateId, (req, res) => {
    getProjectActions(req.params.id)
        .then(action => {
            res.json(action)
        })
        .catch(() => {
            res.status(500).json({ message: "No action for you" })
        })
})



module.exports = projectsRouter;