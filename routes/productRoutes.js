const express = require("express")
const routes = express.Router();
const productController = require("../controller/productController")


routes.post("/product",productController.addProduct)
routes.get("/product",productController.getAllProducts)


module.exports = routes;
