"use strict";
let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Spots";
    return queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: "123 Disney Lane",
        city: "San Francisco",
        state: "California",
        country: "United States of America",
        lat: 37.7645358,
        lng: -122.4730327,
        name: "App Academy",
        description: "Place where web developers are created",
        price: 123,
        avgRating: 4,
        previewImage: "https://www.nfl.com/",
      },
      {
        ownerId: 2,
        address: "14370 Culver Dr",
        city: "Irvine",
        state: "California",
        country: "United States of America",
        lat: 33.70509,
        lng: -117.785072,
        name: "Sup Noodle Bar",
        description: "Delicious vietnamese pho",
        price: 606,
        avgRating: 5,
        previewImage: "https://www.nba.com/",
      },
      {
        ownerId: 3,
        address: "1502 Industrial Dr",
        city: "Houston",
        state: "Texas",
        country: "United States of America",
        lat: 29.622931,
        lng: -95.537437,
        name: "Alphaland",
        description: "Really big and glamourous gym",
        price: 800,
        avgRating: 3,
        previewImage: "https://www.nfl.com/",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete(options, null, {});
  },
};
