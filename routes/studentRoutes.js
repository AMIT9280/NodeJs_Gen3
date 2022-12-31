const express = require("express")
const studentController = require("../controller/studentController")
const router = express.Router();


router.post("/student",studentController.addStudent)
router.get("/student",studentController.getAllStudent)
router.delete("/student/:id",studentController.deleteStudent)
router.put("/student/:id",studentController.updateStudent)
router.get("/student/:id",studentController.getStudentById)

module.exports = router;



