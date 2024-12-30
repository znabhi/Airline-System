const { Airpot } = require("../models/index");

class AirpotRepository {
  async createAirpot({ name, city_Id, address }) {
    try {
      const airpot = await Airpot.create({ name, city_Id, address });
      return airpot;
    } catch (error) {
      console.log("Here some error while creating airpot -->", error);
    }
  }

  async getAirpot() {
    try {
      const airpot = await Airpot.findAll();
      return airpot;
    } catch (error) {
      console.log("Oos Error While getting airpot -->", error);
    }
  }

  async getByAirpot({ airpotId }) {
    try {
      const airpot = await Airpot.findOne({ airpotId });
      return airpot;
    } catch (error) {
      console.log("here some error while get by id airpot -->", error);
    }
  }

  async updateAirpot(airpotId, data) {
    try {
      await Airpot.update(data, {
        where: {
          id: airpotId,
        },
      });
      const updatedAirpot = await Airpot.fineOne({
        where: {
          id: airpotId,
        },
      });
      return updatedAirpot;
    } catch (error) {
      console.log("sorry have some error while updated -->", error);
    }
  }

  async deleteAirpot(airpotId) {
    try {
      await Airpot.delete(airpotId);
      const deletedAirpot = await Airpot.findOne(airpotId);
      return deletedAirpot;
    } catch (error) {
      console.log("error while deleting airpot -->", error);
    }
  }
}

module.exports = AirpotRepository;
