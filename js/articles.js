/* =============================================================
   Trifusion Bionova Medika — Data Artikel (Bahasa Indonesia)
   ============================================================= */

const ARTICLE_CATEGORIES = [
  { id: "all", label: "Semua" },
  { id: "product-insight", label: "Wawasan Produk" },
  { id: "medical-insight", label: "Wawasan Medis" },
  { id: "healthcare-tips", label: "Tips & Perawatan" }
];

const ARTICLES = [
  {
    id: "importance-of-patient-monitoring",
    title: "Pentingnya Sistem Pemantauan Pasien (Patient Monitoring) di Rumah Sakit Modern",
    category: "product-insight",
    date: "28 Okt 2025",
    readTime: "7 menit baca",
    image: "assets/img/Patient Monitor X12.png",
    excerpt: "Pelajari peran krusial sistem pemantauan pasien secara real-time dalam meningkatkan keselamatan klinis, mempercepat deteksi dini, dan mengefisienkan alur kerja tenaga medis.",
    content: `
      <p>Di era layanan kesehatan modern, sistem pemantauan pasien (<em>patient monitoring system</em>) telah menjadi tulang punggung perawatan klinis, khususnya di unit perawatan intensif (ICU), Instalasi Gawat Darurat (IGD), ruang operasi, hingga ruang rawat inap berisiko tinggi. Perangkat modern seperti <strong>Patient Monitor X12</strong> tidak lagi sekadar menampilkan angka tanda vital, melainkan berfungsi sebagai sistem peringatan dini (<em>early warning system</em>) yang menopang keselamatan pasien selama 24 jam penuh.</p>

      <h3>Mengapa Pemantauan Berkelanjutan Sangat Krusial?</h3>
      <p>Pada pasien dengan kondisi kritis atau pascaoperasi, perubahan fisiologis dapat terjadi dalam hitungan menit tanpa gejala visual yang langsung terlihat. Pemantauan berkelanjutan terhadap parameter utama—seperti elektrokardiogram (ECG), saturasi oksigen (SpO2), tekanan darah non-invasif (NIBP), laju pernapasan (RESP), hingga suhu tubuh—memungkinkan dokter dan perawat mendeteksi tren penurunan kondisi lebih awal.</p>
      <p>Dengan algoritma deteksi aritmia dan sistem alarm cerdas yang dapat disesuaikan ambang batasnya, risiko <em>alarm fatigue</em> (kelelahan akibat alarm palsu) dapat ditekan, sementara kejadian klinis yang benar-benar kritis langsung mendapatkan respons cepat. Intervensi yang lebih dini terbukti secara signifikan menurunkan angka komplikasi serta memperpendek lama rawat inap (<em>Length of Stay</em>).</p>

      <h3>Integrasi ke Central Monitoring System (CMS) &amp; SIMRS</h3>
      <p>Tantangan terbesar di banyak rumah sakit bukan hanya mengumpulkan data pasien, melainkan memastikan data tersebut mengalir mulus antar-unit. Monitor pasien generasi terbaru dirancang agar dapat terhubung ke <strong>Central Patient Monitoring System (CMS)</strong> dan Sistem Informasi Manajemen Rumah Sakit (SIMRS/HIS) melalui standar komunikasi HL7.</p>
      <ul>
        <li><strong>Pemantauan Terpusat di Nurse Station:</strong> Satu layar sentral memungkinkan tim perawat memantau puluhan tempat tidur sekaligus secara <em>real-time</em> tanpa harus berpindah ruangan terus-menerus.</li>
        <li><strong>Pengurangan Kesalahan Pencatatan Manual:</strong> Transmisi data otomatis ke rekam medis elektronik (RME) meminimalkan risiko salah tulis (<em>human error</em>) dan menghemat waktu administratif perawat.</li>
        <li><strong>Kontinuitas Data Saat Transportasi Pasien:</strong> Desain portabel dengan baterai berdaya tahan lama menjaga perekaman data tetap utuh saat pasien dipindahkan dari IGD menuju ruang operasi atau ICU.</li>
      </ul>

      <h3>Pertimbangan dalam Memilih Patient Monitor untuk Rumah Sakit</h3>
      <p>Sebelum melakukan pengadaan, manajemen rumah sakit dan tim elektromedis perlu mengevaluasi beberapa faktor kunci: akurasi sensor pada kondisi perfusi rendah atau pasien bergerak, kemudahan navigasi layar sentuh bagi tenaga medis, kompatibilitas dengan jaringan rumah sakit yang sudah ada, serta ketersediaan aksesori dan suku cadang jangka panjang.</p>
      <p>Melalui dukungan distribusi resmi berizin IDAK dan CDAKB serta layanan purna jual yang andal, Trifusion Bionova Medika siap membantu fasilitas kesehatan Anda memilih dan mengintegrasikan sistem pemantauan pasien yang paling sesuai dengan kebutuhan klinis maupun anggaran institusi.</p>
    `
  },
  {
    id: "advancements-in-minimally-invasive-surgery",
    title: "Perkembangan Teknologi Bedah Invasif Minimal (Minimally Invasive Surgery) di Ruang Operasi",
    category: "medical-insight",
    date: "20 Okt 2025",
    readTime: "8 menit baca",
    image: "assets/img/Radiologi.jpg",
    excerpt: "Mengulas bagaimana kemajuan teknologi pencitraan medis, endoskopi, dan mesin anestesi modern mendorong keberhasilan prosedur bedah invasif minimal.",
    content: `
      <p>Bedah invasif minimal atau <em>Minimally Invasive Surgery</em> (MIS) telah mengubah paradigma tindakan operatif secara menyeluruh. Dibandingkan bedah terbuka konvensional yang memerlukan sayatan lebar, teknik MIS memanfaatkan sayatan sangat kecil dengan bantuan instrumen optik beresolusi tinggi serta panduan pencitraan medis. Hasilnya, pasien merasakan nyeri pascaoperasi yang jauh lebih ringan, risiko infeksi lebih rendah, kehilangan darah minimal, serta masa pemulihan yang jauh lebih singkat.</p>

      <h3>Peran Kunci Pencitraan Medis dan Endoskopi</h3>
      <p>Keberhasilan bedah invasif minimal sangat bergantung pada kualitas visualisasi yang diterima dokter bedah. Karena dokter tidak melihat organ secara langsung dengan mata telanjang, ketajaman gambar menjadi faktor penentu akurasi tindakan.</p>
      <ul>
        <li><strong>Pencitraan Intraoperatif Presisi:</strong> Penggunaan C-Arm fluoroscopy, Cathlab, dan sistem ultrasonografi (USG) beresolusi tinggi membantu memetakan anatomi pembuluh darah dan jaringan secara <em>real-time</em> selama prosedur berlangsung.</li>
        <li><strong>Sistem Endoskopi Fleksibel &amp; Kaku:</strong> Teknologi kamera HD dan pencahayaan dingin memungkinkan eksplorasi rongga tubuh secara detail tanpa merusak jaringan sehat di sekitarnya.</li>
        <li><strong>Integrasi Ruang Operasi Modern:</strong> Layar monitor bedah yang terintegrasi dengan sistem PACS memudahkan tim medis membandingkan citra CT Scan atau MRI praoperasi secara langsung di ruang tindakan.</li>
      </ul>

      <h3>Dukungan Mesin Anestesi Presisi Tinggi</h3>
      <p>Seiring semakin kompleksnya prosedur MIS—termasuk bedah laparoskopi dan intervensi kardiovaskular—tuntutan terhadap sistem anestesi pun meningkat. Mesin anestesi modern dilengkapi pencampuran gas elektronik yang sangat akurat, mode ventilasi adaptif untuk pasien dengan posisi tubuh khusus (seperti posisi Trendelenburg), serta pemantauan kapnografi (EtCO2) secara berkelanjutan untuk menjaga stabilitas hemodinamik pasien sepanjang operasi.</p>

      <h3>Kesiapan Infrastruktur dan Pemeliharaan Alat</h3>
      <p>Mengadopsi layanan bedah invasif minimal tidak berhenti pada pembelian alat. Rumah sakit juga memerlukan persiapan ruang yang memenuhi standar keselamatan (seperti proteksi radiasi untuk ruang C-Arm/Cathlab), pelatihan berkala bagi dokter dan perawat kamar bedah, serta perawatan khusus untuk instrumen sensitif seperti <em>endoscope</em>. Dengan pemeliharaan preventif yang terencana dan dukungan teknis berpengalaman, rumah sakit dapat menghadirkan layanan MIS yang aman, konsisten, dan bernilai tambah tinggi bagi masyarakat.</p>
    `
  },
  {
    id: "tips-for-maintaining-medical-equipment",
    title: "Panduan Praktis Pemeliharaan Alat Kesehatan agar Performa Tetap Optimal dan Aman",
    category: "healthcare-tips",
    date: "15 Okt 2025",
    readTime: "7 menit baca",
    image: "assets/img/AcclarixAX3.png",
    excerpt: "Pelajari langkah-langkah strategis pemeliharaan preventif, kalibrasi berkala, dan manajemen suku cadang untuk memperpanjang usia pakai alat medis di rumah sakit.",
    content: `
      <p>Peralatan medis merupakan investasi strategis bernilai tinggi bagi setiap rumah sakit dan klinik. Namun, tanpa program pemeliharaan yang terstruktur, perangkat secanggih apa pun berisiko mengalami penurunan akurasi, kerusakan mendadak (<em>downtime</em>), hingga membahayakan keselamatan pasien. Pemeliharaan yang baik bukan sekadar biaya operasional, melainkan perlindungan terhadap mutu layanan dan keberlanjutan bisnis fasilitas kesehatan.</p>

      <h3>1. Terapkan Jadwal Preventive Maintenance (IPM) Berbasis Standar</h3>
      <p>Banyak fasilitas kesehatan masih menerapkan pola reaktif—baru memanggil teknisi ketika alat sudah mati total. Pendekatan terbaik adalah <em>Inspection and Preventive Maintenance</em> (IPM) terjadwal yang mengacu pada pedoman global seperti <strong>ECRI</strong> dan rekomendasi pabrikan. Pemeriksaan rutin meliputi pengecekan integritas kabel, sistem pendingin, filter udara, performa baterai cadangan, serta uji fungsi mandiri (<em>self-test</em>).</p>

      <h3>2. Lakukan Kalibrasi Secara Berkala</h3>
      <p>Alat diagnostik dan terapi—mulai dari USG, CT Scan, X-Ray, hingga ventilator dan monitor pasien—harus dikalibrasi secara rutin sesuai ketentuan regulasi. Kalibrasi memastikan bahwa dosis radiasi, volume aliran udara, maupun pembacaan sinyal vital tetap berada dalam batas toleransi yang aman sehingga mencegah kesalahan diagnosis maupun terapi.</p>

      <h3>3. Disiplin pada Protokol Pembersihan dan Disinfeksi</h3>
      <p>Kesalahan dalam membersihkan alat sering menjadi penyebab kerusakan dini yang paling umum. Beberapa hal yang wajib diperhatikan tim klinis antara lain:</p>
      <ul>
        <li>Gunakan cairan disinfektan yang direkomendasikan pabrikan; hindari pelarut keras pada layar sentuh, probe USG, maupun selubung optik endoskopi.</li>
        <li>Jangan menyemprotkan cairan langsung ke celah ventilasi atau konektor elektronik; gunakan kain lembut yang dibasahi secukupnya.</li>
        <li>Pastikan instrumen endoskopi melewati tahap <em>leak test</em> (uji kebocoran) sebelum direndam agar cairan tidak masuk merusak komponen internal.</li>
      </ul>

      <h3>4. Gunakan Suku Cadang Berkualitas dan Teknisi Tersertifikasi</h3>
      <p>Penggunaan suku cadang non-standar dapat memicu kerusakan berantai pada komponen utama yang jauh lebih mahal. Pastikan penggantian komponen selalu menggunakan <em>spare parts</em> yang dikelola sesuai standar manajemen mutu <strong>ISO 13485:2016</strong> serta ditangani oleh teknisi elektromedis berpengalaman dengan jaminan garansi pekerjaan.</p>
      <p>Dengan menggabungkan pelatihan operator, pemeliharaan preventif rutin, dan dokumentasi riwayat servis yang rapi, rumah sakit dapat memaksimalkan masa pakai peralatan sekaligus menjaga tingkat kesiapan operasional di atas 95%.</p>
    `
  },
  {
    id: "understanding-patient-ventilator-technology",
    title: "Memahami Teknologi Ventilator Modern untuk Perawatan Respirasi di Ruang ICU",
    category: "product-insight",
    date: "10 Okt 2025",
    readTime: "6 menit baca",
    image: "assets/img/ISUventilatorCriusV3.png",
    excerpt: "Mengenal perbedaan ventilator berbasis turbin vs gas sentral, mode ventilasi adaptif, serta perannya dalam mempercepat proses penyapihan (weaning) pasien kritis.",
    content: `
      <p>Ventilator mekanik merupakan perangkat penyelamat nyawa (<em>life-support</em>) yang berperan mengambil alih atau membantu proses pernapasan pasien dengan gagal napas akut, cedera paru, maupun kondisi pascaoperasi besar. Memahami arsitektur dan fitur teknologi pada ventilator modern membantu tim klinis memberikan terapi respirasi yang lebih presisi sekaligus aman bagi jaringan paru pasien.</p>

      <h3>Teknologi Berbasis Turbin vs. Gas Sentral</h3>
      <p>Secara garis besar, sistem penggerak aliran udara pada ventilator ICU terbagi menjadi dua jenis utama. Ventilator konvensional umumnya bergantung sepenuhnya pada pasokan udara tekan sentral rumah sakit (<em>centralized compressed air</em>). Sebaliknya, banyak ventilator modern—seperti seri <strong>Crius</strong>—mengadopsi teknologi <strong>berbasis turbin (turbine-driven)</strong>.</p>
      <ul>
        <li><strong>Kemandirian Operasional:</strong> Tidak bergantung pada kompresor udara eksternal atau instalasi gas tekan sentral, sehingga tetap dapat beroperasi optimal di berbagai ruangan maupun fasilitas kesehatan daerah.</li>
        <li><strong>Respons Aliran Cepat:</strong> Turbin modern mampu menghasilkan aliran puncak (<em>peak flow</em>) tinggi secara instan untuk memenuhi kebutuhan inspirasi pasien dengan usaha napas tinggi.</li>
        <li><strong>Fleksibilitas &amp; Mobilitas:</strong> Memudahkan penggunaan baik di ruang ICU tetap maupun saat kondisi darurat yang membutuhkan pemindahan perangkat secara cepat.</li>
      </ul>

      <h3>Mode Ventilasi Adaptif dan Perlindungan Paru</h3>
      <p>Salah satu risiko terbesar dari ventilasi mekanik adalah cedera paru akibat tekanan atau volume berlebih (<em>Ventilator-Induced Lung Injury</em> / VILI). Oleh karena itu, ventilator generasi terbaru dilengkapi beragam mode ventilasi protektif—mulai dari ventilasi terkontrol berbasis volume/tekanan, <em>Pressure Support</em>, hingga mode non-invasif (NIV) dan <em>High-Flow Nasal Cannula</em> (HFNC) terintegrasi.</p>
      <p>Fitur pemantauan mekanika paru secara <em>real-time</em> (seperti <em>compliance</em>, resistensi jalan napas, dan grafik <em>pressure-volume loop</em>) membantu dokter spesialis anestesi dan intensivis menyesuaikan pengaturan secara personal bagi setiap pasien. Hasilnya, sinkronisasi antara pasien dan mesin meningkat, kebutuhan sedasi dapat dikurangi, dan proses penyapihan (<em>weaning</em>) dari ventilator dapat berlangsung lebih cepat serta aman.</p>

      <h3>Kesiapan Pemeliharaan dan Ketersediaan Aksesori</h3>
      <p>Karena bekerja terus-menerus menopang fungsi vital, keandalan ventilator sangat bergantung pada kalibrasi sensor aliran (<em>flow sensor</em>), pengecekan sel oksigen (<em>O2 cell</em>), penggantian filter bakteri/virus secara berkala, serta kesiapan baterai internal. Memilih mitra penyedia yang menjamin ketersediaan aksesori dan dukungan teknis responsif merupakan kunci utama dalam menjaga kesiapan layanan ICU rumah sakit Anda.</p>
    `
  }
];

window.ARTICLE_DATA = { ARTICLE_CATEGORIES, ARTICLES };