'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
  options.schema = process.env.SCHEMA; // define your schema in options object
}

module.exports = {
  async up (queryInterface, Sequelize) {

    options.tableName = 'Spots';
    return queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: '1583 Thomas Ave',
        city: 'San Francisco',
        state:'California',
        country: 'United States of America',
        lat: 37.730070,
        lng: -122.391090,
        name: 'The city',
        description: 'Niner gang',
        price: 415,
        avgRating: 3,
        previewImage:'https://sports.yahoo.com/world-brock-purdy-042156590.html',
      },
      {
        ownerId: 2,
        address: '14370 Culver Dr',
        city: 'Irvine',
        state: 'California',
        country: 'United States of America',
        lat: 33.705090,
        lng: -117.785072,
        name: 'Sup Noodle Bar',
        description: 'Delicious vietnamese pho',
        price: 606,
        avgRating: 4,
        previewImage: 'https://www.yelp.com/biz_photos/s%C3%BAp-noodle-bar-by-kei-concepts-buena-park?select=LMjou6y4Dq5UefsSVwyKJg',
      },
      {
        ownerId: 3,    
        address: '1502 Industrial Dr',
        city: 'Houston',
        state: 'Texas',
        country: 'United States of America',
        lat: 29.622931,
        lng: -95.537437,
        name:'Alphaland',
        description: 'Really big and glamourous gym',
        price: 800,
        avgRating: 4.5,
        previewImage:'https://www.texasmonthly.com/arts-entertainment/welcome-to-alphaland-the-disney-world-for-body-builders/',
      },
    ])
  },

  async down (queryInterface, Sequelize) {

    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {}, {});
  }
};
