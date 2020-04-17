const context = require('../models/index');

function register(username, password){
    return context.users.create({ username, password }); 
}

function getByUsername(username) {
    return context.users.findOne({username});
}

function getById(id){
    return context.users.findOne({_id: id});
}


module.exports = {
    register,
    getByUsername,
    getById
}