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
    await queryInterface.bulkInsert('images', [{
        nama: "kotabumi kuh",
        mapId: 1,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/kotabumi2_V56FArHhC.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "kotabumi bettah",
        mapId: 1,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot__195__zF-rM7adk.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "rusa anjay",
        mapId: 2,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/pexels-vimeo-857103-1280x720-30fps_tFYtirySR.mp4?updatedAt=1685982266157",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "sorry malah dahyun",
        mapId: 3,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot__195__zF-rM7adk.png?updatedAt=1685983387472",
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
    await queryInterface.bulkDelete('images', null, {});
  }
};