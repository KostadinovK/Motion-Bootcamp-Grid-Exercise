const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

let userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: [true, 'This username already exist!'],
        required: [true, 'Username is required!'],
        minlength: [3, 'Username length must be atleast 3 symbols']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [3, 'Password length should be at least 3 symbols']
    }
});

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if (err) { next(err); return; }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return; }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = mongoose.model('User', userSchema);