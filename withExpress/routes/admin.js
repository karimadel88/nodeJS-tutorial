const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");
const productsController = require("../controllers/products");

router.get("/add-product", productsController.getProduct);

router.post("/add-product", productsController.postProduct);

module.exports = router;
