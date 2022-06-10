// Write your "projects" router here!
const express = require('express')
const { get, insert, update, remove, getProjectActions } = require('./projects-model')
const { validateId, count } = require('./projects-middleware')

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

// projectsRouter.get('/id', (req, res) => {
//     get()
//         .then(project => {
//             if (req.body.id) {
//                 res.json(project)
//             } else {
//                 res.status(404).json({ message: "project id not found" })
//             }
//         })
// })

module.exports = projectsRouter;