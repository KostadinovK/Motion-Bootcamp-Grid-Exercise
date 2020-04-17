const router = require('express').Router();
const userController = require('../controllers/userController');
const auth = require('../utils/auth');

router.post('/register', userController.post.register);
router.post('/login', userController.post.login);
router.get('/logout', auth(), userController.get.logout);

module.exports = router;