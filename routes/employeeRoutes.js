const express = require('express');

const router = express.Router();
const employeeController = require('../controllers/employeeControllers')


router.get('/employee' , employeeController.getAllEmployee);

router.get('/employee/:department' , employeeController.getEmployeeByDepartment);
