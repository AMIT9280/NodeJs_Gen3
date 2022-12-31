const express = require('express')
const router = express.Router();
const employeesController = require('../controller/employeesController')

router.post("/employee",employeesController.AddEmployees)
router.get("/employee",employeesController.getAllEmployees)
router.post('/employee/bulk',employeesController.insertBulkEmployees)

module.exports = router;