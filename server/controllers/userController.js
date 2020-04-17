const userService = require('../services/userService');

const register = (req, res) => {
    const {username, password} = req.body;

    userService.register(username, password)
    .then(user => res.send(user))
    .catch(err => res.status(400).send(err.errors));
}

module.exports = {
    get: {

    },
    post: {
        register
    }
}