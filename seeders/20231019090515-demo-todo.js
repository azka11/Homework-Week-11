'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Todos', [
    {
      title: 'Title 1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Title 2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Title 3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Title 4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Title 5',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
