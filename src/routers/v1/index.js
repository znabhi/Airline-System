const CityController = require("../../controllers/city-controller");
const { FlightMiddlewares } = require("../../middlewares/index");
const AirpotController = require("../../controllers/airpot-controller");
const FlightController = require("../../controllers/flight-controller");
const AirplaneController = require("../../controllers/airplane-controller");
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
router.delete("/airpot/delete/:id", AirpotController.destroy);

// Airplane Router
router.post("/airplane", AirplaneController.create);
router.get("/airplane", AirplaneController.getAll);
router.get("/airplane/:id", AirplaneController.getById);
router.patch("/airplane/:id", AirplaneController.update);
router.delete("/airplane/:id", AirplaneController.destroy);

//Flight Router

router.post(
  "/flight",
  FlightMiddlewares.validateCreateFlight,
  FlightController.createFlight
);
router.get("/flight", FlightController.getAll);
router.get("/flight/:id", FlightController.getById);
router.patch("/flight/:id", FlightController.update);
router.delete("/flight/:id", FlightController.destroy);

module.exports = router;
