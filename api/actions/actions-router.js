const express = require('express')
const { get, insert, update, remove } = require('./actions-model')
const { validateId } = require('./actions-middlware')

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

actionsRouter.get('/:id', validateId, (req, res) => {
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

module.exports = actionsRouter;