const employeeService = require('../services/employeeService');
const departmentService = require('../services/departmentService');

const getAll = (req, res) => {

    employeeService.getAll()
    .then(data => res.send(data))
    .catch(err => res.status(400).send(err));
}

const getAllByDepartment = (req, res) => {
    const { departmentId } = req.params;

    employeeService.getAllByDepartmentId(departmentId)
    .then(data => res.send(data))
    .catch(err => res.status(400).send(err));
}

const add = async (req, res) => {
    const {firstName, lastName, email, position, department} = req.body;

    if(firstName === null || firstName.length < 2 || firstName.length > 20) {
        res.send({error: 'Invalid First Name Length'});
        return;
    }

    if(lastName === null || lastName.length < 2 || lastName.length > 20) {
        res.send({error: 'Invalid Last Name Length'});
        return;
    }

    if(position === null || position.length < 2 || position.length > 40) {
        res.send({error: 'Invalid Position Length'});
        return;
    }

    let departmentFromDb = await departmentService.getById(department);
    if(departmentFromDb === null){
        res.send({error: 'Invalid Department Id'});
        return;
    }

    employeeService.add(req.body)
    .then(async employee => {
        await departmentService.addEmployee(employee._id, departmentFromDb._id);
        res.send(employee);
    })
    .catch(err => res.status(400).send(err));
}

const remove = async (req, res) => {
    const { id } = req.params;

    let employee = await employeeService.getById(id);

    if(employee === null){
        res.send({error: 'Invalid Employee Id'});
        return;
    }

    await departmentService.removeEmployee(employee._id, employee.department._id);

    employeeService.remove(id)
    .then(data => res.send(data))
    .catch(err => res.status(400).send(err));
}

module.exports = {
    get: {
        getAll,
        getAllByDepartment
    },
    post: {
        add
    },
    del:{
        remove
    }
}