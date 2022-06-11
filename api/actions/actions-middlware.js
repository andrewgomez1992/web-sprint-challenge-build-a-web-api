// add middlewares here related to actions
const { get } = require('./actions-model')


function validateId(req, res, next) {
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

module.exports = {
    validateId
}