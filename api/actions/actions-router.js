const express = require('express')
const { get, insert, update, remove } = require('./actions-model')
const { validateActionsId, validateProjectId } = require('./actions-middlware')

const actionsRouter = express.Router()

actionsRouter.get('/', (req, res) => {
    get()
        .then(action => {
            res.json(action)
        })
        .catch(() => {
            res.status(500).json({ message: "No action!" })
        })
})

actionsRouter.get('/:id', validateActionsId, (req, res) => {
    if (!req.params.id) {
        res.status(404).json({ message: "Actions id doesnt exist" })
    } else {
        get(req.params.id)
            .then(action => {
                res.json(action)
            })
            .catch(() => {
                res.status(500).json({ message: "" })
            })
    }
})


actionsRouter.post('/', (req, res) => {
    const { project_id, description, notes } = req.body;
    if (!project_id || !description || !notes) {
        res.status(400).json({ message: "post not posting!" })
    } else {
        insert(req.body)
            .then(action => {
                res.status(201).json(action)
            })
            .catch(() => {
                res.status(500).json({ message: "Cannot get action for some reason" })
            })
    }
})


// project id, description, and notes 
actionsRouter.put('/:id', validateActionsId, validateProjectId, (req, res) => {
    const { project_id, description, notes } = req.body
    if (!project_id || !description || !notes) {
        res.status(400).json({ message: "Missing required fields" })
    } else {
        update(req.params.id, req.body)
            .then(updatedAction => {
                res.status(201).json(updatedAction)
            })
            .catch(() => {
                res.status(500).json({ message: 'Put not working' })
            })
    }
})

actionsRouter.delete('/:id', validateActionsId, (req, res) => {
    remove(req.params.id)
        .then(deletedAction => {
            res.json(deletedAction)
        })
        .catch(() => {
            res.status(500).json({ message: "delete not working!!!" })
        })
})

module.exports = actionsRouter;