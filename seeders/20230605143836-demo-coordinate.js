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
    await queryInterface.bulkInsert('coordinates', [
      {
      lat: -4.824365887465886,
      lng: 104.89600905487768,
      mapId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -5.363488531197259,
      lng: 105.24165466869484,
      mapId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -5.363690897689316,
      lng: 105.2417119974321,
      mapId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -5.363981475099008,
      lng: 105.24160255166095,
      mapId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -5.3639659084555635,
      lng: 105.24097714725444,
      mapId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat:-5.363753164288756,
      lng: 105.24076867911893,
      mapId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat:-5.363597497778241,
      lng: 105.24097714725444,
      mapId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat:-5.363535231162924,
      lng: 105.2412846377543,
      mapId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat:-5.362455942154605,
      lng: 105.24069571527151,
      mapId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat:-5.363031909122496,
      lng: 105.24138366011866,
      mapId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat:-5.36363381996758,
      lng: 105.24218626244036,
      mapId: 3,
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
    await queryInterface.bulkDelete('coordinates', null, {});
  }
};