const express = require('express')
const { get, insert, update, remove } = require('./actions-model')
// const { validateId } = require('./actions-middleware')

const actionsRouter = express.Router()

actionsRouter.get('/', (req, res) => {
    get()
        .then(action => {
            res.json(action)
        })
        .catch(() => {
            res.status(500).json({ message: "No action!!" })
        })
})

module.exports = actionsRouter;