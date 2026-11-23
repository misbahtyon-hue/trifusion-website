/* =============================================================
   Trifusion Bionova Medika — Bilingual Engine (ID / EN)
   ============================================================= */
(function () {
  "use strict";

  const STORAGE_KEY = "tbm_lang";

  const DICT = {
    id: {
      // --- Global: Nav & Footer ---
      "nav.home": "Beranda",
      "nav.about": "Tentang Kami",
      "nav.products": "Produk",
      "nav.articles": "Berita &amp; Artikel",
      "nav.cta": "Konsultasi Sekarang &rarr;",
      "footer.desc": "Mitra terpercaya dalam menyediakan solusi teknologi medis inovatif. Berfokus pada pengadaan alat kesehatan dan Kerja Sama Operasional (KSO) untuk fasilitas layanan kesehatan di seluruh Indonesia.",
      "footer.company": "Perusahaan",
      "footer.solutions": "Solusi Kami",
      "footer.contact": "Hubungi Kami",
      "footer.hq": "Kantor Pusat",
      "footer.privacy": "Kebijakan Privasi",
      "footer.terms": "Syarat &amp; Ketentuan",
      "footer.sitemap": "Sitemap",

      // --- Index: Hero ---
      "idx.hero.title": "Advancing Healthcare,<br>Beyond Technology",
      "idx.hero.desc": "Mitra terpercaya dalam menyediakan solusi teknologi medis inovatif dan berkelanjutan untuk mendukung peningkatan kualitas layanan kesehatan di Indonesia.",
      "idx.hero.btnAbout": "Tentang Kami &rarr;",
      "idx.hero.btnCatalog": "Lihat Katalog Produk",

      // --- Index: Legalitas Strip ---
      "idx.legal.nib": "Nomor Induk Berusaha (NIB)",
      "idx.legal.idak": "Izin Distribusi Alkes (IDAK)",
      "idx.legal.cdakb": "Sertifikasi Distribusi",
      "idx.legal.cdakbVal": "CDAKB Kemenkes RI",
      "idx.legal.gov": "Pengadaan Pemerintah",
      "idx.legal.govVal": "Katalog Elektronik INAPROC",
      "idx.legal.note": "Berizin resmi untuk distribusi alat kesehatan, suku cadang (<em>spare parts</em>), aksesori, serta reparasi peralatan elektromedik di seluruh Indonesia.",
      "idx.legal.link": "Lihat Detail Perizinan &amp; KBLI &rarr;",

      // --- Index: About & Visi Misi ---
      "idx.about.eyebrow": "TENTANG KAMI",
      "idx.about.p1": "PT Trifusion Bionova Medika hadir sebagai mitra terpercaya bagi fasilitas pelayanan kesehatan dalam menyediakan solusi teknologi medis yang inovatif dan berkelanjutan.",
      "idx.about.p2": "Didukung oleh tim profesional dan tenaga teknis yang kompeten, kami berkomitmen memberikan layanan komprehensif mulai dari konsultasi, pengadaan, Kerja Sama Operasional (KSO), hingga pemeliharaan purna jual.",
      "idx.about.btn": "Selengkapnya &rarr;",
      "idx.vm.eyebrow": "VISI &amp; MISI",
      "idx.vm.vTitle": "Visi",
      "idx.vm.vDesc": "“Menjadi penyedia solusi alat kesehatan terdepan di Indonesia yang menghadirkan inovasi transformatif, guna mendukung layanan kesehatan yang berkualitas, berkelanjutan, dan dapat diakses oleh seluruh masyarakat.”",
      "idx.vm.mTitle": "Misi",
      "idx.vm.m1": "Menyediakan solusi alat kesehatan yang berkualitas dan inovatif.",
      "idx.vm.m2": "Memberikan layanan yang profesional dan terpercaya.",
      "idx.vm.m3": "Mendukung peningkatan serta pemerataan layanan kesehatan di Indonesia.",

      // --- Index & About: Komitmen ---
      "val.eyebrow": "KOMITMEN KAMI",
      "val.title": "Komitmen Kami",
      "val.sub": "Di Trifusion Bionova Medika, kami berkomitmen untuk selalu menghadirkan solusi terbaik melalui nilai-nilai utama yang kami pegang teguh.",
      "val.q.desc": "Kami berkomitmen menghadirkan produk, layanan, dan solusi yang memenuhi standar mutu tinggi guna memastikan keandalan, keamanan, dan kepuasan pelanggan.",
      "val.c.desc": "Membangun kemitraan melalui pelayanan yang profesional, responsif, dan berorientasi pada kebutuhan pelanggan.",
      "val.i.desc": "Mengembangkan inovasi dan memanfaatkan teknologi terkini untuk menghadirkan solusi yang adaptif dan bernilai.",
      "val.e.desc": "Mengedepankan proses kerja yang efektif dan efisien untuk menghasilkan solusi terbaik bagi setiap pelanggan.",

      // --- Index: 3 Pilar Layanan ---
      "idx.pil.eyebrow": "SOLUSI &amp; LAYANAN KAMI",
      "idx.pil.title": "Solusi Lengkap untuk Kebutuhan Alat Kesehatan Rumah Sakit",
      "idx.pil.sub": "Kami mendampingi rumah sakit dan klinik secara menyeluruh, mulai dari pengadaan alat kesehatan dan layanan purna jual hingga sistem digital rumah sakit.",
      "idx.pil.btnAll": "Jelajahi Katalog Produk &rarr;",
      "idx.pil.1.num": "01 / PENGADAAN",
      "idx.pil.1.title": "Penjualan &amp; Distribusi Alat Kesehatan",
      "idx.pil.1.desc": "Distribusi peralatan medis berstandar tinggi (Radiologi, CT Scan, MRI, Cathlab, USG, Anestesi, Patient Monitor, dll.) dengan skema pengadaan fleksibel.",
      "idx.pil.1.l1": "Direct Purchase (Pembelian Langsung)",
      "idx.pil.1.l2": "Joint Operation Schemes (KSO)",
      "idx.pil.1.l3": "Installment Payment Scheme",
      "idx.pil.1.link": "Lihat Daftar Alat Kesehatan &rarr;",
      "idx.pil.2.num": "02 / PURNA JUAL",
      "idx.pil.2.title": "Layanan Purna Jual",
      "idx.pil.2.desc": "Pemeliharaan preventif dan korektif yang mengacu pada pedoman ECRI, dengan suku cadang yang dikelola sesuai standar manajemen mutu ISO 13485:2016, untuk alat radiologi dan endoskopi.",
      "idx.pil.2.l1": "Installation, Commissioning &amp; User Training",
      "idx.pil.2.l2": "Preventive (IPM) &amp; Corrective Maintenance",
      "idx.pil.2.l3": "Sparepart Supply &amp; Garansi Layanan 3–6 Bulan",
      "idx.pil.2.link": "Pelajari Layanan Maintenance &rarr;",
      "idx.pil.3.num": "03 / DIGITAL &amp; VR",
      "idx.pil.3.title": "Sistem Rumah Sakit &amp; Teknologi VR",
      "idx.pil.3.desc": "Solusi digital untuk mempercepat respons kegawatdaruratan, memantau pasien secara terpusat, dan melatih tenaga kesehatan melalui virtual reality (VR).",
      "idx.pil.3.l1": "Hospital Emergency Command Center (ECCP)",
      "idx.pil.3.l2": "Central Patient Monitoring System (CMS)",
      "idx.pil.3.l3": "VR-Based Medical Training &amp; Simulation",
      "idx.pil.3.link": "Diskusikan Implementasi Sistem &rarr;",

      // --- Index: KSO Banner CTA ---
      "idx.cta.title": "Siap Mengembangkan Layanan<br>Kesehatan Anda?",
      "idx.cta.desc": "Ceritakan kebutuhan Anda. Tim kami akan membantu memilih skema yang paling sesuai: pembelian langsung, KSO, atau cicilan.",
      "idx.cta.btn": "Konsultasi Sekarang!",

      // --- About Page ---
      "abt.hero.title": "Tentang Kami",
      "abt.hero.sub": "Mitra Terpercaya Anda dalam<br>Teknologi Kesehatan",
      "abt.ov.eyebrow": "PROFIL PERUSAHAAN",
      "abt.ov.p1": "PT Trifusion Bionova Medika hadir sebagai mitra terpercaya bagi fasilitas pelayanan kesehatan dalam menyediakan solusi teknologi medis yang inovatif dan berkelanjutan. Berfokus pada penyediaan alat kesehatan, kami menghadirkan berbagai produk berkualitas melalui skema pengadaan yang fleksibel, mulai dari pembelian langsung, Kerja Sama Operasional (KSO), hingga pelaksanaan proyek yang disesuaikan dengan kebutuhan setiap institusi kesehatan.",
      "abt.ov.p2": "Seiring dengan perkembangan transformasi digital di sektor kesehatan, kami juga menghadirkan solusi berbasis teknologi seperti Hospital Emergency Command Center Platform (ECCP), Central Patient Monitoring System, serta Virtual Reality (VR) untuk pelatihan, simulasi klinis, dan pengembangan kompetensi tenaga kesehatan guna mendukung standar klinis dan operasional terbaik.",
      "abt.vm.vTitle": "Visi Kami",
      "abt.vm.mTitle": "Misi Kami",
      "abt.btnWhy": "Mengapa Memilih Kami? &rarr;",

      // --- About: Why Choose Us ---
      "abt.why.eyebrow": "MENGAPA MEMILIH KAMI",
      "abt.why.title": "Mengapa Memilih Trifusion Bionova Medika?",
      "abt.why.sub": "Kami memadukan legalitas distribusi resmi, pengalaman teknis mendalam, dan standar mutu internasional untuk memastikan keberlanjutan operasional fasilitas kesehatan Anda.",
      "abt.why.1.t": "Pengalaman Teknis &gt;15 Tahun",
      "abt.why.1.d": "Didukung tenaga teknis profesional terlatih dengan pengalaman lebih dari 15 tahun dalam pemeliharaan, perbaikan, dan dukungan alat medis (khususnya radiologi, X-Ray, dan endoskopi).",
      "abt.why.2.t": "Standar ECRI &amp; ISO 13485:2016",
      "abt.why.2.d": "Pelaksanaan pemeliharaan mengacu pada pedoman global ECRI, serta menggunakan suku cadang berkualitas yang dikelola sesuai standar manajemen mutu ISO 13485:2016.",
      "abt.why.3.t": "Garansi Layanan 3–6 Bulan",
      "abt.why.3.d": "Setiap pekerjaan perbaikan dan pemeliharaan didukung jaminan garansi selama 3 hingga 6 bulan sebagai bukti komitmen terhadap keandalan dan kepuasan pelanggan.",
      "abt.why.4.t": "Biaya Kompetitif &amp; Tepat Waktu",
      "abt.why.4.d": "Layanan teknis berkualitas dengan skema biaya kompetitif serta waktu pengerjaan yang efektif sesuai kompleksitas peralatan untuk meminimalkan <em>downtime</em>.",
      "abt.why.5.t": "Skema Pengadaan Fleksibel",
      "abt.why.5.d": "Menyediakan opsi pembelian langsung, Kerja Sama Operasional (KSO), skema cicilan, hingga proyek <em>turnkey</em> termasuk persiapan ruang (RF Shielding &amp; Proteksi Radiasi).",
      "abt.why.6.t": "Legalitas Resmi IDAK &amp; CDAKB",
      "abt.why.6.d": "Berizin resmi Kementerian Kesehatan RI untuk distribusi alat kesehatan, suku cadang, dan aksesori di seluruh Indonesia serta terdaftar pada Katalog Elektronik INAPROC.",

      // --- About: Solutions & Maintenance ---
      "abt.sol.eyebrow": "PRODUK &amp; LAYANAN",
      "abt.sol.title": "Solusi Terintegrasi untuk Fasilitas Kesehatan",
      "abt.sol.sub": "Dari pengadaan alat medis, layanan purna jual dan pemeliharaan berkala, hingga ekosistem digital rumah sakit berbasis <em>real-time</em> dan Virtual Reality.",
      "abt.sol.p1.l1": "<strong>Direct Purchase:</strong> Pengadaan langsung dengan jaminan legalitas &amp; garansi resmi.",
      "abt.sol.p1.l2": "<strong>Joint Operation Schemes (KSO):</strong> Skema kerja sama operasional tanpa beban CAPEX tinggi.",
      "abt.sol.p1.l3": "<strong>Installment Payment Scheme:</strong> Skema pembayaran bertahap sesuai kemampuan institusi.",
      "abt.sol.p2.l1": "Installation &amp; Commissioning di lokasi",
      "abt.sol.p2.l2": "Preventive Maintenance (IPM) terjadwal",
      "abt.sol.p2.l3": "Corrective Maintenance / Troubleshooting &amp; Repair",
      "abt.sol.p2.l4": "Technical Support &amp; User Training",
      "abt.sol.p2.l5": "Accessories &amp; Sparepart Supply (ISO 13485:2016)",
      "abt.sol.p3.l1": "<strong>Emergency Command Center (ECCP):</strong> Pusat kendali 24/7, dispatch ambulans, GPS, &amp; integrasi kapasitas IGD.",
      "abt.sol.p3.l2": "<strong>Central Monitoring System (CMS):</strong> Pemantauan terpusat data bedside monitor secara <em>real-time</em>.",
      "abt.sol.p3.l3": "<strong>VR Medical Training:</strong> Simulasi kegawatdaruratan ruang MRI, prosedur operasi, &amp; edukasi klinis.",
      "abt.maint.1.badge": "Fokus Maintenance 01",
      "abt.maint.1.d": "Menjaga kesiapan dan akurasi alat pencitraan medis (X-Ray, CT Scan, Cathlab, MRI) melalui dukungan teknis lapangan dan koordinasi operasional regional.",
      "abt.maint.1.l1": "Penugasan teknisi di lokasi &amp; dukungan regional",
      "abt.maint.1.l2": "Instalasi, <em>commissioning</em>, &amp; pelatihan pengguna",
      "abt.maint.1.l3": "Dukungan ketersediaan <em>spare parts</em> dan komponen",
      "abt.maint.2.badge": "Fokus Maintenance 02",
      "abt.maint.2.d": "Pemeliharaan dan perbaikan khusus instrumen endoskopi oleh teknisi berpengalaman guna menjaga kualitas visual, keselamatan pasien, dan keandalan tindakan.",
      "abt.maint.2.l1": "Suku cadang sesuai standar mutu ISO 13485:2016",
      "abt.maint.2.l2": "Waktu perbaikan efektif dengan biaya kompetitif",
      "abt.maint.2.l3": "Jaminan garansi perbaikan selama 3–6 bulan",

      // --- About: Legality & CTA ---
      "abt.leg.eyebrow": "KEPATUHAN &amp; LEGALITAS",
      "abt.leg.title": "Perizinan &amp; Legalitas Perusahaan",
      "abt.leg.sub": "Seluruh produk dan layanan PT Trifusion Bionova Medika beroperasi sesuai regulasi Kementerian Kesehatan RI dan persyaratan legal yang berlaku.",
      "abt.leg.box1.t": "Sertifikasi &amp; Izin Resmi",
      "abt.leg.box1.d": "Kepemilikan izin distribusi dan sertifikasi CDAKB menegaskan legalitas perusahaan dalam mendistribusikan alat kesehatan, suku cadang (<em>spare parts</em>), dan aksesori ke seluruh wilayah Indonesia.",
      "abt.leg.cert": "Sertifikasi &amp; Katalog",
      "abt.leg.box2.t": "Ruang Lingkup Usaha (KBLI Utama)",
      "abt.leg.box2.d": "Klasifikasi Baku Lapangan Usaha Indonesia (KBLI) yang tercatat pada perizinan berusaha berbasis risiko PT Trifusion Bionova Medika:",
      "abt.leg.kbli1": "Perdagangan Besar Alat Laboratorium, Alat Farmasi, dan Alat Kedokteran untuk Manusia",
      "abt.leg.kbli2": "Reparasi dan Pemeliharaan Peralatan Iradiasi, Elektromedik, dan Elektroterapi",
      "abt.leg.kbli3": "Perdagangan Besar Piranti Lunak",
      "abt.leg.kbli4": "Industri Karoseri Kendaraan Bermotor Roda Empat atau Lebih (Ambulans &amp; Unit Khusus)",
      "abt.cta.title": "Siap Mengembangkan Layanan Rumah Sakit Anda?",
      "abt.cta.desc": "Diskusikan kebutuhan pengadaan alat kesehatan, skema Kerja Sama Operasional (KSO), atau kontrak pemeliharaan (maintenance) bersama tim ahli kami.",
      "abt.cta.btn": "Konsultasi Kemitraan &rarr;",

      // --- Products Page ---
      "prod.hero.title": "Alat Kesehatan",
      "prod.hero.sub": "Peralatan medis inovatif dan andal untuk layanan kesehatan yang lebih baik.",
      "prod.filter.searchLabel": "Cari Produk",
      "prod.filter.searchPh": "Nama produk atau brand",
      "prod.filter.brand": "Brand",
      "prod.vr.title": "Coba di VR",
      "prod.vr.desc": "Jelajahi solusi kami melalui pengalaman Virtual Reality.",
      "prod.vr.btn": "Jelajahi VR",
      "prod.cat.eyebrow": "Produk Kami",
      "prod.cat.title": "Teknologi Canggih<br>untuk Masa Depan yang Lebih Sehat",
      "prod.cat.lead": "Rangkaian peralatan medis berteknologi terkini untuk mendukung perawatan pasien yang optimal dan operasional fasilitas yang efisien.",
      "prod.cat.reset": "Reset filter",
      "prod.info.aklDesc": "Izin edar alat kesehatan",
      "prod.info.brandDesc": "Teknologi dari produsen terkemuka",
      "prod.info.supTitle": "Dukungan Profesional",
      "prod.info.supDesc": "Dari konsultasi hingga purna jual",
      "prod.info.partTitle": "Mitra Terpercaya",
      "prod.info.partDesc": "Untuk Indonesia yang lebih sehat",
      "prod.cta.title": "Butuh solusi yang tepat untuk rumah sakit Anda?",
      "prod.cta.desc": "Tim kami siap membantu memilih teknologi medis yang sesuai dengan kebutuhan fasilitas Anda.",
      "prod.cta.btn": "Hubungi Kami",

      // --- Product Detail Page ---
      "pdet.loading": "Memuat informasi produk...",
      "pdet.back": "Kembali ke Katalog",
      "pdet.notFound.title": "Produk Tidak Ditemukan",
      "pdet.notFound.desc": "Produk yang Anda cari mungkin telah dipindahkan atau dihapus.",
      "pdet.specs": "Spesifikasi Teknis",
      "pdet.features": "Fitur Unggulan",
      "pdet.cta.prefix": "Tertarik dengan",
      "pdet.cta.desc": "Konsultasikan kebutuhan teknis dan penawaran harga dengan tim kami.",
      "pdet.cta.btn": "Minta Penawaran",
      "pdet.related": "Produk Terkait Lainnya",

      // --- Contact Page ---
      "cnt.hero.crumb": "Konsultasi &amp; Kemitraan",
      "cnt.hero.title": "Konsultasi Kemitraan &amp; Layanan",
      "cnt.hero.sub": "Diskusikan kebutuhan pengembangan fasilitas, KSO, atau pengadaan alat medis rumah sakit Anda bersama Tim Ahli Trifusion Bionova Medika.",
      "cnt.form.badge": "Formulir Konsultasi",
      "cnt.form.title": "Informasi Kebutuhan Anda",
      "cnt.form.sub": "Lengkapi formulir berikut untuk mendapatkan solusi dan penawaran terbaik dari tim kami.",
      "cnt.form.okTitle": "Terima Kasih!",
      "cnt.form.okDesc": "Permintaan konsultasi Anda berhasil dikirim. Tim ahli kami akan segera menghubungi Anda melalui email atau WhatsApp.",
      "cnt.form.sec1": "1. Informasi Institusi",
      "cnt.form.name": "Nama Lengkap",
      "cnt.form.namePh": "Masukkan nama lengkap",
      "cnt.form.org": "Nama Rumah Sakit / Institusi",
      "cnt.form.orgPh": "Contoh: RS Mitra Sehat",
      "cnt.form.role": "Jabatan",
      "cnt.form.roleOpt0": "Pilih jabatan",
      "cnt.form.roleOpt1": "Direktur / Manajemen",
      "cnt.form.roleOpt2": "Bagian Pengadaan / Purchasing",
      "cnt.form.roleOpt3": "Dokter Spesialis / Medis",
      "cnt.form.roleOpt4": "Lainnya",
      "cnt.form.email": "Email",
      "cnt.form.emailPh": "nama@rumahsakit.co.id",
      "cnt.form.phone": "Nomor Telepon / WhatsApp",
      "cnt.form.loc": "Lokasi Rumah Sakit",
      "cnt.form.locPh": "Kota / Provinsi",
      "cnt.form.sec2": "2. Detail Kebutuhan",
      "cnt.form.cat": "Kategori Layanan",
      "cnt.form.cat1": "Kerja Sama Operasional (KSO)",
      "cnt.form.cat2": "Pengadaan Alat Medis",
      "cnt.form.cat3": "Konstruksi MOT / OK",
      "cnt.form.cat4": "Timbalasi &amp; Proteksi Radiasi",
      "cnt.form.target": "Target Implementasi",
      "cnt.form.t1": "0 – 6 bulan",
      "cnt.form.t2": "6 – 12 bulan",
      "cnt.form.t3": "Lebih dari 12 bulan / Belum ditentukan",
      "cnt.form.msg": "Pesan / Detail Tambahan",
      "cnt.form.msgPh": "Ceritakan spesifikasi kebutuhan atau pertanyaan Anda...",
      "cnt.form.submit": "Kirim Permintaan Konsultasi",
      "cnt.form.privacy": "Data Anda akan kami jaga kerahasiaannya.",
      "cnt.side.title": "Mengapa Bermitra bersama Kami?",
      "cnt.side.f1t": "Kemitraan Strategis",
      "cnt.side.f1d": "Solusi kerja sama (KSO) yang fleksibel, menguntungkan, dan berkelanjutan.",
      "cnt.side.f2t": "Dukungan Teknologi",
      "cnt.side.f2d": "Akses ke perangkat medis terkini dengan standar kualitas internasional.",
      "cnt.side.f3t": "Layanan Profesional",
      "cnt.side.f3d": "Dukungan instalasi, perizinan, pemeliharaan, hingga pelatihan teknis.",
      "cnt.help.title": "Butuh Bantuan Cepat?",
      "cnt.help.sub": "Tim kami siap membantu menjawab pertanyaan Anda mengenai solusi medis kami.",
      "cnt.help.wa": "Hubungi via WhatsApp",
      "cnt.cta.title": "Bersama Trifusion Bionova Medika,",
      "cnt.cta.sub": "wujudkan pengembangan layanan diagnostik terbaik untuk rumah sakit Anda.",
      "cnt.cta.btn": "Jelajahi Solusi Lainnya",

      // --- Articles & Article Detail ---
      "art.hero.title": "Berita &amp; Artikel",
      "art.hero.sub": "Ikuti perkembangan terbaru seputar inovasi teknologi medis, wawasan klinis, dan panduan pengelolaan alat kesehatan dari Trifusion Bionova Medika.",
      "art.side.cat": "Kategori",
      "art.side.latest": "Artikel Terbaru",
      "art.side.newsTitle": "Berlangganan<br>Buletin Kami",
      "art.side.newsDesc": "Dapatkan berita dan wawasan teknologi medis terbaru dari Trifusion Bionova Medika.",
      "art.side.newsPh": "Alamat email Anda",
      "art.search.ph": "Cari artikel...",
      "art.search.btn": "Cari",
      "art.sort.label": "Urutkan:",
      "art.sort.newest": "Terbaru",
      "art.sort.oldest": "Terlama",
      "art.empty.title": "Artikel tidak ditemukan",
      "art.empty.desc": "Coba ubah kata kunci pencarian atau pilih kategori lainnya.",
      "art.cta.title": "Butuh Informasi Lebih Lanjut?",
      "art.cta.desc": "Tim kami siap menyediakan solusi teknologi medis terbaik untuk rumah sakit Anda.",
      "art.cta.btn": "Hubungi Kami",
      "adet.notFound.title": "Artikel Tidak Ditemukan",
      "adet.notFound.desc": "Artikel yang Anda cari tidak tersedia atau telah dihapus.",
      "adet.back": "Kembali ke Artikel",
      "adet.share": "Bagikan artikel ini:",
      "adet.side.consultTitle": "Butuh Konsultasi?",
      "adet.side.consultDesc": "Hubungi tim kami untuk solusi pengadaan dan pemeliharaan alat kesehatan profesional.",
    },

    en: {
      // --- Global: Nav & Footer ---
      "nav.home": "Home",
      "nav.about": "About Us",
      "nav.products": "Products",
      "nav.articles": "News &amp; Articles",
      "nav.cta": "Consult Now &rarr;",
      "footer.desc": "A trusted partner in delivering innovative medical technology solutions. Focused on medical equipment procurement and Joint Operation Schemes (KSO) for healthcare facilities across Indonesia.",
      "footer.company": "Company",
      "footer.solutions": "Our Solutions",
      "footer.contact": "Contact Us",
      "footer.hq": "Head Office",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms &amp; Conditions",
      "footer.sitemap": "Sitemap",

      // --- Index: Hero ---
      "idx.hero.title": "Advancing Healthcare,<br>Beyond Technology",
      "idx.hero.desc": "Your trusted partner in providing innovative and sustainable medical technology solutions to elevate the quality of healthcare services across Indonesia.",
      "idx.hero.btnAbout": "About Us &rarr;",
      "idx.hero.btnCatalog": "Explore Product Catalog",

      // --- Index: Legalitas Strip ---
      "idx.legal.nib": "Business Identification No. (NIB)",
      "idx.legal.idak": "Medical Device Dist. License (IDAK)",
      "idx.legal.cdakb": "Distribution Certification",
      "idx.legal.cdakbVal": "CDAKB Ministry of Health RI",
      "idx.legal.gov": "Government Procurement",
      "idx.legal.govVal": "INAPROC E-Catalog",
      "idx.legal.note": "Officially licensed for medical device distribution, spare parts, accessories, and electromedical equipment repair across Indonesia.",
      "idx.legal.link": "View Licensing &amp; KBLI Details &rarr;",

      // --- Index: About & Visi Misi ---
      "idx.about.eyebrow": "ABOUT US",
      "idx.about.p1": "PT Trifusion Bionova Medika stands as a trusted partner for healthcare facilities in delivering innovative and sustainable medical technology solutions.",
      "idx.about.p2": "Backed by a professional team and certified engineers, we deliver comprehensive services ranging from consultation, procurement, and Joint Operation Schemes (KSO) to after-sales maintenance.",
      "idx.about.btn": "Learn More &rarr;",
      "idx.vm.eyebrow": "VISION &amp; MISSION",
      "idx.vm.vTitle": "Vision",
      "idx.vm.vDesc": "“To become Indonesia's leading medical device solution provider delivering transformative innovation to support high-quality, sustainable, and accessible healthcare for all.”",
      "idx.vm.mTitle": "Mission",
      "idx.vm.m1": "Provide high-quality and innovative medical device solutions.",
      "idx.vm.m2": "Deliver professional, responsive, and trustworthy services.",
      "idx.vm.m3": "Support the advancement and equitable access of healthcare services in Indonesia.",

      // --- Index & About: Komitmen ---
      "val.eyebrow": "OUR COMMITMENT",
      "val.title": "Our Commitment",
      "val.sub": "At Trifusion Bionova Medika, we are committed to delivering the best solutions through the core values we uphold.",
      "val.q.desc": "Delivering products, services, and solutions that meet high quality standards to ensure reliability, safety, and customer satisfaction.",
      "val.c.desc": "Building long-term partnerships through professional, responsive, and customer-oriented service.",
      "val.i.desc": "Embracing innovation and the latest technology to deliver adaptive, high-value healthcare solutions.",
      "val.e.desc": "Prioritizing effective and efficient workflows to accelerate service delivery and create added value for every partner.",

      // --- Index: 3 Pilar Layanan ---
      "idx.pil.eyebrow": "OUR SOLUTIONS &amp; SERVICES",
      "idx.pil.title": "Complete Solutions for Hospital Medical Equipment Needs",
      "idx.pil.sub": "We support hospitals and clinics comprehensively, from medical equipment procurement and after-sales service to digital hospital systems.",
      "idx.pil.btnAll": "Explore Product Catalog &rarr;",
      "idx.pil.1.num": "01 / PROCUREMENT",
      "idx.pil.1.title": "Medical Device Sales &amp; Distribution",
      "idx.pil.1.desc": "Distribution of high-standard medical equipment (Radiology, CT Scan, MRI, Cathlab, Ultrasound, Anesthesia, Patient Monitors, etc.) with flexible acquisition schemes.",
      "idx.pil.1.l1": "Direct Purchase",
      "idx.pil.1.l2": "Joint Operation Schemes (KSO / PPP)",
      "idx.pil.1.l3": "Installment Payment Scheme",
      "idx.pil.1.link": "View Medical Devices &rarr;",
      "idx.pil.2.title": "After-Sales Service Solutions",
      "idx.pil.2.num": "02 / MAINTENANCE",
      "idx.pil.2.title": "After-Sales Service Solutions",
      "idx.pil.2.desc": "ECRI-guided preventive and corrective maintenance services with ISO 13485:2016 standard spare parts for Radiology and Endoscopy.",
      "idx.pil.2.l1": "Installation, Commissioning &amp; User Training",
      "idx.pil.2.l2": "Preventive (IPM) &amp; Corrective Maintenance",
      "idx.pil.2.l3": "Sparepart Supply &amp; 3–6 Month Service Warranty",
      "idx.pil.2.link": "Explore Maintenance Services &rarr;",
      "idx.pil.3.num": "03 / DIGITAL &amp; VR",
      "idx.pil.3.title": "Hospital Systems &amp; VR Technology",
      "idx.pil.3.desc": "Digital ecosystems to accelerate emergency response, centralize patient monitoring, and elevate clinical training via Virtual Reality.",
      "idx.pil.3.l1": "Hospital Emergency Command Center (ECCP)",
      "idx.pil.3.l2": "Central Patient Monitoring System (CMS)",
      "idx.pil.3.l3": "VR-Based Medical Training &amp; Simulation",
      "idx.pil.3.link": "Discuss System Implementation &rarr;",

      // --- Index: KSO Banner CTA ---
      "idx.cta.title": "Ready to Elevate Your<br>Healthcare Services?",
      "idx.cta.desc": "Tell us your needs. Our team will help you choose the most suitable scheme: direct purchase, KSO, or installment.",
      "idx.cta.btn": "Consult Now!",

      // --- About Page ---
      "abt.hero.title": "About Us",
      "abt.hero.sub": "Your Trusted Partner in<br>Healthcare Technology",
      "abt.ov.eyebrow": "COMPANY PROFILE",
      "abt.ov.p1": "PT Trifusion Bionova Medika stands as a trusted partner for healthcare facilities in delivering innovative and sustainable medical technology solutions. Focusing on medical equipment supply, we offer quality products through flexible procurement schemes—from direct purchase and Joint Operation Schemes (KSO) to turnkey projects tailored to each institution's needs.",
      "abt.ov.p2": "In line with healthcare digital transformation, we also provide technology-driven solutions such as the Hospital Emergency Command Center Platform (ECCP), Central Patient Monitoring System, and Virtual Reality (VR) for clinical simulation and competency development to support top clinical and operational standards.",
      "abt.vm.vTitle": "Our Vision",
      "abt.vm.mTitle": "Our Mission",
      "abt.btnWhy": "Why Choose Us? &rarr;",

      // --- About: Why Choose Us ---
      "abt.why.eyebrow": "WHY CHOOSE US",
      "abt.why.title": "Why Partner with Trifusion Bionova Medika?",
      "abt.why.sub": "We combine official regulatory compliance, deep technical expertise, and international quality standards to ensure your healthcare facility's operational continuity.",
      "abt.why.1.t": "&gt;15 Years Technical Experience",
      "abt.why.1.d": "Backed by trained technical professionals with over 15 years of experience in maintenance, repair, and technical support for medical devices (especially radiology, X-Ray, and endoscopy).",
      "abt.why.2.t": "ECRI &amp; ISO 13485:2016 Standards",
      "abt.why.2.d": "Maintenance operations follow global ECRI guidelines, utilizing quality spare parts managed under ISO 13485:2016 medical device quality management standards.",
      "abt.why.3.t": "3–6 Month Service Warranty",
      "abt.why.3.d": "Every repair and maintenance service is backed by a 3 to 6-month warranty as our commitment to reliability and customer satisfaction.",
      "abt.why.4.t": "Competitive Cost &amp; On-Time Delivery",
      "abt.why.4.d": "Quality technical services at competitive rates with efficient turnaround times tailored to equipment complexity to minimize downtime.",
      "abt.why.5.t": "Flexible Acquisition Schemes",
      "abt.why.5.d": "Offering direct purchase, Joint Operation Schemes (KSO), installment plans, and turnkey projects including site preparation (RF Shielding &amp; Radiation Protection).",
      "abt.why.6.t": "Official IDAK &amp; CDAKB Licensing",
      "abt.why.6.d": "Officially licensed by the Ministry of Health RI for distributing medical devices, spare parts, and accessories nationwide, and listed on the INAPROC E-Catalog.",

      // --- About: Solutions & Maintenance ---
      "abt.sol.eyebrow": "PRODUCTS &amp; SERVICES",
      "abt.sol.title": "Integrated Solutions for Healthcare Facilities",
      "abt.sol.sub": "From medical equipment procurement and scheduled after-sales maintenance to real-time hospital digital ecosystems and Virtual Reality training.",
      "abt.sol.p1.l1": "<strong>Direct Purchase:</strong> Straightforward procurement with official legality &amp; warranty.",
      "abt.sol.p1.l2": "<strong>Joint Operation Schemes (KSO):</strong> Operational partnership without heavy upfront CAPEX.",
      "abt.sol.p1.l3": "<strong>Installment Payment Scheme:</strong> Phased payment plans tailored to institutional budgets.",
      "abt.sol.p2.l1": "On-site Installation &amp; Commissioning",
      "abt.sol.p2.l2": "Scheduled Preventive Maintenance (IPM)",
      "abt.sol.p2.l3": "Corrective Maintenance / Troubleshooting &amp; Repair",
      "abt.sol.p2.l4": "Technical Support &amp; User Training",
      "abt.sol.p2.l5": "Accessories &amp; Sparepart Supply (ISO 13485:2016)",
      "abt.sol.p3.l1": "<strong>Emergency Command Center (ECCP):</strong> 24/7 command hub, ambulance dispatch, live GPS, &amp; ER capacity tracking.",
      "abt.sol.p3.l2": "<strong>Central Monitoring System (CMS):</strong> Centralized real-time monitoring of bedside patient monitors.",
      "abt.sol.p3.l3": "<strong>VR Medical Training:</strong> MRI emergency simulation, surgical procedures, &amp; immersive clinical education.",
      "abt.maint.1.badge": "Maintenance Focus 01",
      "abt.maint.1.d": "Maintaining readiness and diagnostic accuracy of imaging modalities (X-Ray, CT Scan, Cathlab, MRI) through on-site engineers and regional operational support.",
      "abt.maint.1.l1": "On-site technician deployment &amp; regional support",
      "abt.maint.1.l2": "Installation, commissioning, &amp; user training",
      "abt.maint.1.l3": "Reliable spare parts and component availability",
      "abt.maint.2.badge": "Maintenance Focus 02",
      "abt.maint.2.d": "Specialized maintenance and repair for flexible and rigid endoscopy scopes by experienced technicians to uphold visual clarity and patient safety.",
      "abt.maint.2.l1": "Quality spare parts compliant with ISO 13485:2016",
      "abt.maint.2.l2": "Effective turnaround time with competitive pricing",
      "abt.maint.2.l3": "Backed by a 3–6 month repair warranty",

      // --- About: Legality & CTA ---
      "abt.leg.eyebrow": "COMPLIANCE &amp; LEGALITY",
      "abt.leg.title": "Company Licensing &amp; Legality",
      "abt.leg.sub": "All products and services of PT Trifusion Bionova Medika operate in full compliance with Ministry of Health RI regulations and legal standards.",
      "abt.leg.box1.t": "Official Licenses &amp; Certifications",
      "abt.leg.box1.d": "Holding official distribution permits and CDAKB certification affirms our legality in distributing medical devices, spare parts, and accessories nationwide.",
      "abt.leg.cert": "Certification &amp; E-Catalog",
      "abt.leg.box2.t": "Business Scope (Primary KBLI)",
      "abt.leg.box2.d": "Indonesian Standard Industrial Classification (KBLI) registered under PT Trifusion Bionova Medika's risk-based business license:",
      "abt.leg.kbli1": "Wholesale Trade of Laboratory, Pharmaceutical, and Medical Equipment for Humans",
      "abt.leg.kbli2": "Repair and Maintenance of Irradiation, Electromedical, and Electrotherapeutic Equipment",
      "abt.leg.kbli3": "Wholesale Trade of Software",
      "abt.leg.kbli4": "Motor Vehicle Body Manufacturing (Ambulances &amp; Special Medical Units)",
      "abt.cta.title": "Ready to Expand Your Hospital Services?",
      "abt.cta.desc": "Discuss your medical equipment procurement, Joint Operation Scheme (KSO), or maintenance contract needs with our expert team.",
      "abt.cta.btn": "Partnership Consultation &rarr;",

      // --- Products Page ---
      "prod.hero.title": "Medical Devices",
      "prod.hero.sub": "Innovative and reliable medical equipment for better healthcare delivery.",
      "prod.filter.searchLabel": "Search Products",
      "prod.filter.searchPh": "Product name or brand",
      "prod.filter.brand": "Brand",
      "prod.vr.title": "Experience in VR",
      "prod.vr.desc": "Explore our solutions through an interactive Virtual Reality experience.",
      "prod.vr.btn": "Explore VR",
      "prod.cat.eyebrow": "Our Products",
      "prod.cat.title": "Advanced Technology<br>for a Healthier Future",
      "prod.cat.lead": "A comprehensive range of cutting-edge medical equipment designed for optimal patient care and efficient facility operations.",
      "prod.cat.reset": "Reset filters",
      "prod.info.aklDesc": "Registered medical device permits",
      "prod.info.brandDesc": "Technology from leading manufacturers",
      "prod.info.supTitle": "Professional Support",
      "prod.info.supDesc": "From consultation to after-sales",
      "prod.info.partTitle": "Trusted Partner",
      "prod.info.partDesc": "For a healthier Indonesia",
      "prod.cta.title": "Need the right solution for your hospital?",
      "prod.cta.desc": "Our team is ready to help you select the medical technology that best fits your facility's needs.",
      "prod.cta.btn": "Contact Us",

      // --- Product Detail Page ---
      "pdet.loading": "Loading product information...",
      "pdet.back": "Back to Catalog",
      "pdet.notFound.title": "Product Not Found",
      "pdet.notFound.desc": "The product you are looking for may have been moved or removed.",
      "pdet.specs": "Technical Specifications",
      "pdet.features": "Key Features",
      "pdet.cta.prefix": "Interested in",
      "pdet.cta.desc": "Consult your technical requirements and pricing quotation with our team.",
      "pdet.cta.btn": "Request Quotation",
      "pdet.related": "Other Related Products",

      // --- Contact Page ---
      "cnt.hero.crumb": "Consultation &amp; Partnership",
      "cnt.hero.title": "Partnership &amp; Service Consultation",
      "cnt.hero.sub": "Discuss your hospital's facility expansion, KSO, or medical equipment procurement needs with the Trifusion Bionova Medika expert team.",
      "cnt.form.badge": "Consultation Form",
      "cnt.form.title": "Your Requirements",
      "cnt.form.sub": "Complete the form below to receive tailored solutions and the best quotation from our team.",
      "cnt.form.okTitle": "Thank You!",
      "cnt.form.okDesc": "Your consultation request has been submitted. Our expert team will contact you shortly via email or WhatsApp.",
      "cnt.form.sec1": "1. Institution Information",
      "cnt.form.name": "Full Name",
      "cnt.form.namePh": "Enter your full name",
      "cnt.form.org": "Hospital / Institution Name",
      "cnt.form.orgPh": "Example: Mitra Sehat Hospital",
      "cnt.form.role": "Position",
      "cnt.form.roleOpt0": "Select position",
      "cnt.form.roleOpt1": "Director / Management",
      "cnt.form.roleOpt2": "Procurement / Purchasing",
      "cnt.form.roleOpt3": "Specialist / Medical Doctor",
      "cnt.form.roleOpt4": "Other",
      "cnt.form.email": "Email",
      "cnt.form.emailPh": "name@hospital.co.id",
      "cnt.form.phone": "Phone / WhatsApp Number",
      "cnt.form.loc": "Hospital Location",
      "cnt.form.locPh": "City / Province",
      "cnt.form.sec2": "2. Requirement Details",
      "cnt.form.cat": "Service Category",
      "cnt.form.cat1": "Joint Operation Scheme (KSO)",
      "cnt.form.cat2": "Medical Device Procurement",
      "cnt.form.cat3": "MOT / Operating Room Construction",
      "cnt.form.cat4": "Lead Shielding &amp; Radiation Protection",
      "cnt.form.target": "Implementation Timeline",
      "cnt.form.t1": "0 – 6 months",
      "cnt.form.t2": "6 – 12 months",
      "cnt.form.t3": "More than 12 months / Undecided",
      "cnt.form.msg": "Message / Additional Details",
      "cnt.form.msgPh": "Tell us your specifications, requirements, or questions...",
      "cnt.form.submit": "Submit Consultation Request",
      "cnt.form.privacy": "Your data will be kept strictly confidential.",
      "cnt.side.title": "Why Partner with Us?",
      "cnt.side.f1t": "Strategic Partnership",
      "cnt.side.f1d": "Flexible, mutually beneficial, and sustainable Joint Operation (KSO) solutions.",
      "cnt.side.f2t": "Technology Support",
      "cnt.side.f2d": "Access to the latest medical equipment meeting international quality standards.",
      "cnt.side.f3t": "Professional Service",
      "cnt.side.f3d": "End-to-end support from installation, licensing, and maintenance to technical training.",
      "cnt.help.title": "Need Quick Assistance?",
      "cnt.help.sub": "Our team is ready to answer your questions regarding our medical solutions.",
      "cnt.help.wa": "Contact via WhatsApp",
      "cnt.cta.title": "Together with Trifusion Bionova Medika,",
      "cnt.cta.sub": "build the best diagnostic service capabilities for your hospital.",
      "cnt.cta.btn": "Explore Other Solutions",

      // --- Articles & Article Detail ---
      "art.hero.title": "News &amp; Articles",
      "art.hero.sub": "Stay updated with the latest insights, medical technology innovations, and equipment management guides from Trifusion Bionova Medika.",
      "art.side.cat": "Categories",
      "art.side.latest": "Latest Articles",
      "art.side.newsTitle": "Subscribe to<br>Our Newsletter",
      "art.side.newsDesc": "Get the latest medical technology news and insights from Trifusion Bionova Medika.",
      "art.side.newsPh": "Your email address",
      "art.search.ph": "Search articles...",
      "art.search.btn": "Search",
      "art.sort.label": "Sort by:",
      "art.sort.newest": "Latest First",
      "art.sort.oldest": "Oldest First",
      "art.empty.title": "No articles found",
      "art.empty.desc": "Try adjusting your search keywords or selecting another category.",
      "art.cta.title": "Need More Information?",
      "art.cta.desc": "Our team is ready to provide the best medical technology solutions for your hospital.",
      "art.cta.btn": "Contact Us",
      "adet.notFound.title": "Article Not Found",
      "adet.notFound.desc": "The article you are looking for does not exist or has been removed.",
      "adet.back": "Back to Articles",
      "adet.share": "Share this article:",
      "adet.side.consultTitle": "Need Consultation?",
      "adet.side.consultDesc": "Contact our team for professional medical equipment procurement and maintenance solutions.",
    }
  };

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" ? "en" : "id";
  }

  function applyLang(lang) {
    const dict = DICT[lang] || DICT.id;
    document.documentElement.lang = lang;
    localStorage.setItem(STORAGE_KEY, lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    window.dispatchEvent(new CustomEvent("tbm:langchange", { detail: { lang } }));
  }

  function injectSwitcher() {
    if (document.querySelector(".lang-switch")) return;
    const nav = document.querySelector(".nav");
    if (!nav) return;

    // Inject minimal scoped CSS for the switcher
    const style = document.createElement("style");
    style.textContent = `
      .lang-switch {
        display: inline-flex;
        align-items: center;
        background: #f1f5f9;
        border: 1px solid var(--color-border, #dde4ec);
        border-radius: 20px;
        padding: 3px;
        gap: 2px;
        margin-left: 12px;
      }
      .lang-switch__btn {
        border: none;
        background: transparent;
        color: var(--color-text, #56657A);
        font-family: var(--font-mono, monospace);
        font-size: 0.72rem;
        font-weight: 700;
        padding: 5px 10px;
        border-radius: 16px;
        cursor: pointer;
        transition: all 0.2s ease;
        line-height: 1;
      }
      .lang-switch__btn.active {
        background: var(--color-primary, #1B2F63);
        color: #ffffff;
      }
      @media (max-width: 900px) {
        .lang-switch { margin: 12px 0; align-self: flex-start; }
      }
    `;
    document.head.appendChild(style);

    const wrap = document.createElement("div");
    wrap.className = "lang-switch";
    wrap.setAttribute("role", "group");
    wrap.setAttribute("aria-label", "Language Switcher");
    wrap.innerHTML = `
      <button type="button" class="lang-switch__btn" data-lang="id">ID</button>
      <button type="button" class="lang-switch__btn" data-lang="en">EN</button>
    `;

    nav.appendChild(wrap);

    wrap.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(btn.dataset.lang));
    });
  }

  window.TBM_LANG = { getLang, applyLang, DICT };

  document.addEventListener("DOMContentLoaded", () => {
    injectSwitcher();
    applyLang(getLang());
  });
})();