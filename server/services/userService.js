const jwt = require('../utils/jwt');
const context = require('../models/index');

function register(username, password){
    return context.users.create({ username, password }); 
}

function login(id){
    return jwt.create( { id } );
}

function getByUsername(username) {
    return context.users.findOne({username});
}

function getById(id){
    return context.users.findOne({_id: id});
}


module.exports = {
    register,
    login,
    getByUsername,
    getById
}