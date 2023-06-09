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
      }, {
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
        category: "Hunian",
        desc: "unknown",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Gudang Pupuk", //6
        category: "Gudang",
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
      },
      {
        name: "POS Gerbang Kantor Central", //10
        category: "POS",
        desc: "unknown",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
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
        desc: "TK di PTPN 7 Bunga Mayang adalah sebuah fasilitas pendidikan yang menyediakan lingkungan yang mendukung untuk anak-anak usia dini dalam proses belajar dan bermain. Terletak di dalam kompleks perkebunan Bunga Mayang, TK ini menawarkan tempat yang aman, ramah anak, dan penuh keceriaan. Lokasi TK ini mudah diakses oleh para orang tua atau wali murid. Terletak di dalam kompleks PTPN 7 Bunga Mayang, fasilitas ini dapat dicapai melalui jalan utama yang dilengkapi dengan tempat parkir yang memadai. Dikelilingi oleh lingkungan yang alami dan hijau, TK ini menyediakan suasana yang mendukung bagi pertumbuhan dan perkembangan anak-anak.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "SD", //15
        category: "Fasilitas Pendidikan",
        desc: "SD di PTPN 7 Bunga Mayang adalah sebuah lembaga pendidikan yang menyediakan akses pendidikan dasar yang berkualitas bagi anak-anak di dalam kompleks perkebunan tersebut. Terletak di lingkungan alam yang indah, sekolah ini menciptakan lingkungan belajar yang ramah dan mendukung perkembangan akademik dan sosial siswa. Selain ruang kelas, dan Staf pengajar yang berkualitas hadir untuk memberikan bimbingan dan pendidikan yang terbaik bagi siswa. Mereka memberikan pengajaran yang inovatif dan interaktif, mendorong partisipasi aktif dan diskusi dalam kelas. Guru-guru ini juga membantu siswa dalam mengembangkan keterampilan sosial, etika, dan nilai-nilai positif. SD di PTPN 7 Bunga Mayang juga dilengkapi dengan fasilitas pendukung lainnya. Terdapat perpustakaan yang lengkap dengan berbagai macam buku dan sumber daya pembelajaran. Terdapat juga ruang olahraga dan lapangan bermain yang memadai untuk kegiatan fisik dan olahraga, serta taman bermain yang menarik bagi siswa untuk bersosialisasi dan bermain dengan teman-teman mereka.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "SMP", //16
        category: "Fasilitas Pendidikan",
        desc: "SMP (Sekolah Menengah Pertama) di PTPN 7 Bunga Mayang adalah lembaga pendidikan yang memberikan akses pendidikan menengah yang berkualitas bagi remaja di dalam kompleks perkebunan tersebut. Terletak di lingkungan alam yang indah, sekolah ini menciptakan lingkungan belajar yang inspiratif dan mendukung perkembangan akademik dan sosial siswa.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Klinik", //17
        category: "Fasilitas Kesehatan",
        desc: "Klinik di PTPN 7 Bunga Mayang adalah fasilitas kesehatan yang menyediakan pelayanan medis dan perawatan kesehatan bagi masyarakat di dalam kompleks perkebunan tersebut. Klinik ini bertujuan untuk memberikan akses yang mudah dan nyaman untuk layanan kesehatan yang berkualitas. Bangunan klinik didesain dengan baik, menciptakan ruang tunggu yang nyaman dan bersih bagi pasien. Di dalam klinik terdapat ruang konsultasi yang dilengkapi dengan peralatan medis dan fasilitas yang diperlukan untuk pemeriksaan medis. Dokter dan tenaga medis yang berpengalaman hadir untuk memberikan pelayanan medis yang komprehensif dan peduli terhadap kebutuhan pasien.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lapangan Tenis", //18
        category: "Fasilitas Olahraga",
        desc: "Lapangan tenis di PTPN 7 Bunga Mayang adalah fasilitas olahraga yang menyediakan tempat bagi penggemar tenis untuk bermain dan melatih kemampuan mereka. Terletak di dalam kompleks perkebunan yang indah, lapangan tenis ini menawarkan lingkungan yang menyenangkan dan kondusif untuk bermain tenis.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "MESS General Manager", //19
        category: "Hunian",
        desc: "MESS (Managerial Employee Support System) General Manager di PTPN 7 Bunga Mayang adalah fasilitas yang menyediakan akomodasi dan layanan dukungan untuk General Manager atau manajer tingkat atas perusahaan di dalam kompleks perkebunan tersebut. Fasilitas ini bertujuan untuk memastikan tingkat kenyamanan dan efisiensi kerja bagi manajer yang memegang peran kunci dalam perusahaan. MESS General Manager terletak di area strategis di dalam kompleks PTPN 7 Bunga Mayang. Bangunannya didesain dengan baik dan dilengkapi dengan berbagai fasilitas modern. MESS ini menawarkan kamar-kamar yang nyaman dan dilengkapi dengan fasilitas seperti tempat tidur, meja kerja, area lounge, kamar mandi pribadi, serta akses internet yang stabil.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "MESS Tamu 1", //20
        category: "unknown",
        desc: "MESS Tamu 1 di PTPN 7 Bunga Mayang adalah fasilitas akomodasi yang disediakan khusus untuk tamu atau pengunjung perusahaan yang mengunjungi kompleks perkebunan tersebut. Fasilitas ini bertujuan untuk memberikan kenyamanan dan kemudahan bagi tamu yang datang dari luar daerah atau memiliki kebutuhan khusus selama kunjungan mereka. Lokasi MESS Tamu 1 mudah diakses oleh tamu yang berkunjung ke kompleks perkebunan. Terletak di dekat pusat operasional utama atau area penerimaan tamu, kedua MESS ini memberikan akses yang nyaman dan dekat dengan area kegiatan utama di dalam kompleks perkebunan.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "MESS Tamu 2", //21
        category: "unknown",
        desc: "MESS Tamu 2 di PTPN 7 Bunga Mayang adalah fasilitas akomodasi yang disediakan khusus untuk tamu atau pengunjung perusahaan yang mengunjungi kompleks perkebunan tersebut. Fasilitas ini bertujuan untuk memberikan kenyamanan dan kemudahan bagi tamu yang datang dari luar daerah atau memiliki kebutuhan khusus selama kunjungan mereka. Lokasi MESS Tamu 2 mudah diakses oleh tamu yang berkunjung ke kompleks perkebunan. Terletak di dekat pusat operasional utama atau area penerimaan tamu, kedua MESS ini memberikan akses yang nyaman dan dekat dengan area kegiatan utama di dalam kompleks perkebunan.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Taman Embung", //22
        category: "Rekreasi",
        desc: "Taman Embung di PTPN 7 Bunga Mayang adalah fasilitas rekreasi yang menawarkan pengalaman alam yang indah bagi pengunjung kompleks perkebunan. Terletak di lingkungan yang hijau dan asri, taman embung ini memberikan tempat yang ideal untuk bersantai, menikmati keindahan alam, dan menghabiskan waktu bersama keluarga atau teman-teman. Taman Embung ini dirancang dengan baik dan memiliki berbagai fasilitas yang menarik. Terdapat jalur pejalan kaki yang melingkari embung, area duduk yang nyaman, dan area bermain untuk anak-anak. Pengunjung dapat menjelajahi taman, menikmati pemandangan embung yang tenang, atau hanya duduk santai sambil menikmati udara segar.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "30 MESS Karyawan", //23
        category: "Hunian",
        desc: "30 MESS Karyawan di di PTPN 7 Bunga Mayang adalah fasilitas akomodasi yang disediakan khusus untuk para karyawan di dalam kompleks perkebunan tersebut. Fasilitas ini bertujuan untuk memberikan tempat tinggal yang nyaman dan layanan dukungan bagi para karyawan yang bekerja di perkebunan. MESS Karyawan terdiri dari 30 unit akomodasi yang dirancang dengan baik dan dilengkapi dengan fasilitas yang memadai. Setiap unit MESS dilengkapi dengan tempat tidur, lemari, meja kerja, dan kamar mandi pribadi. Fasilitas ini menawarkan kenyamanan dan privasi kepada para karyawan selama mereka tinggal di perkebunan. Lokasi MESS Karyawandi mudah diakses oleh para karyawan. Terletak di area yang strategis di dalam kompleks PTPN 7 Bunga Mayang, MESS ini memberikan akses yang nyaman dan dekat dengan tempat kerja serta fasilitas lainnya di dalam perkebunan.",
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