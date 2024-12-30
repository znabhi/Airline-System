const { AirpotService } = require("../services/index");

const airpotService = new AirpotService();

const create = async (req, res) => {
  try {
    const airpot = await airpotService.createAirpot(req.body);
    return res.status(201).json({
      success: true,
      data: airpot,
      message: "Successfully Created...",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      data: {},
      error: error,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const airpot = await airpotService.getAirpot();
    return res.status(200).json({
      data: airpot,
      success: true,
      message: "Successfully get all Airpots",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      error: error,
      success: false,
    });
  }
};

const getById = async (req, res) => {
  try {
    const airpot = await airpotService.getByAirpot(req.params.id);
    return res.status(200).json({
      success: true,
      data: airpot,
      message: `Successfully fatched this ${req.params.id}`,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      data: {},
      error: {},
    });
  }
};

const update = async (req, res) => {
  try {
    const airpot = await airpotService.updateAirpot(req.params.id, req.body);
    return res.status(200).json({
      data: airpot,
      message: "Successfully updated",
      error: {},
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "not updated",
      error: error,
      success: false,
    });
  }
};

const deleteAirpot = async (req, res) => {
  try {
    const airpot = await airpotService.deleteAirpot(req.param.id);
    return res.status(200).json({
      data: airpot,
      message: "successfully deleted",
      success: true,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "not deleted",
      success: false,
      error: error,
    });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteAirpot,
};
