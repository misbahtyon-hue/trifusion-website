# Structur Website — Trifusion Bionova Medika

Dokumentasi struktur file, halaman, dan komponen website company profile **Trifusion Bionova Medika**.

---

## 1. Struktur Folder & File

```
TRIFUSION/
├── index.html              # Homepage
├── about.html              # Halaman About Us
├── products.html           # Product Catalog (filter, search, pagination)
├── product-detail.html     # Detail Product (konten dirender via JS dari ?id=)
├── contact.html            # Halaman Contact Us (form + map)
│
├── css/
│   ├── style.css           # Stylesheet utama + design system (tokens, komponen)
│   └── responsive.css      # Media queries (tablet & mobile)
│
├── js/
│   ├── products.js         # Data 12 produk + kategori (single source of truth)
│   ├── main.js             # Navbar, mobile menu, scroll reveal, count-up, footer year
│   ├── catalog.js          # Logika katalog: filter, search, pagination, empty state
│   ├── detail.js           # Render detail produk + related products dari URL ?id=
│   └── contact.js          # Validasi form kontak + pesan sukses
│
├── assets/
│   └── img/
│       ├── placeholder.svg # Placeholder gambar produk (ganti dgn foto asli)
│       └── favicon.svg     # Favicon brand
│
├── Structur.md             # Dokumen ini
└── Setup.md                # Panduan menjalankan & kustomisasi
```

---

## 2. Peta Halaman (Sitemap)

| # | Halaman | File | Section Utama |
|---|---------|------|---------------|
| 1 | Home | `index.html` | Hero, About Preview, Our Solutions, CTA Banner |
| 2 | About Us | `about.html` | Page Hero, Company Overview, Vision & Mission, Core Values, CTA |
| 3 | Product Catalog | `products.html` | Page Hero, Filter & Search, Product Grid, Empty State, Pagination |
| 4 | Detail Product | `product-detail.html` | Image, Title, Category, Description, Features, Specs, CTA, Related Products |
| 5 | Contact Us | `contact.html` | Page Hero, Contact Info, Contact Form, Map |

---

## 3. Detail Section per Halaman

### 1) Home — `index.html`
| Section | Komponen | Animasi |
|---------|----------|---------|
| Hero | Badge, headline, lead, 2 tombol, 3 statistik count-up, visual + floating card | Float, count-up, reveal |
| About Preview | Media + badge persentase, checklist, tombol | Reveal kiri/kanan |
| Our Solutions | 4 kartu (Emergency, Critical, Imaging, Peri-operative) | Hover lift, stagger reveal |
| CTA Banner | Headline + 2 tombol | Reveal |

### 2) About Us — `about.html`
| Section | Komponen |
|---------|----------|
| Page Hero | Breadcrumb + judul + subjudul |
| Company Overview | Media + teks + 3 statistik count-up |
| Vision & Mission | Kartu Visi (accent) + kartu Misi (list bernomor) |
| Core Values | 4 kartu nilai (Integrity, Innovation, Compassion, Excellence) |
| CTA Banner | Ajakan + tombol |

### 3) Product Catalog — `products.html`
| Komponen | Keterangan |
|----------|------------|
| Filter Kategori | Tombol: All, Emergency, Critical, Imaging, Peri-operative (render via JS) |
| Search | Live search (debounce 200ms) by nama, deskripsi, kategori |
| Product Grid | Kartu: image, category badge, title, short description, link detail |
| Empty State | Muncul saat hasil 0, ada tombol "Reset Filters" |
| Pagination | 9 produk per halaman, prev/next + nomor |

### 4) Detail Product — `product-detail.html`
| Komponen | Keterangan |
|----------|------------|
| Sumber data | `?id=<product-id>` dibaca dari URL, dicari di `PRODUCTS` |
| Konten | Image, Category badge, Title, Description, Key Features, Specs table, CTA |
| CTA | Tombol "Request Quote" → `contact.html?product=<id>` (auto-fill form) |
| Related Products | Hingga 3 produk dari kategori yang sama |
| Not Found | Tampilan fallback bila id tidak ditemukan |

### 5) Contact Us — `contact.html`
| Komponen | Keterangan |
|----------|------------|
| Contact Info | Alamat, telepon, email, jam kerja |
| Contact Form | Name, Email, Subject, Message + validasi JS |
| Success Message | Tampil setelah submit valid (demo, tanpa backend) |
| Map | Embed Google Maps (iframe) |

---

## 4. Komponen Global

| Komponen | Lokasi | Catatan |
|----------|--------|---------|
| Header / Navbar | Semua halaman | Sticky, efek shrink saat scroll, active link otomatis |
| Mobile Menu | Semua halaman | Burger + slide-in panel + backdrop |
| Footer | Semua halaman | Brand, quick links, solutions, kontak, sosial, tahun otomatis |
| Logo Teks | Header & Footer | Mark gradient + teks "Trifusion Bionova / Medika" |

---

## 5. Alur Data Produk

```
js/products.js  (window.TF_DATA: CATEGORIES, CATEGORY_LABELS, PRODUCTS)
        │
        ├──> js/catalog.js   → render grid + filter + search + pagination
        │
        └──> js/detail.js    → render detail (by ?id=) + related products
```

Untuk menambah / mengubah produk, cukup edit array `PRODUCTS` di `js/products.js`.
Semua halaman katalog & detail otomatis mengikuti.

---

## 6. Teknologi

| Layer | Teknologi |
|-------|-----------|
| Markup | HTML5 semantik |
| Styling | CSS3 murni (custom properties, grid, flexbox) — tanpa framework |
| Interaksi | Vanilla JavaScript (ES6, tanpa dependency) |
| Font | Google Fonts: Plus Jakarta Sans (heading), Inter (body) |
| Ikon | Inline SVG (line icon) |
| Tema | Light theme |
