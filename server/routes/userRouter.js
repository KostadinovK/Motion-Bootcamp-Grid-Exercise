const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../utils/auth');

router.post('/register', userController.post.register);

module.exports = router;