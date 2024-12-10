// const { where } = require("sequelize");
const { City } = require("../models/index");
const { Op } = require("sequelize");

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getAllCity(filter) {
    try {
      if (filter.name) {
        const city = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return city;
      }
      const city = await City.findAll();
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      await City.update(data, {
        where: {
          id: cityId,
        },
      });

      const updatedCity = await City.findOne({
        where: {
          id: cityId,
        },
      });

      return updatedCity;
    } catch (error) {
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });

      return true;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = CityRepository;
