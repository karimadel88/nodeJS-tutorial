const express = require("express");
const router = express.Router();
const error = require("../controllers/error");
router.use(error.getError404);

module.exports = router;
