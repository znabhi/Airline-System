const CrudRepository = require("./crud-repository");
const { Airpot } = require("../models/index");

class AirpotRepository extends CrudRepository {
  constructor() {
    super(Airpot);
  }
}
module.exports = AirpotRepository;
