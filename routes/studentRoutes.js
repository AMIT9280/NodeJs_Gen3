const express = require("express")
const studentController = require("../controller/studentController")
const router = express.Router();


router.post("/student",studentController.addStudent)


module.exports = router;



