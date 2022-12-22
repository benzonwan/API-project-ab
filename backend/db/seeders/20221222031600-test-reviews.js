'use strict';
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  async up(queryInterface, Sequelize) {

    return queryInterface.bulkInsert('Reviews', [
      {
        spotId: 1,
        userId: 1,
        review: "What a wonderful host they were",
        stars: 5,
      },
      {
        spotId: 2,
        userId: 2,
        review: "Amazing viewspots, lovely host",
        stars: 5,
      },
      {
        spotId: 3,
        userId: 3,
        review: "Spot was nice and clean",
        stars: 4,
      },
    ]);

    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Reviews', null, {})
  }
};
