const router = require('express').Router();
const departmentController = require('../controllers/departmentController');
const auth = require('../utils/auth');

router.get('/', auth(), departmentController.get.getAll);
router.post('/', auth(), departmentController.post.create);

module.exports = router;