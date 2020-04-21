const router = require('express').Router();
const employeeController = require('../controllers/employeeController');
const auth = require('../utils/auth');

router.get('/', employeeController.get.getAll);
router.get('/sorted/:sortBy', employeeController.get.getAll);

router.get('/:departmentId', employeeController.get.getAllByDepartment);
router.get('/:departmentId/:sortBy', employeeController.get.getAllByDepartment);

router.post('/', auth(), employeeController.post.add);
router.delete('/:id', /*auth(),*/ employeeController.del.remove);

module.exports = router;