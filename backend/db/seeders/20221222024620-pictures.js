'use strict';
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  async up (queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: "https://media.bleacherreport.com/image/upload/c_crop,h_1.00,w_1.00,x_0.00,y_0.00/v1671641602/zejgsab7le01nutucupu.jpg",
        preview: false,
      },
      {
        spotId: 2,
        url: "https://library.sportingnews.com/styles/crop_style_16_9_desktop/s3/2022-06/stephen-curry-ftr_4.jpeg?itok=kiMWjDDe",
        preview: true,
      },
      {
        spotId: 3,
        url: "https://cdn.vox-cdn.com/thumbor/-G3pUe_tQlrxhdXgkyGN4yKgu3Y=/3x0:3996x2662/920x613/filters:focal(3x0:3996x2662):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/13201423/20130126_ter_al2_203.0.jpg",
        preview: true
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
  }
};
