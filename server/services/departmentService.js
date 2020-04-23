const context = require('../models/index');

function getById(id){
    return context.departments.findOne({_id: id}); 
}

function getByName(name){
    return context.departments.findOne({name}); 
}

function getAll(){
    return context.departments.find(); 
}

function add(name){

    return context.departments.create({
        name, employees: []
    });
}

async function addEmployee(employeeId, departmentId) {
    await context.departments.updateOne({ _id: departmentId }, { $push: { employees: employeeId } });
}

async function removeEmployee(employeeId, departmentId) {
    await context.departments.updateOne({ _id: departmentId }, { $pull: { employees: employeeId } });
}

module.exports = {
    getById,
    getByName,
    getAll,
    add,
    addEmployee,
    removeEmployee
}