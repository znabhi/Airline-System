const CrudRepository = require("./crud-repository");
const { Flights } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flights);
  }

  #createFilter(data) {
    let filter = {};

    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }

    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    // if (data.minPrice && data.maxPrice) {
    //   Object.assign(filter, {
    //     [Op.and]: [
    //       { price: { [Op.lte]: data.maxPrice } },
    //       { price: { [Op.gte]: data.minPrice } },
    //     ],
    //   });
    // }

    let priceFilter = [];
    if (data.minPrice) {
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }

    if (data.maxPrice) {
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }

    Object.assign(filter, { [Op.and]: priceFilter });

    return filter;
  }

  async getAllFlight(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flight = await this.model.findAll({
        where: filterObject,
      });
      return flight;
    } catch (error) {
      console.log("some error from while fetching Flights", error);
    }
  }
}

module.exports = FlightRepository;
