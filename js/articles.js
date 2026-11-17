/* =============================================================
   Trifusion Bionova Medika — Articles Data
   ============================================================= */

const ARTICLE_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "product-insight", label: "Product Insight" },
  { id: "medical-insight", label: "Medical Insight" },
  { id: "healthcare-tips", label: "Healthcare Tips" }
];

const ARTICLES = [
  {
    id: "importance-of-patient-monitoring",
    title: "The Importance of Patient Monitoring in Modern Healthcare",
    category: "product-insight",
    date: "Oct 28, 2025",
    readTime: "5 min read",
    image: "assets/img/Patient Monitor X12.png", /* Sesuaikan dengan path gambar asli Anda */
    excerpt: "Discover why patient monitoring plays a vital role in improving patient outcomes and streamlining hospital workflows.",
    content: `
      <p>Patient monitoring systems have become the backbone of modern healthcare, providing continuous, real-time data on a patient's vital signs. These advanced systems, such as the EDAN X12 Patient Monitor, go beyond simple measurements; they serve as critical early warning systems.</p>
      <h3>Why Continuous Monitoring Matters</h3>
      <p>In critical care settings, a patient's condition can deteriorate rapidly. Continuous monitoring of parameters like ECG, respiration rate, NIBP, and SpO2 ensures that healthcare providers are instantly alerted to any adverse changes. This immediate notification allows for rapid intervention, which can significantly improve survival rates and patient outcomes.</p>
      <h3>Streamlining Workflows</h3>
      <p>Modern patient monitors are designed to integrate seamlessly into hospital networks. By automatically recording and transmitting vital signs to the Hospital Information System (HIS), these devices reduce the manual workload on nursing staff, allowing them to focus more on direct patient care rather than administrative tasks.</p>
    `
  },
  {
    id: "advancements-in-minimally-invasive-surgery",
    title: "Advancements in Minimally Invasive Surgery",
    category: "medical-insight",
    date: "Oct 20, 2025",
    readTime: "6 min read",
    image: "assets/img/Radiologi.jpg", 
    excerpt: "Explore the latest advancements in minimally invasive surgery techniques and the technology that makes them possible.",
    content: `
      <p>Minimally invasive surgery (MIS) has revolutionized the medical field, offering patients shorter recovery times, less pain, and minimal scarring compared to traditional open surgery. This article explores the technological leaps that continue to push the boundaries of what's possible in the operating room.</p>
      <h3>The Role of Advanced Imaging</h3>
      <p>One of the key drivers of MIS is advanced imaging technology. High-resolution ultrasound systems and precise intraoperative monitoring allow surgeons to navigate complex anatomy with unprecedented clarity. The integration of 3D visualization and augmented reality is further enhancing surgical precision.</p>
      <h3>Anesthesia in MIS</h3>
      <p>As surgical techniques evolve, so must anesthesia delivery. Modern anesthesia machines, equipped with precise electronic gas mixing and comprehensive monitoring capabilities, ensure patient safety and comfort throughout these highly specialized procedures.</p>
    `
  },
  {
    id: "tips-for-maintaining-medical-equipment",
    title: "Tips for Maintaining Medical Equipment",
    category: "healthcare-tips",
    date: "Oct 15, 2025",
    readTime: "4 min read",
    image: "assets/img/AcclarixAX3.png", 
    excerpt: "Keep your medical equipment in optimal condition with these essential maintenance tips for hospitals and clinics.",
    content: `
      <p>Proper maintenance of medical equipment is crucial not only for extending the lifespan of the devices but, more importantly, for ensuring patient safety and diagnostic accuracy. Here are essential tips for keeping your healthcare technology in top condition.</p>
      <h3>Regular Calibration</h3>
      <p>Diagnostic tools like ultrasound systems and patient monitors require regular calibration. Adhering to the manufacturer's recommended calibration schedule ensures that the readings remain accurate, preventing potential misdiagnoses.</p>
      <h3>Cleaning and Sterilization</h3>
      <p>Follow strict protocols for cleaning and sterilizing equipment, especially parts that come into direct contact with patients. Use only approved cleaning agents to avoid damaging sensitive electronic components or degrading the materials of probes and sensors.</p>
      <h3>Preventative Maintenance Checks</h3>
      <p>Establish a routine preventative maintenance (PM) schedule. This includes checking for frayed cables, ensuring secure connections, and running diagnostic self-tests on machines like ventilators and anesthesia workstations.</p>
    `
  },
  {
    id: "understanding-patient-ventilator-technology",
    title: "Understanding Patient Ventilator Technology",
    category: "product-insight",
    date: "Oct 10, 2025",
    readTime: "5 min read",
    image: "assets/img/ISUventilatorCriusV3.png", 
    excerpt: "Learn how modern ventilators support better respiratory care in critical conditions.",
    content: `
      <p>Ventilators are life-saving devices that support or completely control a patient's breathing. Understanding the underlying technology helps clinicians optimize respiratory care in the ICU.</p>
      <h3>Turbine-Driven vs. Gas-Driven</h3>
      <p>Modern ventilators often employ turbine-driven technology. Unlike older systems that rely heavily on centralized compressed gas, turbine-driven models like the Crius V3 offer greater independence and mobility, making them ideal for both ICU and transport scenarios.</p>
      <h3>Advanced Ventilation Modes</h3>
      <p>Today's ventilators offer a wide array of modes, from basic CPAP to advanced volume-guaranteed pressure support. These modes allow respiratory therapists to tailor the breathing assistance precisely to the patient's changing clinical needs, promoting faster weaning and recovery.</p>
    `
  }
];

window.ARTICLE_DATA = { ARTICLE_CATEGORIES, ARTICLES };