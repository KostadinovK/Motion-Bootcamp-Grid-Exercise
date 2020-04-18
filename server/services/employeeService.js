const context = require('../models/index');

function getById(id) {
    return context.employees.findOne({_id: id}).populate('department');
}

function getAll(sortBy = null) {
    if(sortBy === null){
        return context.employees.find().populate('department');
    }

    return context.employees.find().sort([[sortBy, 1]]).populate('department');
}

function getAllByDepartmentId(id, sortBy = null) {
    if(sortBy === null){
        return context.employees.find({department: id}).populate('department'); 
    }
    
    return context.employees.find({department: id}).sort([[sortBy, 1]]).populate('department');
}

function add(employeeData){
    const {firstName, lastName, email, position, department} = employeeData;

    return context.employees.create({
        firstName, lastName, email, position, department
    });
}

function remove(id){
    return context.employees.deleteOne({_id: id});
}

module.exports = {
    getById,
    getAll,
    getAllByDepartmentId,
    add,
    remove
}