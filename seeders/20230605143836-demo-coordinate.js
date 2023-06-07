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
      lat: -4.681587787047458,
      lng: 104.83167284683928,
      mapId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.681056500565115,
      lng: 104.83060918076104,
      mapId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.680035313625973,
      lng: 104.83301244003653,
      mapId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.682612003336363,
      lng: 104.83119824349887,
      mapId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.680550440004055,
      lng: 104.83147436450392,
      mapId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.6811112342137235,
      lng: 104.83215248127057,
      mapId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat:-4.682133795014973,
      lng: 104.83109260106863,
      mapId: 8, //BARU SAMPE 8 NGASIH KOORDINATNYA
      createdAt: new Date(),
      updatedAt: new Date()
    },
    // {
    //   lat:-5.363535231162924,
    //   lng: 105.2412846377543,
    //   mapId: 2,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   lat: -5.363488531197259,
    //   lng: 105.24165466869484,
    //   mapId: 2,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   lat:-5.362455942154605,
    //   lng: 105.24069571527151,
    //   mapId: 3,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   lat:-5.363031909122496,
    //   lng: 105.24138366011866,
    //   mapId: 3,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
    // {
    //   lat:-5.36363381996758,
    //   lng: 105.24218626244036,
    //   mapId: 3,
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // }
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