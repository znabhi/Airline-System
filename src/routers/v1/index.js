const CityController = require("../../controllers/city-controller");
const AirpotController = require("../../controllers/airpot-controller");
const express = require("express");
const router = express.Router();

// City Router
router.post("/city", CityController.create);
router.get("/city", CityController.getAllCity);
router.get("/city/:id", CityController.getById);
router.delete("/city/delete/:id", CityController.destroy);
router.patch("/city/update/:id", CityController.update);

// Airpot Router
router.post("/airpot", AirpotController.create);
router.get("/airpot", AirpotController.getAll);
router.get("/airpot/:id", AirpotController.getById);
router.patch("/airpot/update/:id", AirpotController.update);
router.delete("/airpot/delect/:id", AirpotController.deleteAirpot);

module.exports = router;
