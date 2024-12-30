const { AirpotRepository } = require("../repository/index");

class AirpotService {
  constructor() {
    this.airpotRepository = new AirpotRepository();
  }

  async createAirpot(data) {
    try {
      const airpot = await this.airpotRepository.createAirpot(data);
      return airpot;
    } catch (error) {
      console.log(error);
    }
  }

  async getAirpot() {
    try {
      const getAirpot = await this.airpotRepository.getAirpot();
      return getAirpot;
    } catch (error) {
      console.log(error);
    }
  }

  async getByAirpot(airpotId) {
    try {
      const getAllAiport = await this.airpotRepository.getByAirpot(airpotId);
      return getAllAiport;
    } catch (error) {
      console.log(error);
    }
  }

  async updateAirpot(airpotId, data) {
    try {
      const updatedAirpot = await this.airpotRepository.updateAirpot(
        airpotId,
        data
      );
      return updatedAirpot;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAirpot(airpotId) {
    try {
      const deletedAirpot = await this.airpotRepository.deleteAirpot(airpotId);
      return deletedAirpot;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = AirpotService;
