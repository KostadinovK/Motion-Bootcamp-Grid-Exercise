const context = require('../models/index');

function getById(id){
    return context.departments.findOne({_id: id}); 
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
    add,
    addEmployee,
    removeEmployee
}