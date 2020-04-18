const usersRouter = require('../routes/userRouter');
const employeeRouter = require('../routes/employeeRouter');

module.exports = (app) => {
    app.use('/api/user', usersRouter);
    app.use('/api/employee', employeeRouter);
};