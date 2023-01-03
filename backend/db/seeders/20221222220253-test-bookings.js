'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Bookings', [
      {
        spotId: 1,
        userId: 1,
        startDate: new Date('December 23, 2022 00:00:00'),
        endDate: new Date('December 27, 2022 11:00:00')
      },
      {
        spotId: 2,
        userId: 2,
        startDate: new Date('December 28, 2022 00:00:00'),
        endDate: new Date('December 31, 2022 11:00:00')
      },
      {
        spotId: 3,
        userId: 3,
        startDate: new Date('January 01, 2022 00:00:00'),
        endDate: new Date('January 04, 2022 11:00:00')
      }
    ])
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.bulkDelete('Bookings', null, {});
    
  }
};
