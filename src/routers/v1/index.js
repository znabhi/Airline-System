const CityController = require("../../controllers/city-controller");
const express = require("express");
const router = express.Router();

router.post("/city", CityController.create);
module.exports = router;
