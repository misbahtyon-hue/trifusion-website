/* =============================================================
   Trifusion Bionova Medika — Product Data
   Source: official product catalog (Updated: Opsi 2 — Kategori Medis / SEO & B2B)
   Categories mirror the catalog sheets.
   Extra fields: brand, akl (regulatory status / izin edar alkes).
   ============================================================= */

const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "ultrasound", label: "Ultrasound (USG)" },
  { id: "ventilator", label: "Ventilator" },
  { id: "anesthesia", label: "Anesthesia Machine" },
  { id: "monitoring", label: "Patient Monitoring & ECG" },
  { id: "gynob", label: "Gynecology & Obstetrics" }
];

const CATEGORY_LABELS = {
  ultrasound: "Ultrasound (USG)",
  ventilator: "Ventilator",
  anesthesia: "Anesthesia Machine",
  monitoring: "Patient Monitoring & ECG",
  gynob: "Gynecology & Obstetrics"
};

const PRODUCTS = [
  /* ===================== Ultrasound (USG) — Acclarix ===================== */
  {
    id: "acclarix-ax3",
    name: "Diagnostic Ultrasound AX3 (Portable)",
    category: "ultrasound",
    brand: "Acclarix",
    akl: "AKL",
    image: "assets/img/AcclarixAX3.png",
    short: "Diagnostic ultrasound with outstanding imaging performance in a portable body.",
    description:
      "The Acclarix AX3 delivers outstanding imaging performance in a lightweight, durable design. Built around a 15.6\" LCD medical monitor and a magnesium-alloy body, it pairs fast boot-up with a comprehensive suite of advanced imaging techniques for confident diagnosis.",
    features: [
      "15.6\" LCD medical monitor, 10.1\" touch screen",
      "4.5 kg magnesium alloy body, 180° open angle",
      "Dual transducer ports, fast boot-up within 30 seconds",
      "TAI Tissue Adaptive & eSRI Speckle Reduction Imaging",
      "Harmonic Imaging, Trapezoid Imaging, TDI, Auto IMT"
    ],
    specs: {
      "Brand": "Acclarix",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Monitor": "15.6\" LCD / 10.1\" touch",
      "Storage": "120 GB SSD (up to 1 TB)",
      "Weight": "4.5 kg"
    }
  },
  {
    id: "acclarix-ax9",
    name: "Diagnostic Ultrasound AX9 (Compact)",
    category: "ultrasound",
    brand: "Acclarix",
    akl: "AKL",
    image: "assets/img/AcclarixAX9.png",
    short: "Point-of-care ultrasound in a whole new light, powered by Intel Core i7.",
    description:
      "The Acclarix AX9 reimagines point-of-care ultrasound with a high-resolution LED monitor, large touch screen and powerful Intel Core i7 processing. Its Synsight synthetic focused sonography and battery operation make it ready for demanding clinical environments.",
    features: [
      "15.6\" Full-HD (1920×1080) LED monitor, 12.3\" touch screen",
      "128 physical channels, Intel Core i7, 512 GB SSD (up to 1 TB)",
      "13600 mAh battery (~2 hours typical exam use)",
      "Synsight Synthetic Focused Sonography",
      "Splash-resistant control panel, fast boot-up within 35 seconds"
    ],
    specs: {
      "Brand": "Acclarix",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Monitor": "15.6\" LED 1920×1080 / 12.3\" touch",
      "Channels": "128 physical",
      "Weight": "4.8 kg"
    }
  },
  {
    id: "acclarix-lx3",
    name: "Diagnostic Ultrasound LX3 (Trolley)",
    category: "ultrasound",
    brand: "Acclarix",
    akl: "AKL",
    image: "assets/img/Acclarix LX3.png",
    short: "Reliable color Doppler ultrasound with outstanding imaging performance.",
    description:
      "The Acclarix Lx3 brings outstanding imaging performance to everyday practice. With a 15.6\" LCD medical monitor, magnesium-alloy build and a full set of adaptive imaging tools, it is a dependable choice for a wide range of clinical applications.",
    features: [
      "15.6\" LCD medical monitor, 10.1\" touch screen",
      "4.5 kg magnesium alloy body, 180° open angle",
      "Dual transducer ports, fast boot-up within 30 seconds",
      "TAI Tissue Adaptive & eSRI Speckle Reduction Imaging",
      "Harmonic Imaging, Trapezoid Imaging, TDI, Auto IMT"
    ],
    specs: {
      "Brand": "Acclarix",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Monitor": "15.6\" LCD / 10.1\" touch",
      "Storage": "120 GB SSD (up to 1 TB)",
      "Weight": "4.5 kg"
    }
  },
  {
    id: "acclarix-lx9",
    name: "Diagnostic Ultrasound LX9 (Premium)",
    category: "ultrasound",
    brand: "Acclarix",
    akl: "AKL",
    image: "assets/img/Acclarix LX9.png",
    short: "Premium color Doppler ultrasound empowering precise diagnosis.",
    description:
      "The Acclarix Lx9 is a premium color Doppler ultrasound system designed to empower precise diagnosis. With a GPU-accelerated platform, a 21.5\" high-resolution monitor and five transducer sockets, it supports the most advanced imaging workflows.",
    features: [
      "21.5\" high-resolution LCD monitor",
      "128 physical channels with GPU acceleration",
      "5 transducer sockets, gel warmer, backlit keyboard",
      "1 TB SSD storage, flexible adjustable control panel",
      "Panorama Imaging, Vocal Control, eVol.Flow, Live VF"
    ],
    specs: {
      "Brand": "Acclarix",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Monitor": "21.5\" high-resolution LCD",
      "Channels": "128 physical + GPU",
      "Storage": "1 TB SSD"
    }
  },

  /* ===================== Ventilator — Crius ===================== */
  {
    id: "crius-v3",
    name: "ICU Mechanical Ventilator V3",
    category: "ventilator",
    brand: "Crius",
    akl: "AKL",
    image: "assets/img/ISUventilatorCriusV3.png",
    short: "Turbine-driven ICU ventilator for adult, pediatric and neonatal patients.",
    description:
      "The Crius V3 is a turbine-driven, electronically controlled ICU ventilator suitable for adult, pediatric and neonatal non-invasive ventilation. A 15.6\" TFT touch screen and a broad set of ventilation modes make it versatile across critical-care settings.",
    features: [
      "15.6\" TFT touch screen",
      "NIV for adult, pediatric and neonate",
      "Turbine-driven, fully electronic control",
      "Modes: CPAP, S/T, S, T, PCV, AVAPS, PPV",
      "Standby, screen-lock, calibrate, nebulizer, O₂ suction"
    ],
    specs: {
      "Brand": "Crius",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "ICU Ventilator",
      "Display": "15.6\" TFT touch",
      "Tidal Volume": "50–2500 mL"
    }
  },
  {
    id: "crius-v4",
    name: "Emergency & Transport Ventilator V4",
    category: "ventilator",
    brand: "Crius",
    akl: "AKL",
    image: "assets/img/Transport Ventilator Crius V4.png",
    short: "Compact transport ventilator with ultra-silent turbine and battery operation.",
    description:
      "The Crius V4 is a portable transport ventilator built around an integrated ultra-silent turbine. With an 8.4\" touch screen, invasive and non-invasive modes and a built-in lithium battery, it keeps patients safely ventilated on the move.",
    features: [
      "8.4\" TFT touchscreen",
      "Integrated ultra-silent turbine",
      "IV (invasive) and NIV modes",
      "Built-in lithium battery for transport"
    ],
    specs: {
      "Brand": "Crius",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "Transport Ventilator",
      "Display": "8.4\" TFT touch",
      "Power": "Built-in lithium battery"
    }
  },
  {
    id: "crius-v5",
    name: "NICU Neonatal Ventilator V5",
    category: "ventilator",
    brand: "Crius",
    akl: "AKL",
    image: "assets/img/Neotanal Ventilator Crius V5.png",
    short: "Fully electronic neonatal NIV ventilator with dedicated neonatal modes.",
    description:
      "The Crius V5 is a 12.1\" touchscreen non-invasive neonatal ventilator with fully electronic, pneumatic-electric control. Designed specifically for the most fragile patients, it offers dedicated neonatal ventilation modes and comprehensive safety functions.",
    features: [
      "12.1\" touchscreen NIV neonatal ventilator",
      "Fully electronic, pneumatic-electric control",
      "Modes: NCPAP, NIPPV, SNIPPV, HFNC",
      "Air & O₂ pipeline (280–600 kPa)",
      "Auto FiO₂, inspiratory/expiratory hold, sigh, compliance"
    ],
    specs: {
      "Brand": "Crius",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "Neonatal Ventilator",
      "Display": "12.1\" touch",
      "Gas Supply": "Air, O₂ (280–600 kPa)"
    }
  },
  {
    id: "crius-v6",
    name: "Advanced ICU Ventilator V6",
    category: "ventilator",
    brand: "Crius",
    akl: "AKL",
    image: "assets/img/ICU Ventilator Crius V6.png",
    short: "Advanced ICU ventilator with invasive & non-invasive ventilation modes.",
    description:
      "The Crius V6 is a 15.6\" touchscreen ICU ventilator supporting both invasive and non-invasive ventilation. A turbine-driven design, rotatable display and an extensive range of modes make it a capable platform for complex respiratory care.",
    features: [
      "15.6\" touch screen, rotatable adjustable display",
      "Invasive and non-invasive ventilation",
      "Turbine-driven",
      "Modes: Spn-CPAP, PC-CMV/ACV/SIMV/Dual PAP/AMV/APRV/MMV, VC-CMV/ACV/SIMV",
      "Up to 5 user-configurable waveforms"
    ],
    specs: {
      "Brand": "Crius",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "ICU Ventilator",
      "Display": "15.6\" touch (rotatable)",
      "Gas Mixing": "Electronic Air & O₂"
    }
  },
  {
    id: "crius-v7",
    name: "Neonatal HFOV Ventilator V7",
    category: "ventilator",
    brand: "Crius",
    akl: "AKL",
    image: "assets/img/ICU Neotanal High Frequency Ventilator Crius V7.png",
    short: "Neonatal high-frequency oscillating ventilator with precise FiO₂ control.",
    description:
      "The Crius V7 is a 15.6\" touchscreen neonatal high-frequency oscillating ventilator (HFOV). It delivers high-frequency oscillation with real-time pressure waveforms, high-precision FiO₂ detection and a built-in air/oxygen mixer for stable oxygen concentration.",
    features: [
      "15.6\" touch screen Neonatal HFOV",
      "High-frequency oscillation, HF freq 2–20 Hz",
      "Modes: NCPAP, Duo Vent, NIPPV, SNIPPV, HFNC",
      "Real-time pressure waveform & high-precision FiO₂",
      "Built-in air/oxygen mixer, external abdominal respiration sensor"
    ],
    specs: {
      "Brand": "Crius",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "Neonatal HFOV Ventilator",
      "Display": "15.6\" touch",
      "HF Frequency": "2–20 Hz"
    }
  },

  /* ===================== Anesthesia Machine — Atlas ===================== */
  {
    id: "atlas-n7",
    name: "Anesthesia Workstation N7 (High-End)",
    category: "anesthesia",
    brand: "Atlas",
    akl: "AKL",
    image: "assets/img/Atlas N7.png",
    short: "Premium anesthesia workstation with dual screen and electronic gas mixing.",
    description:
      "The Atlas N7 is a 15.6\" TFT touchscreen anesthesia machine featuring a unique dual-screen design with a rotatable supporting arm. Electronic gas mixing, a metallic breathing system and full electronic control deliver precision and safety in the operating room.",
    features: [
      "15.6\" TFT touch screen, dual-screen rotatable arm",
      "Electronic gas mixer and flow meter",
      "Metallic breathing system, fully electronic self-test",
      "Modes: V-CMV, P-CMV, PSV, SIMV-VC, SIMV-PC, PRVC, Manual/Spont",
      "Spirometry loops (P-V, P-F, F-V); I:E 4:1–1:10; PEEP 0–30 cmH₂O"
    ],
    specs: {
      "Brand": "Atlas",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Display": "15.6\" TFT touch (dual)",
      "Tidal Volume": "5–1500 mL",
      "PEEP": "0–30 cmH₂O"
    }
  },
  {
    id: "atlas-n5",
    name: "Anesthesia Workstation N5 (Standard)",
    category: "anesthesia",
    brand: "Atlas",
    akl: "AKL",
    image: "assets/img/Atlas N4.png",
    short: "Modular anesthesia machine supporting CO2, AG, BIS, NMT and IBP modules.",
    description:
      "The Atlas N5 is a 12.1\" TFT touchscreen modular anesthesia machine that supports plug-in modules for CO₂, AG, BIS, NMT and IBP. With mechanical flow control and a PPSU breathing system, it balances flexibility and reliability for the OR.",
    features: [
      "12.1\" TFT touch screen",
      "Modular: CO₂, AG, BIS, NMT, IBP plug-in modules",
      "Mechanical flow control with digital display",
      "PPSU breathing system design",
      "Modes: VCV, PCV, PSV, SIMV, PRVC, HLM, Manual"
    ],
    specs: {
      "Brand": "Atlas",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Display": "12.1\" TFT touch",
      "Tidal Volume": "10–1500 mL",
      "PEEP": "0–30 cmH₂O"
    }
  },
  {
    id: "atlas-n3",
    name: "Anesthesia Machine N3 (Compact)",
    category: "anesthesia",
    brand: "Atlas",
    akl: "AKL",
    image: "assets/img/Atlas N3.png",
    short: "Compact anesthesia machine with stainless-steel workbench and PPSU system.",
    description:
      "The Atlas N3 is an 8\" TFT LCD anesthesia machine with a large stainless-steel workbench and PPSU breathing system. Mechanical flow control with digital display makes it a dependable, straightforward solution for everyday surgical care.",
    features: [
      "8\" TFT LCD screen",
      "Large stainless-steel workbench",
      "Mechanical flow control, digital display",
      "PPSU breathing system design",
      "Modes: VCV, PCV, PSV, SIMV, PRVC, HLM, Manual"
    ],
    specs: {
      "Brand": "Atlas",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Display": "8\" TFT LCD",
      "Tidal Volume": "20–1500 mL",
      "PEEP": "0–30 cmH₂O"
    }
  },
  {
    id: "atlas-n3-2gas",
    name: "Anesthesia Machine N3 (2-Gas)",
    category: "anesthesia",
    brand: "Atlas",
    akl: "AKL",
    image: "assets/img/Atlas N3.png",
    short: "Atlas N3 configured with a two gas source breathing system.",
    description:
      "The Atlas N3 (2 Gas Source) shares the compact 8\" TFT LCD platform and stainless-steel workbench of the N3, configured with a two gas source breathing system. Mechanical flow control with digital display ensures dependable performance in surgery.",
    features: [
      "8\" TFT LCD screen",
      "Two gas source configuration",
      "Large stainless-steel workbench",
      "PPSU breathing system design",
      "Modes: VCV, PCV, PSV, SIMV, PRVC, HLM, Manual"
    ],
    specs: {
      "Brand": "Atlas",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Display": "8\" TFT LCD",
      "Tidal Volume": "20–1500 mL",
      "Gas Source": "2 gas source"
    }
  },

  /* ===================== Patient Monitoring & ECG — EDAN / NMI ===================== */
  {
    id: "edan-se-301",
    name: "Resting ECG 3-Channel SE-301",
    category: "monitoring",
    brand: "EDAN",
    akl: "AKL",
    image: "assets/img/EGCSE-301.png",
    short: "3-channel resting ECG with touch screen and built-in thermal printer.",
    description:
      "The EDAN SE-301 is a compact 3-channel resting ECG with a 5\" touch screen and one-button operation. A built-in thermal printer with roll paper makes it a fast, easy-to-use solution for routine cardiac assessment.",
    features: [
      "3-channel ECG",
      "5\" touch screen, one-button operation",
      "Built-in thermal printer (roll paper)"
    ],
    specs: {
      "Brand": "EDAN",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "Resting ECG",
      "Channels": "3-channel",
      "Display": "5\" touch"
    }
  },
  {
    id: "edan-se-1200-express",
    name: "Resting ECG 12-Channel SE-1200",
    category: "monitoring",
    brand: "EDAN",
    akl: "AKL",
    image: "assets/img/EGCSE-1200.png",
    short: "12-channel resting ECG with Glasgow / SEMIP interpretation.",
    description:
      "The EDAN SE-1200 Express is a 12-channel resting ECG with a folding 8.4\" LCD touch screen. It supports Glasgow and SEMIP interpretation algorithms for reliable, automated cardiac analysis.",
    features: [
      "12-channel ECG",
      "Folding 8.4\" LCD touch screen",
      "Glasgow / SEMIP interpretation"
    ],
    specs: {
      "Brand": "EDAN",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "Resting ECG",
      "Channels": "12-channel",
      "Display": "8.4\" LCD touch (folding)"
    }
  },
  {
    id: "edan-se-1201-pro",
    name: "Resting ECG Pro SE-1201",
    category: "monitoring",
    brand: "EDAN",
    akl: "AKL",
    image: "assets/img/EGCRESTING.png",
    short: "Intelligent tabletop 12/18-channel ECG with DICOM support.",
    description:
      "The EDAN SE-1201 Pro is an intelligent tabletop ECG offering professional 12-channel cardiac scanning with calculated 18-channel ECG. A folding 10.4\" LCD touch screen, Glasgow / SEMIP interpretation and DICOM connectivity support advanced cardiology workflows.",
    features: [
      "12-channel ECG, calculated 18-channel",
      "Folding 10.4\" LCD touch screen",
      "Glasgow / SEMIP interpretation",
      "DICOM connectivity"
    ],
    specs: {
      "Brand": "EDAN",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "Resting ECG (Tabletop)",
      "Channels": "12 / calc. 18-channel",
      "Display": "10.4\" LCD touch (folding)"
    }
  },
  {
    id: "edan-ise-1201-pro",
    name: "Portable PAD ECG iSE-1201 Pro",
    category: "monitoring",
    brand: "EDAN",
    akl: "On Process",
    image: "assets/img/EGCISE-1201pad.png",
    short: "Portable 12/18-channel PAD ECG with WiFi/eSIM, HIS and DICOM.",
    description:
      "The EDAN iSE-1201 Pro is a portable PAD-style ECG with a 10.1\" full touch display. With built-in WiFi/eSIM connectivity plus HIS and DICOM support, it brings 12/18-channel ECG capability to flexible, on-the-go cardiac assessment.",
    features: [
      "12/18-channel ECG",
      "10.1\" LCD full touch screen, portable",
      "Built-in WiFi / eSIM",
      "HIS and DICOM support"
    ],
    specs: {
      "Brand": "EDAN",
      "Reg. Status (AKL)": "On process",
      "Type": "PAD ECG (Portable)",
      "Channels": "12 / 18-channel",
      "Connectivity": "WiFi / eSIM, HIS, DICOM"
    }
  },
  {
    id: "nmi-se-1515n-stress",
    name: "Cardiac Stress-Test System SE-1515N",
    category: "monitoring",
    brand: "NMI",
    akl: "AKD",
    image: "assets/img/Stress-Test ECG SE-1515N.png",
    short: "Stress-test ECG system with DP12 sampling box and treadmill workflow.",
    description:
      "The SE-1515N is a stress-test ECG system combining ECG software with a DP12 wired sampling box for 9/12-lead testing. Designed for exercise stress testing, it integrates with a treadmill runner for complete cardiac stress assessment.",
    features: [
      "SE-1515N stress-test ECG software",
      "DP12 wired sampling box (9/12-lead)",
      "Includes 12-lead ECG cable",
      "Treadmill-based stress workflow (treadmill excluded)"
    ],
    specs: {
      "Brand": "NMI",
      "Reg. Status (AKL)": "AKD",
      "Type": "Stress-Test ECG",
      "Leads": "9 / 12-lead",
      "Sampling": "DP12 wired box"
    }
  },
  {
    id: "edan-se-2003a-holter",
    name: "Ambulatory Holter ECG SE-2003A",
    category: "monitoring",
    brand: "EDAN",
    akl: "AKL",
    image: "assets/img/EGCHolter.png",
    short: "Holter ECG recording system with analysis software and workstation.",
    description:
      "The EDAN SE-2003A Holter System provides continuous ambulatory ECG recording for cardiac arrhythmia analysis. Supplied as a recorder kit (IEC) with a 7-electrode ECG cable, it is available in multi-recorder configurations with Holter analysis software and a PC workstation.",
    features: [
      "SE-2003A Holter recorder kit (IEC)",
      "7-electrode ECG cable",
      "Multi-recorder configurations (5 recorders)",
      "Holter analysis software with PC workstation"
    ],
    specs: {
      "Brand": "EDAN",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "Holter ECG System",
      "Cable": "7-electrode",
      "Software": "Holter analysis + workstation"
    }
  },
  {
    id: "edan-sa-10",
    name: "Ambulatory Blood Pressure Monitor SA-10",
    category: "monitoring",
    brand: "EDAN",
    akl: "On Process",
    image: "assets/img/ABP Monitor SA-10.png",
    short: "Ultra-lightweight ambulatory blood pressure monitor, IP22 rated.",
    description:
      "The EDAN SA-10 is an ambulatory blood pressure monitor (ABPM) with an ultra-lightweight design for patient comfort over 24-hour monitoring. An IP22 water- and dust-proof rating supports reliable everyday use.",
    features: [
      "Ambulatory blood pressure monitoring (ABPM)",
      "Ultra-lightweight design",
      "IP22 water- and dust-proof level"
    ],
    specs: {
      "Brand": "EDAN",
      "Reg. Status (AKL)": "On process",
      "Type": "ABP Monitor",
      "Rating": "IP22 water/dust-proof"
    }
  },
  {
    id: "edan-sa-20",
    name: "2-in-1 Holter & ABP Monitor SA-20",
    category: "monitoring",
    brand: "EDAN",
    akl: "On Process",
    image: "assets/img/Holter & ABP 2-in-1 Monitor SA-20.png",
    short: "2-in-1 system combining Holter ECG and ambulatory blood pressure monitoring.",
    description:
      "The EDAN SA-20 is a 2-in-1 system that combines Holter ECG and ambulatory blood pressure monitoring in a single device, streamlining cardiac and blood-pressure assessment for ambulatory patients.",
    features: [
      "2-in-1 Holter ECG + ABP system",
      "Ambulatory monitoring",
      "Single compact device"
    ],
    specs: {
      "Brand": "EDAN",
      "Reg. Status (AKL)": "On process",
      "Type": "Holter & ABP (2-in-1)"
    }
  },
  {
    id: "edan-x12",
    name: "Patient Monitor X12 (12-Inch)",
    category: "monitoring",
    brand: "EDAN",
    akl: "AKL",
    image: "assets/img/Patient Monitor X12.png",
    short: "Entry-level compact patient monitor with 12.1\" display and full parameters.",
    description:
      "The EDAN X12 is an entry-level compact patient monitor with a 12.1\" color TFT screen displaying up to 13 waveforms. It measures ECG, respiration, NIBP, SpO₂, temperature and pulse rate, with a dual dust-filter NIBP design and simultaneous SpO₂/NIBP measurement on the same limb.",
    features: [
      "12.1\" color TFT, up to 13 waveforms",
      "Parameters: 3/5-lead ECG, RESP, NIBP, SpO₂, 2-TEMP, PR",
      "Dual dust-filter NIBP, unique cleaning mode",
      "Simultaneous SpO₂ & NIBP on same limb",
      "Perfusion Index (PI) reference 0–10"
    ],
    specs: {
      "Brand": "EDAN",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Display": "12.1\" TFT (800×600)",
      "Parameters": "ECG, RESP, NIBP, SpO₂, 2-TEMP, PR",
      "Weight": "< 3.5 kg"
    }
  },
  {
    id: "edan-x10",
    name: "Patient Monitor X10 (10-Inch)",
    category: "monitoring",
    brand: "EDAN",
    akl: "AKL",
    image: "assets/img/Patient Monitor X10.png",
    short: "Compact patient monitor with 10.1\" display and full vital-sign parameters.",
    description:
      "The EDAN X10 is an entry-level compact patient monitor with a 10.1\" color TFT screen showing up to 13 waveforms. Lightweight and full-featured, it offers ECG, respiration, NIBP, SpO₂, temperature and pulse rate monitoring for flexible bedside use.",
    features: [
      "10.1\" color TFT, up to 13 waveforms",
      "Parameters: 3/5-lead ECG, RESP, NIBP, SpO₂, 2-TEMP, PR",
      "Dual dust-filter NIBP, unique cleaning mode",
      "Simultaneous SpO₂ & NIBP on same limb",
      "Perfusion Index (PI) reference 0–10"
    ],
    specs: {
      "Brand": "EDAN",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Display": "10.1\" TFT (800×480)",
      "Parameters": "ECG, RESP, NIBP, SpO₂, 2-TEMP, PR",
      "Weight": "< 2.8 kg"
    }
  },
  {
    id: "edan-im3-basic",
    name: "Vital Sign Monitor iM3 (Basic)",
    category: "monitoring",
    brand: "EDAN",
    akl: "AKL",
    image: "assets/img/VitalSign.png",
    short: "8\" full-touch vital sign monitor with scoring system and battery.",
    description:
      "The EDAN iM3 Basic is an 8\" full-touch vital sign monitor offering monitoring, spot-check and rounds work modes. With an integrated early-warning score system, NIBP, SpO₂ and battery operation, it supports efficient ward workflows.",
    features: [
      "8\" full touch screen",
      "Monitoring, spot-check and rounds modes",
      "Early-warning score system",
      "NIBP, SpO₂, battery operation"
    ],
    specs: {
      "Brand": "EDAN",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "Vital Sign Monitor",
      "Display": "8\" full touch",
      "Parameters": "NIBP, SpO₂"
    }
  },
  {
    id: "edan-im3-advance",
    name: "Vital Sign Monitor iM3 (Advance)",
    category: "monitoring",
    brand: "EDAN",
    akl: "AKL",
    image: "assets/img/Vital Sign Monitor iM3 Advance with Stand.png",
    short: "Advanced vital sign monitor with WiFi, printer and ear thermometer.",
    description:
      "The EDAN iM3 Advance builds on the iM3 platform with WiFi connectivity, an integrated printer and ear thermometer. Available with an optional rolling stand (wall mount optional), it adapts to a variety of clinical settings.",
    features: [
      "WiFi connectivity",
      "NIBP, SpO₂, ear thermometer",
      "Integrated printer and battery",
      "Optional rolling stand / wall mount"
    ],
    specs: {
      "Brand": "EDAN",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "Vital Sign Monitor",
      "Connectivity": "WiFi",
      "Parameters": "NIBP, SpO₂, Temp"
    }
  },
  {
    id: "edan-h100b",
    name: "Handheld Pulse Oximeter H100B",
    category: "monitoring",
    brand: "EDAN",
    akl: "On Process",
    image: "assets/img/Hand-held Pulse Oximeter H100B.png",
    short: "Hand-held pulse oximeter with LCD screen and flexible SpO₂ sensor options.",
    description:
      "The EDAN H100B is a hand-held pulse oximeter with an LCD screen for fast, portable SpO₂ measurement. Available with adult or Nellcor neonatal SpO₂ sensors and an optional battery charger stand for ward use.",
    features: [
      "LCD screen, hand-held design",
      "Adult SpO₂ sensor (neonatal optional)",
      "Nellcor neonatal SpO₂ sensor option",
      "Optional battery charger stand"
    ],
    specs: {
      "Brand": "EDAN",
      "Reg. Status (AKL)": "On process",
      "Type": "Hand-held Pulse Oximeter",
      "Sensors": "Adult / Neonatal (Nellcor)"
    }
  },

  /* ===================== Gynecology & Obstetrics — EDAN / NMI ===================== */
  {
    id: "edan-c6a-basic",
    name: "Digital Video Colposcope C6A (Basic)",
    category: "gynob",
    brand: "EDAN",
    akl: "AKL",
    image: "assets/img/Video Colposcope C6A Basic with Swing Arm Stand.png",
    short: "Video colposcope with swing-arm stand and included software.",
    description:
      "The EDAN C6A Basic is a video colposcope supplied with a swing-arm stand and included software for gynecological examination and imaging. (PC excluded.)",
    features: [
      "Main unit with swing-arm stand",
      "Examination software included",
      "PC excluded"
    ],
    specs: {
      "Brand": "EDAN",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "Video Colposcope",
      "Stand": "Swing-arm"
    }
  },
  {
    id: "edan-c6a-advance",
    name: "Digital Video Colposcope C6A (Advance)",
    category: "gynob",
    brand: "EDAN",
    akl: "AKL",
    image: "assets/img/Video Colposcope C6A Advance with PC Tray.png",
    short: "Video colposcope with PC tray stand and included software.",
    description:
      "The EDAN C6A Advance is a video colposcope configured with a PC tray stand and included examination software, ready to integrate into a dedicated gynecology workstation. (PC/monitor excluded.)",
    features: [
      "Main unit with PC tray stand",
      "Examination software included",
      "PC / monitor excluded"
    ],
    specs: {
      "Brand": "EDAN",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "Video Colposcope",
      "Stand": "PC tray"
    }
  },
  {
    id: "edan-sd3",
    name: "Pocket Fetal Doppler SD3",
    category: "gynob",
    brand: "EDAN",
    akl: "AKL",
    image: "assets/img/Pocket Doppler SD3.png",
    short: "Ultrasonic pocket fetal Doppler with waterproof interchangeable probe.",
    description:
      "The EDAN SD3 is an ultrasonic pocket Doppler for fetal heart detection, featuring a 3 MHz waterproof interchangeable probe. An optional vascular probe extends its versatility.",
    features: [
      "Ultrasonic pocket Doppler",
      "3 MHz waterproof interchangeable probe",
      "Optional vascular probe"
    ],
    specs: {
      "Brand": "EDAN",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "Pocket Doppler",
      "Probe": "3 MHz waterproof"
    }
  },
  {
    id: "edan-sd6",
    name: "Table-Top Fetal Doppler SD6",
    category: "gynob",
    brand: "EDAN",
    akl: "On Process",
    image: "assets/img/Table Doppler SD6.png",
    short: "Table-top fetal Doppler with 2.7\" LCD and wireless Bluetooth probe.",
    description:
      "The EDAN SD6 is a table-top fetal Doppler with a 2.7\" LCD screen and a 3 MHz wireless interchangeable probe. Bluetooth wireless probe technology offers freedom of movement during examination.",
    features: [
      "2.7\" LCD screen",
      "3 MHz wireless interchangeable probe",
      "Bluetooth wireless probe technology"
    ],
    specs: {
      "Brand": "EDAN",
      "Reg. Status (AKL)": "On process",
      "Type": "Table Doppler",
      "Probe": "3 MHz wireless (Bluetooth)"
    }
  },
  {
    id: "edan-f12-twin",
    name: "Twin Fetal Monitor (CTG) F12",
    category: "gynob",
    brand: "EDAN / NMI",
    akl: "AKL",
    image: "assets/img/Fetal & Maternal Monitor F12.jpg",
    short: "Twin fetal monitor with 2 FHR probes and 13.3\" color touch screen.",
    description:
      "The EDAN F12 Twin is a fetal & maternal monitor supplied with two FHR probes and one Toco probe for twin monitoring. A 13.3\" color touch screen and probe rack on a new platform support comfortable obstetric care.",
    features: [
      "Twin monitoring: 2 FHR probes + 1 Toco probe",
      "13.3\" color touch screen",
      "Probe rack, new platform",
      "Wired probe configuration"
    ],
    specs: {
      "Brand": "EDAN / NMI",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "Fetal & Maternal Monitor",
      "Display": "13.3\" color touch",
      "Probes": "2× FHR + 1× Toco"
    }
  },
  {
    id: "edan-f15-twin",
    name: "Advanced Twin Fetal Monitor (CTG) F15",
    category: "gynob",
    brand: "EDAN / NMI",
    akl: "AKL",
    image: "assets/img/Fetal & Maternal Monitor F15.png",
    short: "Twin fetal monitor with 2 FHR probes and 15.6\" color touch screen.",
    description:
      "The EDAN F15 Twin is a fetal & maternal monitor with two FHR probes and one Toco probe for twin monitoring, featuring a larger 15.6\" color touch screen, probe rack and new platform for clear, comfortable monitoring.",
    features: [
      "Twin monitoring: 2 FHR probes + 1 Toco probe",
      "15.6\" color touch screen",
      "Probe rack, new platform",
      "Wired probe configuration"
    ],
    specs: {
      "Brand": "EDAN / NMI",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "Fetal & Maternal Monitor",
      "Display": "15.6\" color touch",
      "Probes": "2× FHR + 1× Toco"
    }
  },
  {
    id: "edan-f15-air",
    name: "Wireless Fetal & Maternal Monitor F15 Air",
    category: "gynob",
    brand: "EDAN / NMI",
    akl: "AKL",
    image: "assets/img/Fetal & Maternal Monitor F15 Air.png",
    short: "Wireless twin fetal & maternal monitor with maternal ECG, NIBP and SpO₂.",
    description:
      "The EDAN F15 Air is a twin fetal & maternal monitor with wireless waterproof FHR probes plus maternal monitoring (ECG, NIBP, SpO₂). It features a 15.6\" color touch screen, probe rack and trolley (MT-811) for complete obstetric surveillance.",
    features: [
      "Wireless waterproof 2 FHR probes + 1 Toco probe",
      "Maternal ECG, NIBP, SpO₂",
      "15.6\" color touch screen, probe rack",
      "Includes trolley (MT-811)"
    ],
    specs: {
      "Brand": "EDAN / NMI",
      "Reg. Status (AKL)": "Registered (AKL)",
      "Type": "Fetal & Maternal Monitor (Wireless)",
      "Display": "15.6\" color touch",
      "Maternal": "ECG, NIBP, SpO₂"
    }
  }
];

/* Expose globally for non-module scripts */
window.TF_DATA = { CATEGORIES, CATEGORY_LABELS, PRODUCTS };