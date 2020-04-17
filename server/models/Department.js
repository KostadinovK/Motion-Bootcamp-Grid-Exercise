const mongoose = require('mongoose');

let departmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Department name is required!'],
        minlength: [2, 'Department name length must be atleast 2 chars'],
        maxlength: [30, 'Department name length must be max 20 chars']
    },
    employees: [{ type : mongoose.SchemaTypes.ObjectId, ref: 'Employee' }]
});

module.exports = mongoose.model('Department', departmentSchema);