const { City } = require("../models/index");
const { Op } = require("sequelize");
const CrudRepository = require("./crud-repository");
class CityRepository extends CrudRepository {
  constructor() {
    super(City);
  }

  async getAllCity(filter) {
    try {
      if (filter.name) {
        const city = await this.model.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return city;
      }
      const city = await this.model.findAll();
      return city;
    } catch (error) {
      throw { error };
    }
  }
}
module.exports = CityRepository;
