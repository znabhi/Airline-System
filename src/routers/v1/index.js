const CityController = require("../../controllers/city-controller");
const express = require("express");
const router = express.Router();

router.post("/city", CityController.create);
router.get("/city", CityController.getAllCity);
router.get("/city/:id", CityController.getById);
router.delete("/city/delete/:id", CityController.destroy);
router.patch("/city/update/:id", CityController.update);
module.exports = router;
