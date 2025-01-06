const { CityRepository } = require("../repository/index");
const CrudService = require("./crud-service");

class CityService extends CrudService {
  constructor() {
    const cityRepository = new CityRepository();
    super(cityRepository);
    this.cityRepository = new CityRepository();
  }

  async getAllCity(filter) {
    try {
      const city = await this.cityRepository.getAllCity(filter);
      return city;
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityService;
