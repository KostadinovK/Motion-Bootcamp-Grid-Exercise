const departmentService = require('../services/departmentService');

const create = async (req, res) => {
    const { name } = req.body;

    if(name === null || name.length < 2 || name.length > 30) {
        res.send({error: 'Invalid Department Name Length'});
        return;
    }

    let departmentFromDb = await departmentService.getByName(name);

    if(departmentFromDb !== null){
        res.send({error: 'Department already exist!'});
        return;
    }

    departmentService.add(name)
    .then(department => res.send(department))
    .catch(err => res.status(400).send(err));
}

module.exports = {
    post: {
        create
    }
};