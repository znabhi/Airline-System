const { AirpotService } = require("../services/index");

const airpotService = new AirpotService();

const create = async (req, res) => {
  try {
    const airpot = await airpotService.create(req.body);
    return res.status(201).json({
      data: airpot,
      success: true,
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
    const airpot = await airpotService.getAll();
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
    const airpot = await airpotService.getById(req.params.id);
    return res.status(200).json({
      data: airpot,
      success: true,
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
    const airpot = await airpotService.update(req.params.id, req.body);
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

const destroy = async (req, res) => {
  try {
    const airpot = await airpotService.destroy(req.params.id);
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
  destroy,
};
