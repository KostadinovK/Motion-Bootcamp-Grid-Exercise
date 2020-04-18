const context = require('../models/index');

function getAll() {
    return context.employees.find().populate('Department');
}

function getAllByDepartmentId(id){
    context.employees.find({department: id}).populate('Department');
}

module.exports = {
    getAll,
    getAllByDepartmentId
}