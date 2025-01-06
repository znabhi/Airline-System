const CrudService = require("./crud-service");
const { FlightRepository, AirplaneRepository } = require("../repository/index");

class FlightService extends CrudService {
  constructor() {
    const flightRepository = new FlightRepository();
    super(flightRepository);
    this.flightRepository = new FlightRepository();
    this.airplaneRepository = new AirplaneRepository();
  }
  async createFlight(data) {
    try {
      const airplane = await this.airplaneRepository.getById(data.airplaneId);
      const flight = await this.flightRepository.create({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("some error while creating flight in server layer", error);
    }
  }

  async getAllFlight(filter) {
    try {
      const flight = await this.repository.getAllFlight(filter);
      return flight;
    } catch (error) {
      console.log("error while fatched data", error);
    }
  }
}

module.exports = FlightService;
