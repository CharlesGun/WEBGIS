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
        desc: "Pusat Penelitian Perkebunan Gula Indonesia disingkat P3GI Kebun Percobaan Bungamayang, merupakan lembaga penelitian pergulaan yang berada di PTPN 7 Bungamayang. Lembaga penelitian yang berpusat di Pasuruan, Jawa Timur, ini bertugas melaksanakan penelitian, menghasilkan mengkaji teknologi dan produk pergulaan dan pemanis bagi kemajuan masyarakat gula, khususnya petani tebu dan pabrik gula, dan memberikan bantuan teknis kepada klien. Lembaga penelitian ini termasuk salah satu lembaga penelitian pertanian/perkebunan tertua di Indonesia dan pernah berperan besar dalam perkembangan pergulaan dunia di paruh awal abad ke-20. Ia pertama kali berdiri pada tanggal 9 Juli 1887 sebagai Proefstation Oostjava (POJ) dan merupakan lembaga penelitian tebu/gula ketiga yang didirikan di Jawa, setelah yang pertama di Semarang dan kedua di Kagok, Majalengka, Jawa Barat. Pendiriannya kala itu membawa misi penelitian pemuliaan tebu untuk ketahanan terhadap penyakit sereh dan penanggulangan pengaruh perkembangan industri bit gula di Eropa.",
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
        name: "POS Gerbang Kantor Central", //9
        category: "POS",
        desc: "POS Gerbang Kantor Central merupakan tempat dimana karyawan atau pun tamu melakukan pengecekan terlebih dahulu sebelum masuk ke kantor central. Pengecekan akan dilakukan oleh petugas keamanan dari PTPN 7 Bunga Mayang.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Masjid Baiturrohman PTPN IV", //10
        category: "Tempat Ibadah",
        desc: "Masjid Baiturrohman PTPN IV merupakan masjid utama di PTPN IV Bungamayang. Masjid ini memiliki halaman yang luas, rapih, bersih dan terurus. Para karyawan yang beragama islam beribadah di masjid ini. Masjid ini terletak di daerah kantor central.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Gedung Tjoek Soepono PG Bungamayang", //11
        category: "Gedung",
        desc: "Gedung Tjoek Soepono PG Bunga Mayang merupakan salah satu gedung pertemuan atau gedung serba guna yang terletak di daerah kantor central PTPN 7 Bungamayang.  Gedung ini terhias dengan bagus dan terjaga dengan baik serta. memiliki bentuk yang unik.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Paud", //12
        category: "Fasilitas Pendidikan",
        desc: "Paud di PTPN 7 Bunga Mayang adalah sebuah fasilitas pendidikan yang menyediakan lingkungan yang mendukung untuk anak-anak usia dini dalam proses belajar dan bermain. Paud ini menawarkan tempat yang aman, ramah, dan penuh keceriaan. Lokasi Paud ini terletak di dalam kompleks PTPN 7 Bunga Mayang dan mudah diakses oleh para orang tua atau wali murid.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "TK", //13
        category: "Fasilitas Pendidikan",
        desc: "TK di PTPN 7 Bunga Mayang adalah sebuah fasilitas pendidikan yang menyediakan lingkungan yang mendukung untuk anak-anak usia dini dalam proses belajar dan bermain. Terletak di dalam kompleks perkebunan Bunga Mayang, TK ini menawarkan tempat yang aman, ramah anak, dan penuh keceriaan. Lokasi TK ini mudah diakses oleh para orang tua atau wali murid. Terletak di dalam kompleks PTPN 7 Bunga Mayang, fasilitas ini dapat dicapai melalui jalan utama yang dilengkapi dengan tempat parkir yang memadai. Dikelilingi oleh lingkungan yang alami dan hijau, TK ini menyediakan suasana yang mendukung bagi pertumbuhan dan perkembangan anak-anak.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "SD", //14
        category: "Fasilitas Pendidikan",
        desc: "SD di PTPN 7 Bunga Mayang adalah sebuah lembaga pendidikan yang menyediakan akses pendidikan dasar yang berkualitas bagi anak-anak di dalam kompleks perkebunan tersebut. Terletak di lingkungan alam yang indah, sekolah ini menciptakan lingkungan belajar yang ramah dan mendukung perkembangan akademik dan sosial siswa. Selain ruang kelas, dan Staf pengajar yang berkualitas hadir untuk memberikan bimbingan dan pendidikan yang terbaik bagi siswa. Mereka memberikan pengajaran yang inovatif dan interaktif, mendorong partisipasi aktif dan diskusi dalam kelas. Guru-guru ini juga membantu siswa dalam mengembangkan keterampilan sosial, etika, dan nilai-nilai positif. SD di PTPN 7 Bunga Mayang juga dilengkapi dengan fasilitas pendukung lainnya. Terdapat perpustakaan yang lengkap dengan berbagai macam buku dan sumber daya pembelajaran. Terdapat juga ruang olahraga dan lapangan bermain yang memadai untuk kegiatan fisik dan olahraga, serta taman bermain yang menarik bagi siswa untuk bersosialisasi dan bermain dengan teman-teman mereka.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "SMP", //15
        category: "Fasilitas Pendidikan",
        desc: "SMP (Sekolah Menengah Pertama) di PTPN 7 Bunga Mayang adalah lembaga pendidikan yang memberikan akses pendidikan menengah yang berkualitas bagi remaja di dalam kompleks perkebunan tersebut. Terletak di lingkungan alam yang indah, sekolah ini menciptakan lingkungan belajar yang inspiratif dan mendukung perkembangan akademik dan sosial siswa.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Klinik", //16
        category: "Fasilitas Kesehatan",
        desc: "Klinik di PTPN 7 Bunga Mayang adalah fasilitas kesehatan yang menyediakan pelayanan medis dan perawatan kesehatan bagi masyarakat di dalam kompleks perkebunan tersebut. Klinik ini bertujuan untuk memberikan akses yang mudah dan nyaman untuk layanan kesehatan yang berkualitas. Bangunan klinik didesain dengan baik, menciptakan ruang tunggu yang nyaman dan bersih bagi pasien. Di dalam klinik terdapat ruang konsultasi yang dilengkapi dengan peralatan medis dan fasilitas yang diperlukan untuk pemeriksaan medis. Dokter dan tenaga medis yang berpengalaman hadir untuk memberikan pelayanan medis yang komprehensif dan peduli terhadap kebutuhan pasien.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lapangan Tenis", //17
        category: "Fasilitas Olahraga",
        desc: "Lapangan tenis di PTPN 7 Bunga Mayang adalah fasilitas olahraga yang menyediakan tempat bagi penggemar tenis untuk bermain dan melatih kemampuan mereka. Terletak di dalam kompleks perkebunan yang indah, lapangan tenis ini menawarkan lingkungan yang menyenangkan dan kondusif untuk bermain tenis.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "MESS General Manager", //18
        category: "Hunian",
        desc: "MESS (Managerial Employee Support System) General Manager di PTPN 7 Bunga Mayang adalah fasilitas yang menyediakan akomodasi dan layanan dukungan untuk General Manager atau manajer tingkat atas perusahaan di dalam kompleks perkebunan tersebut. Fasilitas ini bertujuan untuk memastikan tingkat kenyamanan dan efisiensi kerja bagi manajer yang memegang peran kunci dalam perusahaan. MESS General Manager terletak di area strategis di dalam kompleks PTPN 7 Bunga Mayang. Bangunannya didesain dengan baik dan dilengkapi dengan berbagai fasilitas modern. MESS ini menawarkan kamar-kamar yang nyaman dan dilengkapi dengan fasilitas seperti tempat tidur, meja kerja, area lounge, kamar mandi pribadi, serta akses internet yang stabil.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "MESS Tamu 1", //19
        category: "Hunian",
        desc: "MESS Tamu 1 di PTPN 7 Bunga Mayang adalah fasilitas akomodasi yang disediakan khusus untuk tamu atau pengunjung perusahaan yang mengunjungi kompleks perkebunan tersebut. Fasilitas ini bertujuan untuk memberikan kenyamanan dan kemudahan bagi tamu yang datang dari luar daerah atau memiliki kebutuhan khusus selama kunjungan mereka. Lokasi MESS Tamu 1 mudah diakses oleh tamu yang berkunjung ke kompleks perkebunan. Terletak di dekat pusat operasional utama atau area penerimaan tamu, kedua MESS ini memberikan akses yang nyaman dan dekat dengan area kegiatan utama di dalam kompleks perkebunan.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "MESS Tamu 2", //20
        category: "Hunian",
        desc: "MESS Tamu 2 di PTPN 7 Bunga Mayang adalah fasilitas akomodasi yang disediakan khusus untuk tamu atau pengunjung perusahaan yang mengunjungi kompleks perkebunan tersebut. Fasilitas ini bertujuan untuk memberikan kenyamanan dan kemudahan bagi tamu yang datang dari luar daerah atau memiliki kebutuhan khusus selama kunjungan mereka. Lokasi MESS Tamu 2 mudah diakses oleh tamu yang berkunjung ke kompleks perkebunan. Terletak di dekat pusat operasional utama atau area penerimaan tamu, kedua MESS ini memberikan akses yang nyaman dan dekat dengan area kegiatan utama di dalam kompleks perkebunan.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Taman Embung", //21
        category: "Rekreasi",
        desc: "Taman Embung di PTPN 7 Bunga Mayang adalah fasilitas rekreasi yang menawarkan pengalaman alam yang indah bagi pengunjung kompleks perkebunan. Terletak di lingkungan yang hijau dan asri, taman embung ini memberikan tempat yang ideal untuk bersantai, menikmati keindahan alam, dan menghabiskan waktu bersama keluarga atau teman-teman. Taman Embung ini dirancang dengan baik dan memiliki berbagai fasilitas yang menarik. Terdapat jalur pejalan kaki yang melingkari embung, area duduk yang nyaman, dan area bermain untuk anak-anak. Pengunjung dapat menjelajahi taman, menikmati pemandangan embung yang tenang, atau hanya duduk santai sambil menikmati udara segar.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "30 MESS Karyawan", //22
        category: "Hunian",
        desc: "30 MESS Karyawan di di PTPN 7 Bunga Mayang adalah fasilitas akomodasi yang disediakan khusus untuk para karyawan di dalam kompleks perkebunan tersebut. Fasilitas ini bertujuan untuk memberikan tempat tinggal yang nyaman dan layanan dukungan bagi para karyawan yang bekerja di perkebunan. MESS Karyawan terdiri dari 30 unit akomodasi yang dirancang dengan baik dan dilengkapi dengan fasilitas yang memadai. Setiap unit MESS dilengkapi dengan tempat tidur, lemari, meja kerja, dan kamar mandi pribadi. Fasilitas ini menawarkan kenyamanan dan privasi kepada para karyawan selama mereka tinggal di perkebunan. Lokasi MESS Karyawandi mudah diakses oleh para karyawan. Terletak di area yang strategis di dalam kompleks PTPN 7 Bunga Mayang, MESS ini memberikan akses yang nyaman dan dekat dengan tempat kerja serta fasilitas lainnya di dalam perkebunan.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Laboratorium Core Sampler PG Bungamayang", //23
        category: "Laboratorium",
        desc: "Laboratorium Core Sampler di PG Bungamayang PT Perkebunan Nusantara VII adalah fasilitas yang digunakan untuk pengambilan sampel inti (core) tebu. Sampel inti ini digunakan untuk analisis kualitas tebu yang meliputi kandungan gula, kadar air, serat, dan komponen-komponen lainnya yang relevan. Fungsi dari Laboratorium Core Sampler adalah untuk memastikan kualitas tebu yang masuk ke pabrik gula. Dengan mengambil sampel inti dari tebu yang masuk, laboratorium dapat melakukan pengujian dan analisis untuk memonitor kualitas tebu tersebut. Hasil analisis ini digunakan untuk mengatur parameter pengolahan tebu, seperti pengaturan proses ekstraksi dan penggilingan, guna memastikan produksi gula berkualitas tinggi. Laboratorium Core Sampler dilengkapi dengan peralatan khusus, seperti alat pengambil sampel inti tebu, alat penggiling tebu, alat pengukur kadar air, dan peralatan analisis laboratorium lainnya. Tenaga ahli atau petugas laboratorium akan bertanggung jawab dalam pengambilan sampel, pengujian, dan pelaporan hasil analisis kepada pihak terkait di pabrik gula.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "POM BBM Bunga Mayang", //24
        category: "Bahan Bakar",
        desc: "Pom BBM (Pompa Bahan Bakar Minyak) di PG Bungamayang PT Perkebunan Nusantara VII adalah fasilitas yang digunakan untuk menyediakan bahan bakar minyak (BBM) yang diperlukan untuk berbagai keperluan di pabrik gula. Pom BBM ini berfungsi untuk memasok bahan bakar bagi mesin-mesin dan kendaraan yang digunakan dalam operasional pabrik. Pom BBM di PG Bungamayang dilengkapi dengan tangki penyimpanan bahan bakar yang cukup besar dan dilengkapi dengan sistem pompa yang memungkinkan distribusi BBM ke berbagai titik penggunaan di pabrik. Fungsi utama Pom BBM di PG Bungamayang adalah untuk memastikan ketersediaan bahan bakar yang cukup untuk mendukung operasional pabrik. Bahan bakar ini digunakan untuk mesin-mesin penggerak, seperti mesin penggilingan tebu, mesin pengering, dan mesin-mesin lainnya yang dibutuhkan dalam proses produksi gula.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Indomaret Bunga Mayang", //25
        category: "Mini Market",
        desc: "Indomaret merupakan salah satu jaringan minimarket terbesar di Indonesia yang menyediakan berbagai macam kebutuhan sehari-hari seperti makanan, minuman, produk kebersihan, peralatan rumah tangga, dan masih banyak lagi. Indomaret Bunga Mayang menyediakan layanan yang praktis dan nyaman bagi masyarakat sekitar untuk memenuhi kebutuhan sehari-hari. Dengan adanya Indomaret di daerah Bunga Mayang, masyarakat dapat dengan mudah membeli berbagai produk dengan harga yang terjangkau dan tersedia dalam berbagai pilihan.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Jembatan Timbang", //26
        category: "Fasilitas Penimbangan",
        desc: "Jembatan Timbang PG Bungamayang merupakan fasilitas yang digunakan untuk menimbang kendaraan yang bertujuan untuk melakukan pengukuran dan pengendalian berat kendaraan yang membawa muatan seperti tebu atau produk-produk perkebunan lainnya. Fungsi utama jembatan timbang adalah untuk memastikan bahwa kendaraan yang masuk atau keluar dari perkebunan memenuhi persyaratan berat yang ditetapkan. Dengan menggunakan jembatan timbang, petugas dapat mengukur berat kendaraan secara akurat dan memastikan bahwa muatan yang diangkut tidak melebihi kapasitas yang ditentukan. Jembatan timbang dilengkapi dengan alat pengukur yang akurat dan terkalibrasi. Ketika kendaraan melewati jembatan timbang, berat kendaraan akan terbaca dan direkam. Data berat ini dapat digunakan untuk keperluan administrasi, penagihan, dan pemantauan kinerja pengangkutan di perkebunan.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pos Satpam & ATM BNI", //27
        category: "POS",
        desc: "Pos satpam merupakan pos keamanan yang bertugas untuk menjaga keamanan dan keselamatan di area Bunga Mayang. Satpam di pos tersebut bertanggung jawab dalam melakukan patroli, memantau akses masuk dan keluar di area tersebut. Mereka juga siap memberikan bantuan dalam hal keadaan darurat dan menangani situasi keamanan yang mungkin terjadi. Pos satpam penting untuk menjaga keamanan seluruh area perkebunan, baik bagi karyawan maupun pengunjung. Dan juga di dekat Pos satpam terdapat ATM BNI yang menyediakan layanan perbankan bagi karyawan maupun masyarakat sekitar. ATM ini memungkinkan pengguna untuk melakukan berbagai transaksi keuangan seperti penarikan tunai, transfer dana, cek saldo, dan pembayaran tagihan. ATM BNI memberikan akses mudah dan praktis bagi pengguna untuk mengakses layanan perbankan tanpa harus pergi ke kantor cabang BNI yang mungkin berjarak lebih jauh.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kantor Central PG", //28
        category: "Kantor",
        desc: "Kantor Central PTPN VII Distrik Bungamayang merupakan kantor pusat atau markas besar dari PTPN VII yang terletak di Distrik Bungamayang. PTPN VII adalah sebuah perusahaan negara yang bergerak di bidang perkebunan. Kantor Central PTPN VII Distrik Bungamayang berfungsi sebagai pusat pengelolaan dan pengendalian operasional perkebunan di wilayah tersebut. Di kantor pusat ini, dilakukan berbagai kegiatan manajerial, administrasi, perencanaan, dan pengawasan terkait operasional perkebunan. Selain itu, kantor ini juga menjadi tempat berkumpulnya berbagai departemen dan divisi yang terkait dengan kegiatan perkebunan di wilayah Distrik Bungamayang.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Pintu Masuk Area dan Absensi Karyawan", //29
        category: "unknown",
        desc: "unknown",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mill and Diffuser Station PG Bungamayang PT Perkebunan Nusantara VII", //30
        category: "Station",
        desc: "Mill and Diffuser Station PG Bungamayang adalah fasilitas yang merupakan bagian dari PT Perkebunan Nusantara VII. Fasilitas ini merupakan pabrik pengolahan tebu (gula) yang terletak di PG Bungamayang. Tugas utama Mill and Diffuser Station adalah mengolah tebu menjadi gula melalui proses pemrosesan yang melibatkan beberapa tahap. Di Mill and Diffuser Station, tebu diproses dengan menggunakan mesin penggilingan (mill) atau mesin penyosoh (diffuser) untuk memisahkan jus tebu dari serat tebu. Setelah itu, jus tebu tersebut akan melalui beberapa tahap pemurnian, pemanasan, pengendapan, dan pengeringan untuk menghasilkan kristal gula yang siap dikemas. Mill and Diffuser Station PG Bungamayang dilengkapi dengan peralatan dan mesin modern untuk memastikan pengolahan tebu menjadi gula dilakukan dengan efisien dan sesuai standar kualitas. Proses pengolahan dilakukan dengan mengutamakan kebersihan, keamanan, dan kualitas produk gula yang dihasilkan. Fasilitas Mill and Diffuser Station PG Bungamayang merupakan salah satu bagian penting dalam rantai produksi gula di PT Perkebunan Nusantara VII. Dengan adanya fasilitas ini, PG Bungamayang dapat menghasilkan gula berkualitas tinggi yang siap dikirim dan didistribusikan ke pasar.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Gudang Gula", //31
        category: "Gudang",
        desc: "Gudang Gula PG Bungamayang PT Perkebunan Nusantara VII adalah fasilitas penyimpanan dan distribusi gula yang dihasilkan di pabrik gula tersebut. Gudang ini berfungsi untuk menyimpan stok gula yang siap untuk didistribusikan ke berbagai tujuan, baik untuk pasar lokal maupun ekspor Sebagai gudang gula, fasilitas ini memiliki peran penting dalam menjaga ketersediaan gula yang memadai untuk memenuhi permintaan pasar. Gula yang dihasilkan dari pabrik akan dikirim ke gudang ini untuk penyimpanan sementara sebelum didistribusikan ke pelanggan atau diserahkan kepada pihak yang bertanggung jawab atas pengiriman Di Gudang Gula PG Bungamayang, dilakukan pengaturan stok, pemantauan kualitas gula yang disimpan, serta pengaturan pengiriman dan distribusi gula ke berbagai tujuan. Gudang ini juga dilengkapi dengan sistem pengendalian suhu dan kelembaban yang sesuai agar kualitas gula tetap terjaga selama penyimpanan.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Laboratorium Pabrik PG Bunga Mayang", //32
        category: "Laboratorium",
        desc: "Laboratorium Pabrik PG Bungamayang PT Perkebunan Nusantara VII adalah fasilitas yang berfungsi untuk melakukan pengujian dan analisis terhadap berbagai parameter dan kualitas produk yang dihasilkan di pabrik gula (PG). Laboratorium ini bertanggung jawab dalam memastikan bahwa produk gula yang dihasilkan memenuhi standar kualitas yang ditetapkan Di Laboratorium Pabrik PG Bungamayang, para ahli laboratorium akan melakukan pengujian dan analisis terhadap berbagai parameter seperti kadar gula, kelembaban, kandungan abu, pH, dan parameter lainnya yang relevan dengan kualitas gula. Pengujian ini bertujuan untuk memastikan bahwa gula yang dihasilkan memiliki kualitas yang sesuai dengan standar yang ditetapkan, baik untuk konsumsi maupun keperluan industri Selain itu, laboratorium ini juga dapat melakukan pemantauan dan pengujian terhadap proses produksi di pabrik gula, seperti pengujian kualitas tebu sebelum diproses, pengujian limbah cair, dan pengujian kualitas air yang digunakan dalam proses produksi Laboratorium Pabrik PG Bungamayang PT Perkebunan Nusantara VII merupakan bagian penting dalam menjaga kualitas dan keberlanjutan produksi gula di pabrik. Hasil pengujian dan analisis yang dilakukan di laboratorium ini akan digunakan sebagai acuan untuk mengambil keputusan terkait proses produksi dan kualitas produk yang dihasilkan.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bengkel dan Pool TMA", //33
        category: "unknown",
        desc: "Bengkel dan Pool TMA (Traktor, Mesin, dan Alat Berat) PG Bungamayang PT Perkebunan Nusantara VII adalah fasilitas yang menyediakan layanan perawatan, perbaikan, dan pengelolaan traktor, mesin, dan alat berat yang digunakan dalam kegiatan pertanian di perkebunan PT Perkebunan Nusantara VII. Fasilitas ini bertujuan untuk menjaga ketersediaan dan kinerja optimal dari traktor, mesin, dan alat berat yang digunakan dalam operasional perkebunan.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kantor TMA PG Bunga Mayang", //34
        category: "Kantor",
        desc: "unknown",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Bagasse Storage Pabrik Gula Bunga Mayang atau Ampas Pembuangan", //35
        category: "unknown",
        desc: "unknown",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Lahan Pengumpulan Tebu", //36
        category: "unknown",
        desc: "unknown",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mill Station (Dcs) PTPN7 Bungamayang", //37
        category: "Station",
        desc: "Mill Station (Dcs) PTPN7 Bungamayang adalah salah satu bagian penting dalam pabrik pengolahan tebu (gula) milik PT Perkebunan Nusantara VII. Fasilitas ini bertanggung jawab atas pengaturan dan pengendalian proses produksi di pabrik pengolahan tebu. Mill Station (Dcs) menggunakan sistem Distributed Control System (DCS) yang merupakan teknologi otomatisasi industri untuk mengontrol dan memonitor proses produksi secara efisien. DCS memungkinkan pengendalian yang terintegrasi dari berbagai unit dan mesin di pabrik, termasuk mesin penggilingan (mill), conveyor, pengering, dan peralatan lainnya yang terlibat dalam pengolahan tebu menjadi gula. Dengan adanya Mill Station (Dcs) PTPN7 Bungamayang, proses produksi gula dapat diatur secara otomatis dan efisien. DCS memungkinkan pengawasan yang terpusat, pemantauan suhu, tekanan, kelembaban, dan parameter lainnya dalam pabrik untuk menjaga kualitas dan efisiensi produksi. Sebagai bagian dari pabrik pengolahan tebu, Mill Station (Dcs) PTPN7 Bungamayang memiliki peran krusial dalam mengoptimalkan produksi gula dengan memastikan pengaturan yang tepat dan pengendalian yang efisien. Hal ini membantu memastikan kualitas gula yang dihasilkan sesuai dengan standar dan memenuhi kebutuhan pasar.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Workshop Station Besali", //38
        category: "Station",
        desc: "Workshop Station Besali Bunga Mayang adalah fasilitas workshop yang terletak di PT Perkebunan Nusantara VII Bungamayang. Fasilitas ini digunakan untuk melakukan berbagai kegiatan perbaikan, pemeliharaan, dan penggantian komponen mesin serta peralatan yang digunakan dalam operasional perkebunan. Workshop Station Besali Bunga Mayang dilengkapi dengan peralatan dan alat yang diperlukan untuk melakukan berbagai pekerjaan teknis, seperti perbaikan mesin, pengelasan, perawatan peralatan, dan perakitan komponen. Tenaga kerja terampil dan mekanik yang terlatih bekerja di workshop ini untuk menangani perbaikan dan pemeliharaan mesin dan peralatan perkebunan. Di Workshop Station Besali Bunga Mayang, berbagai kegiatan pemeliharaan dan perbaikan dilakukan untuk memastikan bahwa mesin dan peralatan perkebunan berfungsi dengan baik. Hal ini penting untuk menjaga kelancaran operasional perkebunan, meningkatkan efisiensi, dan meminimalkan waktu henti produksi akibat kerusakan atau gangguan teknis. Workshop Station Besali Bunga Mayang juga berperan dalam menjaga keandalan dan kualitas peralatan perkebunan. Melalui kegiatan pemeliharaan rutin dan perbaikan yang dilakukan di workshop, peralatan dapat tetap dalam kondisi optimal dan memiliki umur pakai yang lebih panjang.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Stasiun Pengolahan (Mill Station) PG Bungamayang", //39
        category: "Station",
        desc: "Stasiun Pengolahan (Mill Station) PG Bungamayang merupakan bagian penting dari PT Perkebunan Nusantara VII Bungamayang yang bertanggung jawab untuk mengolah tebu menjadi gula. Stasiun Pengolahan adalah fasilitas utama dalam proses produksi gula di pabrik. Di Stasiun Pengolahan PG Bungamayang, tebu dari perkebunan diolah menjadi gula melalui serangkaian proses pengolahan yang meliputi pemrosesan, pemecahan tebu, pengepresan, penyaringan, pemurnian, pengeringan, dan pengemasan. Setiap tahap proses dilakukan dengan menggunakan peralatan dan mesin khusus yang dirancang untuk mengoptimalkan efisiensi dan kualitas produk. Stasiun Pengolahan dilengkapi dengan berbagai peralatan dan sistem otomasi modern untuk memastikan proses pengolahan berjalan dengan baik. Pada tahap awal, tebu diproses untuk memisahkan air, limbah, dan kotoran. Kemudian, tebu diproses melalui tahap penggilingan dan pengepresan untuk menghasilkan nira atau cairan manis yang kaya akan gula. Nira kemudian melewati tahap pemurnian, pengeringan, dan pemrosesan lanjutan untuk menghasilkan gula kristal yang siap dikemas dan dipasarkan. Setiap tahap proses ini membutuhkan pengawasan dan kontrol ketat untuk memastikan kualitas dan keamanan produk. Stasiun Pengolahan PG Bungamayang juga menerapkan standar kebersihan dan sanitasi yang tinggi dalam semua proses pengolahan untuk menjaga kebersihan produk dan memastikan kepatuhan terhadap peraturan sanitasi pangan. Dengan adanya Stasiun Pengolahan PG Bungamayang, PT Perkebunan Nusantara VII dapat menghasilkan gula berkualitas tinggi yang siap dipasarkan ke konsumen. Stasiun Pengolahan ini merupakan salah satu bagian penting dalam rantai produksi gula yang berperan dalam menjaga efisiensi, kualitas, dan keberlanjutan operasional perkebunan.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Instrument Station 709 PTPN7 Bungamayang", //40
        category: "Station",
        desc: "Instrument Station 709 PTPN7 Bungamayang adalah bagian dari PT Perkebunan Nusantara VII Bungamayang yang bertanggung jawab untuk pengelolaan dan pemeliharaan instrumen atau alat ukur yang digunakan dalam proses produksi di pabrik gula. Sebagai sebuah stasiun instrument, Instrument Station 709 bertanggung jawab untuk mengawasi, memelihara, dan memastikan ketersediaan instrumen yang diperlukan dalam berbagai unit atau bagian di PTPN7 Bungamayang. Instrumen-instrumen ini digunakan untuk mengukur dan memantau berbagai parameter dan kondisi operasional penting dalam produksi gula, seperti suhu, tekanan, aliran, level, dan lain sebagainya. Instrument Station 709 PTPN7 Bungamayang memiliki peran penting dalam menjaga akurasi dan keandalan instrumen. Tugas-tugas yang dilakukan di stasiun ini termasuk pemeliharaan rutin, kalibrasi, pemeriksaan, perbaikan, dan penggantian instrumen yang rusak atau tidak berfungsi dengan baik. Dengan menjaga kondisi dan kinerja instrumen yang optimal, Instrument Station 709 memastikan bahwa data yang dihasilkan dari instrumen tersebut akurat dan dapat diandalkan. Hal ini penting dalam memonitor dan mengontrol proses produksi gula untuk mencapai efisiensi, kualitas, dan keamanan yang diinginkan. Instrument Station 709 PTPN7 Bungamayang berperan dalam menjaga kelancaran operasional dan efisiensi produksi di pabrik gula. Dengan memastikan instrumen yang tepat dan berkualitas tinggi, stasiun ini membantu memastikan pengendalian yang baik atas parameter-parameter penting dalam proses produksi, sehingga mempengaruhi kualitas dan kuantitas hasil produksi gula yang dihasilkan.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Cooling Tower", //41
        category: "Station",
        desc: "Cooling Tower di PG Bungamayang PT Perkebunan Nusantara VII merupakan salah satu fasilitas yang digunakan dalam proses produksi gula. Cooling Tower berfungsi untuk mendinginkan air yang digunakan dalam proses industri, khususnya dalam pabrik gula. Proses produksi gula menghasilkan panas yang tinggi, dan cooling tower berperan dalam menghilangkan panas tersebut dengan cara mengalirkan air panas ke atas cooling tower dan membiarkannya terpapar udara lembut yang mengalir melalui permukaan kisi-kisi atau filling. Udara mengambil panas dari air sehingga mengakibatkan pendinginan air. Cooling Tower pada PG Bungamayang PT Perkebunan Nusantara VII memiliki beberapa komponen penting, seperti kisi-kisi atau filling, fan, dan pompa air. Kisi-kisi atau filling berfungsi untuk memperluas permukaan kontak antara air dan udara, sehingga meningkatkan efisiensi pendinginan. Fan berperan dalam menggerakkan udara melalui kisi-kisi atau filling. Sedangkan pompa air digunakan untuk mengalirkan air ke cooling tower. Dengan adanya Cooling Tower, suhu air yang digunakan dalam proses produksi gula dapat dipertahankan dalam kisaran yang diinginkan. Hal ini penting untuk menjaga kualitas dan efisiensi proses produksi gula. Selain itu, Cooling Tower juga membantu mengurangi penggunaan air dalam proses industri dengan mendaur ulang air yang digunakan. Cooling Tower di PG Bungamayang PT Perkebunan Nusantara VII merupakan salah satu komponen penting dalam sistem produksi gula yang membantu menjaga suhu dan efisiensi proses. Dengan menjaga suhu air yang optimal, Cooling Tower berperan dalam mencapai kualitas gula yang baik dan menjaga keberlanjutan produksi yang efisien.",
        type: "Point",
        createdAt: new Date(),
        updatedAt: new Date()
      },
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