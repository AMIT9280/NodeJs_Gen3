const express = require('express')
const router  = express.Router();
const DepartmentsController = require('../controller/departmentController')

router.post("/department",DepartmentsController.AddDepartment)

module.exports = router;