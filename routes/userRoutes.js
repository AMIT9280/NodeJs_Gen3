const express = require('express')
const router = express.Router();

const userController = require('../controller/userController');
const auth = require('../middleware/AuthMiddleware');
const valid = require('../middleware/validation')

router.post("/user", valid.valid(), userController.addUser)
router.post("/user/:id", userController.updateUser)
router.get("/user", auth.auth(), userController.getAllUser)
router.get("/user/:id", userController.getUserById)
router.delete("/user/:id", userController.deleteUser)
router.post("/user/login", userController.Login)
router.post("/forget", userController.forgetPass)

module.exports = router;