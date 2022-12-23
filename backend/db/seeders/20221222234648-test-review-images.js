'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('ReviewImages',[
      {
        reviewId: 1,
        url: "https://ninerswire.usatoday.com/wp-content/uploads/sites/77/2021/09/USATSI_16837921.jpg?w=1000&h=600&crop=1",
      },
      {
        reviewId: 2,
        url: "https://www.santacruzsentinel.com/wp-content/uploads/2022/10/BNG-L-49ERS-0919-37.jpg?w=733",
      },
      {
        reviewId: 3,
        url: "https://static01.nyt.com/images/2012/01/15/sports/smith/smith-jumbo.jpg?quality=75&auto=webp"
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('ReviewImages', {}, {})
  }
};
