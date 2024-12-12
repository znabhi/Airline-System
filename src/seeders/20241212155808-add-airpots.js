"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Airpots",
      [
        {
          name: "Chennai International Airport",
          city_Id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pune International Airport",
          city_Id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Juhu Airport",
          city_Id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Aurangabad Airport",
          city_Id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Shirdi International Airport",
          city_Id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dehli Airport",
          city_Id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete("Airpots", null, {});
  },
};
