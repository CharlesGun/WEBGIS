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
      lat: -4.697538169790907,
      lng: 104.83614174857003,
      mapId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      lat: -4.696398313804613,
      lng: 104.81925860593938,
      mapId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      lat: -4.689776256478306,
      lng: 104.80885641160887,
      mapId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      lat: -4.671646696199155,
      lng: 104.8287349518029,
      mapId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      lat: -4.629099650601916,
      lng: 104.84693774101088,
      mapId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      lat: -4.598354189889521,
      lng: 104.87507249440729,
      mapId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      lat: -4.590487325261077,
      lng: 104.89796775895687,
      mapId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      lat: -4.602404422961722,
      lng: 104.9134396442016,
      mapId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      lat: -4.622421582559464,
      lng: 104.91648713943121,
      mapId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      lat: -4.643372789824502,
      lng: 104.90898561889203,
      mapId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      lat: -4.656301477107101,
      lng: 104.87624460917777,
      mapId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      lat: -4.659338905611872,
      lng: 104.86030387690569,
      mapId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      lat: -4.675148897147292,
      lng: 104.84342545555053,
      mapId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
      lat: -4.697538169790907,
      lng: 104.83614174857003,
      mapId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
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
      mapId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.593368,
      lng: 104.875195,
      mapId: 9,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.591195,
      lng: 104.873974,
      mapId: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.5916682586542965,
      lng: 104.87387155386557,
      mapId: 11,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.593442114642538,
      lng: 104.87379997054991,
      mapId: 12,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.5930038385881,
      lng: 104.8740901453161,
      mapId: 13,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.591990620531944,
      lng: 104.87455366641129,
      mapId: 14,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.592420963314999,
      lng: 104.87456464256461,
      mapId: 15,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.594503381093948,
      lng: 104.87194865921903,
      mapId: 16,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.590846618277433,
      lng: 104.87257979493575,
      mapId: 17,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.5901043012888545,
      lng: 104.8727549671523,
      mapId: 18,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.590365216791212,
      lng: 104.87232368469289,
      mapId: 19,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.590872147129439,
      lng: 104.8710431334721,
      mapId: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.590303218092043,
      lng: 104.87197610650439,
      mapId: 21,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.593507760044691,
      lng: 104.87186816738904,
      mapId: 22,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.589354477930334,
      lng: 104.87307537319575,
      mapId: 23,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.58854500332904,
      lng: 104.87302034947172,
      mapId: 24,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.588801670053586,
      lng: 104.8728567347365,
      mapId: 25,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: 4.588165231708514,
      lng: 104.87348542310131,
      mapId: 26,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.588964700923753,
      lng: 104.87357672159165,
      mapId: 27,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.588996115847869,
      lng: 104.8738214731423,
      mapId: 28,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.588631,
      lng: 104.873917,
      mapId: 29,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.588675366162257,
      lng: 104.8743536500561,
      mapId: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.588089019197086,
      lng: 104.87660143571232,
      mapId: 31,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.5881031821724525,
      lng: 104.8756494658602,
      mapId: 32,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.587290226928853,
      lng: 104.87606719587576,
      mapId: 33,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.587111773215485,
      lng: 104.87661848587969,
      mapId: 34,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.589564799739687,
      lng: 104.87487083964741,
      mapId: 35,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      lat: -4.587868,
      lng: 104.874369,
      mapId: 36,
      createdAt: new Date(),
      updatedAt: new Date()
    }
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