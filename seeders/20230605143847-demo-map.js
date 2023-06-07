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
      name: "Wilayah Rayon 1", //1
      category: "Batas Wilayah",
      desc: "unknown",
      type: "Polygon",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: "Kantor Rayon I PTPN 7", //2
      category: "Gedung",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "P3GI Kebun Percobaan Bungamayang", //3
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Wisma Serbaguna", //4
      category: "Gedung",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Mess Karyawan (Perum T50 Rayon I)", //5
      category: "Gedung",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Gudang Pupuk", //6
      category: "Gedung",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Bengkel", //7
      category: "Gedung",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Mushola", //8
      category: "Tempat Ibadah",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Wilayah Kantor Central", //9
      category: "Batas Wilayah",
      desc: "unknown",
      type: "Polygon",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "POS Gerbang Kantor Central", //10
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ,
    {
      name: "Masjid Baiturrohman PTPN IV", //11
      category: "Tempat Ibadah",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Gedung Tjoek Soepono PG Bungamayang", //12
      category: "Gedung",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Paud", //13
      category: "Fasilitas Pendidikan",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "TK", //14
      category: "Fasilitas Pendidikan",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "SD", //15
      category: "Fasilitas Pendidikan",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "SMP", //16
      category: "Fasilitas Pendidikan",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Klinik", //17
      category: "Fasilitas Kesehatan",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Lapangan Tenis", //18
      category: "Fasilitas Olahraga",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "MESS General Manager", //19
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "MESS Tamu 1", //20
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "MESS Tamu 2", //21
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Taman Embung", //22
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "30 MESS Karyawan", //23
      category: "unknown",
      desc: "unknown",
      type: "Polygon",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Laboratorium Core Sampler PG Bungamayang", //24
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "POM BBM Bunga Mayang", //25
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Mini Market", //26
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Jembatan Timbang", //27
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pos Satpam & ATM BNI", //28
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Kantor Central PG", //29
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Pintu Masuk Area dan Absensi Karyawan", //30
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Station PG", //31
      category: "unknown",
      desc: "unknown",
      type: "Polygon",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Gudang", //32
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Laboratorium Pabrik PG Bunga Mayang", //33
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Bengkel dan Pool TMA", //34
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Kantor TMA PG Bunga Mayang", //35
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Bagasse Storage Pabrik Gula Bunga Mayang atau Ampas Pembuangan", //36
      category: "unknown",
      desc: "unknown",
      type: "Point",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "Lahan Pengumpulan Tebu", //37
      category: "unknown",
      desc: "unknown",
      type: "Point",
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