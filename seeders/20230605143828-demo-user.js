'use strict';
const bcrypt = require('bcrypt');
const {PASSWORD_ADMIN} = process.env;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('users', [
      {
      username: "charles",
      password: await bcrypt.hash(PASSWORD_ADMIN, 10),
      email: "charlesgunawan32@gmail.com",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {})
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};