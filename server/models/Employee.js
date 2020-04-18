const mongoose = require('mongoose');

let employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First Name is required!'],
        minlength: [2, 'First Name length must be atleast 2 chars'],
        maxlength: [20, 'First Name length must be max 20 characters long']
    },
    lastName: {
        type: String,
        required: [true, 'Last Name is required!'],
        minlength: [2, 'Last Name length must be atleast 2 chars'],
        maxlength: [20, 'Last Name length must be max 20 characters long']
    },
    email: {
        type: String
    },
    position: {
        type: String,
        required: [true, 'Position is required!'],
        minlength: [2, 'Position length must be atleast 2 chars'],
        maxlength: [40, 'Position length must be max 20 characters long']
    },
    department: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Department'
    }
});

module.exports = mongoose.model('Employee', employeeSchema);