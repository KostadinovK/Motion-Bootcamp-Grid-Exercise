const context = require('../models/index');

function register(username, password){
    return context.users.create({ username, password }); 
}

module.exports = {
    register
}