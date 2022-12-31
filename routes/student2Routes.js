const express = require('express')
const router = express.Router()
const studentSchemaValidateUtil = require('../util/StudentSchemaValidationUtil')
const validate = require('../middleware/ZodMiddleware')
const student2Controller = require("../controller/student2Controller")

router.post("/student2",validate(studentSchemaValidateUtil),student2Controller.addStudents)

module.exports = router;