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
   return queryInterface.bulkInsert('Users', [{
    username: 'alvin',
    password: 'alvin',
    role: 'admin',
    createdAt: new Date,
    updatedAt: new Date
  },{
    username: 'siapa',
    password: 'siapa',
    role: 'biasa',
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
