const { CityService } = require("../services/index");
const {
  SuccessErrorCodes,
  ClientErrorCodes,
  ServerErrorCodes,
} = require("../utils/error-codes");
const cityService = new CityService();

const create = async (req, res) => {
  try {
    const city = await cityService.create(req.body);
    return res.status(SuccessErrorCodes.CREATED).json({
      data: city,
      success: true,
      message: "Successfully Created City",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to Created City",
      err: error,
    });
  }
};

const getAllCity = async (req, res) => {
  try {
    const city = await cityService.getAllCity(req.query);
    return res.status(SuccessErrorCodes.OK).json({
      data: city,
      success: true,
      message: "successfully fatched all cities",
      error: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to fatched cities",
      err: error,
    });
  }
};

const getById = async (req, res) => {
  try {
    const city = await cityService.getById(req.params.id);
    if (city === 0 || city == null) {
      return res.status(501).json({
        success: false,
        message: "this City Id not exists",
      });
    }
    return res.status(SuccessErrorCodes.OK).json({
      data: city,
      success: true,
      message: "Successfully get the city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get City",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const response = await cityService.destroy(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "City deleted Successfully",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to delete city",
      err: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const update = await cityService.update(req.params.id, req.body);
    return res.status(SuccessErrorCodes.OK).json({
      data: update,
      success: true,
      message: "successfully updated details",
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "not able to update city",
      error: error,
    });
  }
};

module.exports = {
  create,
  getById,
  destroy,
  update,
  getAllCity,
};
