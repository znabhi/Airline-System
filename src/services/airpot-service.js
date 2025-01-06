const CrudService = require("./crud-service");
const { AirpotRepository } = require("../repository/index");

class AirpotService extends CrudService {
  constructor() {
    const airpotRepository = new AirpotRepository();
    super(airpotRepository);
  }
}
module.exports = AirpotService;
