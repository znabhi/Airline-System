const { AirplaneService } = require("../services/index");
const { SuccessErrorCodes } = require("../utils/error-codes");
const airplaneService = new AirplaneService();

const create = async (req, res) => {
  try {
    const result = await airplaneService.create(req.body);
    return res.status(SuccessErrorCodes.CREATED).json({
      data: result,
      err: {},
      success: true,
      message: "Successfully Created Airplane",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      error: { error },
      success: false,
      message: "not created",
    });
  }
};

const getAll = async (req, res) => {
  try {
    const airplane = await airplaneService.getAll();

    return res.status(200).json({
      data: airplane,
      message: "successfully get all the Airplanes",
      error: {},
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      message: "not getting successfully",
      error: error,

      success: false,
    });
  }
};

const getById = async (req, res) => {
  try {
    const airplane = await airplaneService.getById(req.params.id);

    res.status(200).json({
      data: airplane,
      message: "Successfully get the Airplane",
      error: {},
      success: true,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      data: {},
      message: "Sorry Airplane is not fatched ",
      error: { error },
      success: false,
    });
  }
};

const update = async (req, res) => {
  try {
    const response = await airplaneService.update(req.params.id, req.body);
    return res.status(200).json({
      data: response,
      error: {},
      success: true,
      message: "successfully updated",
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      error: error,
      success: false,
      message: "sorry not  updated",
    });
  }
};

const destroy = async (req, res) => {
  try {
    const deleteAirplane = await airplaneService.destroy(req.params.id);
    return res.status(200).json({
      data: deleteAirplane,
      success: true,
      message: "delete successfully",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
      data: {},
      message: "Ops,not deleted",
      stleuccess: false,
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
