'use strict';

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
    await queryInterface.bulkInsert('maps', [{
      name: "Kotabumi",
      category: "Kota",
      description: "Di lampung nih boss.",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Kandang rusa",
      category: "Taman",
      description: "Di taman unila, sering dikasih makan sembarangan.",
      type: "Polygon",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Jalan lurus ke arah kebenaran",
      category: "Jalan",
      description: "Di lampung adanya jalan berlubang.",
      type: "LineString",
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
    await queryInterface.bulkDelete('maps', null, {});
  }
};