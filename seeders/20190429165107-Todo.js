'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Todos', [{
    title: 'berak',
    description: 'di celana',
    UserId: 1
  },{
    title: 'beli makan',
    description: 'pisang coklat',
    UserId: 2
  },
  {
    title: 'belanja',
    description: 'susu',
    UserId: 2
  },
  {
    title: 'dagang',
    description: 'borax',
    UserId: 1
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
