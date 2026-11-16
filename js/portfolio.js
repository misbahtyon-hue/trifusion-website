/* =============================================================
   Trifusion Bionova Medika — Project Portfolio Data
   Transcribed from the company profile project portfolio.
   type: imaging | radiation | operating | flooring
   ============================================================= */

const PORTFOLIO = [
  // ----- Table 1 -----
  { client: "RSi Fatimah Banyuwangi", hospital: "RSi Fatimah Banyuwangi", desc: "Timbalisi R. CT Scan", year: 2022, type: "radiation" },
  { client: "RSPAL dr Ramelan Surabaya", hospital: "RSPAL dr Ramelan Surabaya", desc: "KSO Cathlab", year: 2022, type: "imaging" },
  { client: "RS Wijaya Kusuma Lumajang", hospital: "RS Wijaya Kusuma Lumajang", desc: "Timbalisi R. CT Scan", year: 2022, type: "radiation" },
  { client: "PT Sandana", hospital: "RSi Fatimah Banyuwangi", desc: "Timbalisi R. CT Scan", year: 2022, type: "radiation" },
  { client: "PT Kencana Wiratama Sejati", hospital: "CWB Lab Tanah Abang", desc: "Timbalisi X Ray", year: 2022, type: "radiation" },
  { client: "RSU Nurussyifa Kudus", hospital: "RSU Nurussyifa Kudus", desc: "Timbalisi R. CT Scan", year: 2022, type: "radiation" },
  { client: "RSi Garam Sumenep", hospital: "RSi Garam Sumenep", desc: "Timbalisi dan KSO R. CT Scan", year: 2022, type: "radiation" },
  { client: "PT Sandana", hospital: "RS Muhammadiyah Jember", desc: "Timbalisi R. CT Scan", year: 2022, type: "radiation" },
  { client: "PT. MP PROPERTI", hospital: "RS. COVID MERAUKE", desc: "Pintu Timbal", year: 2021, type: "radiation" },
  { client: "PT. SANDANA", hospital: "RS PKU Muhammadiyah Solo", desc: "Timbalisi Ruangan Cathlab", year: 2021, type: "radiation" },
  { client: "RSUD DAYA MAKASSAR", hospital: "RSUD DAYA MAKASSAR", desc: "Ruang OK", year: 2021, type: "operating" },
  { client: "RSUD PROPINSI MANUKWARI", hospital: "RSUD PROPINSI MANUKWARI", desc: "Ruang OK", year: 2021, type: "operating" },
  { client: "RSUD ATAMBUA", hospital: "RSUD ATAMBUA", desc: "Ruang OK", year: 2021, type: "operating" },
  { client: "RS HAJI MEDAN", hospital: "RS HAJI MEDAN", desc: "Pintu dan Kaca Timbal", year: 2021, type: "radiation" },
  { client: "PT. Sandana", hospital: "RS. Dr. H Kumpulan Tebing tinggi", desc: "Timbalisi dan Pengadaan Kaca Pb", year: 2021, type: "radiation" },
  { client: "RS. Bhayangkara Kediri", hospital: "RS. Bhayangkara Kediri", desc: "Timbalisi dan Finishing Ruang Mamografi", year: 2020, type: "radiation" },
  { client: "PT. Sandana", hospital: "RS. Stella Maris MAKASAR", desc: "Timbalisi", year: 2020, type: "radiation" },
  { client: "Berca Indonesia", hospital: "RS. PHC SURABAYA", desc: "Flooring System", year: 2020, type: "flooring" },
  { client: "PT. Panji Cemerlang Indonesia", hospital: "RS. Brawijaya Sahayro, JAKARTA", desc: "Timbalisi, Pengadaan Kaca Pb dan Raisefloor", year: 2020, type: "radiation" },
  { client: "Selaras Tech Indonesia", hospital: "RSAD. Dustria CIMAHI", desc: "Timbalisi Ruang CT-Scan dan Pengadaan Kaca Pb", year: 2019, type: "radiation" },

  // ----- Table 2 -----
  { client: "RSUD Sawerigading Kota Palopo", hospital: "RSUD Sawerigading Kota Palopo", desc: "Ruang Operasi (OK)", year: 2020, type: "operating" },
  { client: "RS. Cicendo Bandung", hospital: "RS. Cicendo Bandung", desc: "Pintu Hermatic", year: 2022, type: "operating" },
  { client: "RSUD RUPIT MUSIRAUS UTARA", hospital: "RSUD RUPIT MUSIRAUS UTARA", desc: "Ruang Operasi (OK)", year: 2023, type: "operating" },
  { client: "RSUD SAYANG CIANJUR", hospital: "RSUD SAYANG CIANJUR", desc: "Ruang Operasi (OK)", year: 2022, type: "operating" },
  { client: "RSUD PANDAN ARANG – BOYOLALI", hospital: "RSUD PANDAN ARANG – BOYOLALI", desc: "Ruang Operasi (OK)", year: 2022, type: "operating" },
  { client: "RSUD SAPTO SARI GUNUNG KIDUL", hospital: "RSUD SAPTO SARI GUNUNG KIDUL", desc: "Ruang Operasi (OK)", year: 2022, type: "operating" },
  { client: "RSUD PANGEDEGAN – PANGANDARAN", hospital: "RSUD PANGEDEGAN – PANGANDARAN", desc: "Pintu Hermatic", year: 2022, type: "operating" },
  { client: "RS. SILOAM", hospital: "RS. SILOAM", desc: "Pintu Hermatic", year: 2022, type: "operating" },
  { client: "RSUD DISTRIK WARIOR PAPUA", hospital: "RSUD DISTRIK WARIOR PAPUA", desc: "Pintu Hermatic", year: 2022, type: "operating" },
  { client: "RSU HANDAYANI LAMPUNG", hospital: "RSU HANDAYANI LAMPUNG", desc: "Pintu Hermatic", year: 2022, type: "operating" },
  { client: "RSCM", hospital: "RSCM", desc: "Pintu Hermatic", year: 2022, type: "operating" },
  { client: "RSUD TERNATE", hospital: "RSUD TERNATE", desc: "Pintu Hermatic", year: 2022, type: "operating" },
  { client: "RSUD LEWILIANG BOGOR", hospital: "RSUD LEWILIANG BOGOR", desc: "Pintu Hermatic", year: 2022, type: "operating" },
  { client: "RSU. ROYAL HOSPITAL JAKARTA", hospital: "RSU. ROYAL HOSPITAL JAKARTA", desc: "Pintu Hermatic", year: 2022, type: "operating" },
  { client: "RS. BHAYANGKARA PALEMBANG", hospital: "RS. BHAYANGKARA PALEMBANG", desc: "Pintu Hermatic", year: 2022, type: "operating" }
];

const PORTFOLIO_TYPES = [
  { id: "all", label: "All Projects" },
  { id: "radiation", label: "Radiation Shielding" },
  { id: "operating", label: "Operating Theater" },
  { id: "imaging", label: "Imaging / Cathlab" },
  { id: "flooring", label: "Flooring System" }
];

const PORTFOLIO_TYPE_LABELS = {
  radiation: "Radiation Shielding",
  operating: "Operating Theater",
  imaging: "Imaging / Cathlab",
  flooring: "Flooring System"
};

window.TF_PORTFOLIO = { PORTFOLIO, PORTFOLIO_TYPES, PORTFOLIO_TYPE_LABELS };
