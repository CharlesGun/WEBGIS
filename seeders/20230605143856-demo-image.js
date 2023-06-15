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
        nama: "Lab Core Sampler PG",
        mapId: 23,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_214053.png?updatedAt=1686840367395",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Jembatan Timbang",
        mapId: 26,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_214200.png?updatedAt=1686840366613",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Kantor Central PG",
        mapId: 28,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/IMG_6548.HEIC?updatedAt=1686840368202",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Pintu Masuk",
        mapId: 29,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/IMG_6549.HEIC?updatedAt=1686840369110",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Kantor TMA",
        mapId: 34,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_214419.png?updatedAt=1686840366334",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Bagasse Storage",
        mapId: 35,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_214451.png?updatedAt=1686840366892",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Lahan Pengumpulan Tebu",
        mapId: 36,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/IMG_6550.HEIC?updatedAt=1686840368265",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Lahan Pengumpulan Tebu2",
        mapId: 36,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/IMG_6554.HEIC?updatedAt=1686840369407",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Mill and Diffuser",
        mapId: 30,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_215258.png?updatedAt=1686841275277",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Mill Station (Dcs)",
        mapId: 37,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/IMG_6557.HEIC?updatedAt=1686841276973",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Workshop Station Besali",
        mapId: 38,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_215636.png?updatedAt=1686841276527",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Workshop Station Besali2",
        mapId: 38,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_215700.png?updatedAt=1686841274432",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Stasiun Pengolahan (Mill Station)",
        mapId: 39,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_215725.png?updatedAt=1686841275674",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Instrument Station 709",
        mapId: 40,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_215751.png?updatedAt=1686841275971",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Cooling Tower",
        mapId: 41,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_215824.png?updatedAt=1686841275671",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Gudang Gula",
        mapId: 31,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_215849.png?updatedAt=1686841274618",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Gudang Gula2",
        mapId: 31,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_215914.png?updatedAt=1686841275016",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Gudang Gula3",
        mapId: 31,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_215945.png?updatedAt=1686841275536",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Laboratorium Pabrik PG",
        mapId: 32,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_220009.png?updatedAt=1686841277627",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Bengkel dan Pool TMA PG",
        mapId: 33,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_220033.png?updatedAt=1686841277836",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "POS Gerbang Kantor Central",
        mapId: 9,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_220932.png?updatedAt=1686841914454",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Masjid Baiturrohman PTPN IV",
        mapId: 10,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_221019.png?updatedAt=1686841914545",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Masjid Baiturrohman PTPN IV2",
        mapId: 10,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_221042.png?updatedAt=1686841914128",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Gedung Tjoek Soepono",
        mapId: 11,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_221103.png?updatedAt=1686841914458",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Paud",
        mapId: 12,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_221122.png?updatedAt=1686841914563",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "TK",
        mapId: 13,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_221802.png?updatedAt=1686842448142",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "SD",
        mapId: 14,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_221822.png?updatedAt=1686842446830",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "SMP",
        mapId: 15,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_221723.png?updatedAt=1686842448268",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "SMP_2",
        mapId: 15,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_221844.png?updatedAt=1686842447946",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Klinik",
        mapId: 16,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_221908.png?updatedAt=1686842448586",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "MESS General Manager",
        mapId: 18,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_221936.png?updatedAt=1686842448500",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "MESS Tamu 1",
        mapId: 19,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_222000.png?updatedAt=1686842448581",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "MESS Tamu 2",
        mapId: 20,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_222000.png?updatedAt=1686842448581",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: "Taman Embung",
        mapId: 21,
        imagekitFileId: null,
        image: "https://ik.imagekit.io/lflw4bvw1e/Screenshot_2023-06-15_222021.png?updatedAt=1686842448363",
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