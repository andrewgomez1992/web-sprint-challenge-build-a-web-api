// add middlewares here related to actions
const { get } = require('./actions-model')

function validateActionsId(req, res, next) {
    const { id } = req.params;
    get(id)
        .then(action => {
            if (action) {
                next();
            } else {
                res.status(404).json({ message: "action is invalid" })
            }
        })
}

function validateProjectId(req, res, next) {
    const { id } = req.params;
    get(id)
        .then(project => {
            if (project) {
                next();
            } else {
                res.status(404).json({ message: "project id is invalid" })
            }
        })
}

module.exports = {
    validateActionsId,
    validateProjectId
}