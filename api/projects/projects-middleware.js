const { get } = require('./projects-model')

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
    validateProjectId
}