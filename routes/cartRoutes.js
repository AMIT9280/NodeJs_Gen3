const express = require('express')
const router = express.Router()

const cartController =  require("../controller/cartController")

router.post("/cart",cartController.AddToCart)
router.get("/cart",cartController.GetAllCart)

module.exports = router;
