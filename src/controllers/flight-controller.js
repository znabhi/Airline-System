const { FlightService } = require("../services/index");
const { SuccessErrorCodes } = require("../utils/error-codes");

const flightService = new FlightService();

const createFlight = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(SuccessErrorCodes.CREATED).json({
      data: flight,
      success: true,
      error: {},
      message: "successfully created flight",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to Created Flight",
      err: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const flight = await flightService.getAllFlight(req.query);
    return res.status(200).json({
      data: flight,
      success: true,
      error: {},
      message: "Sucessfully fatched the Flight",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      error: { error },
      message: "Error ",
    });
  }
};

const getById = async (req, res) => {
  try {
    const flight = await flightService.getById(req.params.id);
    return res.status(200).json({
      data: flight,
      success: true,
      message: "successfully get flight",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "sorry this flight not exist",
      error: { error },
    });
  }
};

const update = async (req, res) => {
  try {
    const flight = await flightService.update(req.params.id, req.body);
    return res.status(200).json({
      data: flight,
      success: true,
      message: "successfully updated",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "sorry not updated",
      error: { error },
    });
  }
};

const destroy = async (req, res) => {
  try {
    const flight = await flightService.destroy(req.params.id);
    return res.status(200).json({
      data: flight,
      success: true,
      message: "successfully deleted",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "this flight not exist...",
      error: { error },
    });
  }
};

module.exports = { createFlight, getAll, getById, update, destroy };
