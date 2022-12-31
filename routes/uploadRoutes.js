const express = require('express')
const router = express.Router();

const uploadController = require("../controller/uploadController")

router.post("/upload", uploadController.uploadFile)

module.exports = router;