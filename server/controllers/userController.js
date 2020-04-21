const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const userService = require('../services/userService');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    const {username, password} = req.body;

    let user = await userService.getByUsername(username);

    if(user !== null){
        res.send({error: 'User already registered!'});
        return;
    }

    userService.register(username, password)
    .then(user => res.send(user))
    .catch(err => res.status(400).send(err.errors));
}

const login = async (req, res) => {
    const {username, password} = req.body;

    let user = await userService.getByUsername(username)
    .catch(err => res.status(400).send(err));

    if(user === null){
        res.status(400).send({error: `Incorrect username or password!`});
        return;
    }

    bcrypt.compare(password, user.password).then(function(result) {
        if(result === true){
            let jwt = userService.login(user.id);
            res.cookie(config.authCookieName, jwt);
            res.send({username: user.username, token: jwt});
        }else{
            res.send({error: "Incorrect username or password!"});
        }
    }).catch(err => res.send(err));
}

const logout = (req, res) => {
    res.clearCookie(config.authCookieName);
    res.send({result: "Successfully logged out!"});
}

module.exports = {
    get: {
        logout
    },
    post: {
        register,
        login
    }
}