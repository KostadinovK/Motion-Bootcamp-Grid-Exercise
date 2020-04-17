const context = require('../models/index');

function register(username, password){
    return context.users.create({ username, password }); 
}

function getByUsername(username) {
    return context.users.findOne({username});
}


module.exports = {
    register,
    getByUsername
}