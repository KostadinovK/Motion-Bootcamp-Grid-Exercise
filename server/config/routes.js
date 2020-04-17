const usersRouter = require('../routes/userRouter');

module.exports = (app) => {
    app.use('/api/user', usersRouter);
};