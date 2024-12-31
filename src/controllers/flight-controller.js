const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
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

module.exports = { create, getAll };
