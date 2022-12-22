'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Reviews',[
      {
      spotId: 1,
      userId: 2,
      review: 'Decent place for short night',
      stars: 3
    },
      {
      spotId: 2,
      userId: 3,
      review: 'Wonderful vacation spot',
      stars: 4
    },
      {
      spotId: 3,
      userId: 1,
      review: 'Hospitality from host was excellent',
      stars: 4
     }
    ],{})
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete('Reviews', {}, {})
  }
};
