'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Genres', [
      {name: "Piano"},
      {name: "Guitar"},
      {name: "Ambient"},
      {name: "Electronic"},
  ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Genres', null, {});
  }
};
