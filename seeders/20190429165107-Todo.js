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
    UserId: 1,
    createdAt: new Date,
    updatedAt: new Date
  },{
    title: 'beli makan',
    description: 'pisang coklat',
    UserId: 2,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    title: 'belanja',
    description: 'susu',
    UserId: 2,
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    title: 'dagang',
    description: 'borax',
    UserId: 1,
    createdAt: new Date,
    updatedAt: new Date
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
