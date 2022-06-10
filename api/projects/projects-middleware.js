const { get } = require('./projects-model')

function count(req, res, next) {
    if (req.count == null) {
        req.count = 0;
    } else {
        req.count++;
    }
    console.log(req.count);
    next();
}

function validateId(req, res, next) {
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
    validateId,
    count
}