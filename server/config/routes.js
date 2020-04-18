const usersRouter = require('../routes/userRouter');
const employeeRouter = require('../routes/employeeRouter');
const departmentRouter = require('../routes/departmentRouter');

module.exports = (app) => {
    app.use('/api/user', usersRouter);
    app.use('/api/employee', employeeRouter);
    app.use('/api/department', departmentRouter);
};