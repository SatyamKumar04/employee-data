const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeControllers');
const { filterByDepartment } = require('../middleware/employeeMiddleware'); // Import the middleware


router.get('/employee', employeeController.getAllEmployee);


router.get('/employee/:department', filterByDepartment, employeeController.getEmployeeByDepartment);

module.exports = router;

