const CrudService = require("../services/crud-service");

const { AirplaneRepository } = require("../repository/index");
class AirplaneService extends CrudService {
  constructor() {
    const airplaneRepository = new AirplaneRepository();
    super(airplaneRepository);
  }
}

module.exports = AirplaneService;
