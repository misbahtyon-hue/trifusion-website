# Setup & Panduan — Trifusion Bionova Medika

Panduan menjalankan, mengembangkan, dan mengkustomisasi website company profile **Trifusion Bionova Medika**.

---

## 1. Prasyarat

Website ini murni **HTML, CSS, dan JavaScript** — tidak butuh build tool, Node.js, atau instalasi dependency. Cukup browser modern (Chrome, Firefox, Edge, Safari).

---

## 2. Menjalankan Website

### Opsi A — Buka Langsung (paling cepat)
Klik dua kali file `index.html` untuk membukanya di browser.

> Catatan: sebagian fitur (membaca parameter URL, embed map) paling stabil dijalankan lewat server lokal. Disarankan Opsi B.

### Opsi B — Server Lokal (disarankan)

**Python 3** (biasanya sudah ada di macOS):
```bash
python3 -m http.server 8000
```
Lalu buka: `http://localhost:8000`

**Node.js (npx serve):**
```bash
npx serve
```

**VS Code:** pasang ekstensi **Live Server**, klik kanan `index.html` → "Open with Live Server".

---

## 3. Struktur Singkat

```
index.html · about.html · products.html · product-detail.html · contact.html
css/   → style.css, responsive.css
js/    → products.js, main.js, catalog.js, detail.js, contact.js
assets/img/ → placeholder.svg, favicon.svg
```

Detail lengkap ada di `Structur.md`.

---

## 4. Kustomisasi

### 4.1 Mengganti Warna Brand
Edit CSS variables di bagian atas `css/style.css` (blok `:root`):

```css
--color-primary: #0A2A4A;   /* Deep Medical Blue  */
--color-accent:  #10B5C4;   /* Teal–Cyan          */
```
Seluruh komponen otomatis mengikuti perubahan ini.

### 4.2 Mengganti Logo
Logo saat ini berupa **logo teks + ikon SVG**. Untuk mengganti dengan logo gambar:
1. Simpan file logo di `assets/img/` (mis. `logo.svg`).
2. Pada setiap file HTML, ganti blok `<a class="logo">...</a>` dengan:
   ```html
   <a class="logo" href="index.html"><img src="assets/img/logo.svg" alt="Trifusion Bionova Medika" style="height:40px"></a>
   ```
   (perlu diganti di Header dan Footer tiap halaman)

### 4.3 Mengganti Gambar Placeholder dengan Foto Asli
Saat ini semua gambar memakai `assets/img/placeholder.svg`.

- **Gambar hero / about / overview:** ganti langsung atribut `src` di file HTML terkait.
- **Gambar produk:** edit properti `image` pada tiap objek di `js/products.js`:
  ```js
  {
    id: "tf-defib-x1",
    name: "PulseGuard X1 Defibrillator",
    image: "assets/img/defibrillator.jpg",  // ← ganti di sini
    ...
  }
  ```
  Simpan foto produk di `assets/img/`.

### 4.4 Menambah / Mengubah Produk
Semua produk berada di array `PRODUCTS` dalam `js/products.js`. Template satu produk:

```js
{
  id: "tf-kode-unik",            // unik, dipakai di URL detail
  name: "Nama Produk",
  category: "emergency",          // emergency | critical | imaging | perioperative
  image: "assets/img/placeholder.svg",
  short: "Deskripsi singkat untuk kartu katalog.",
  description: "Deskripsi lengkap untuk halaman detail.",
  features: ["Fitur 1", "Fitur 2", "Fitur 3"],
  specs: { "Spesifikasi": "Nilai", "Berat": "5 kg" }
}
```
Tambah objek baru ke array → katalog, filter, pagination, dan halaman detail otomatis ter-update.

### 4.5 Menambah Kategori Baru
1. Tambahkan ke array `CATEGORIES` dan objek `CATEGORY_LABELS` di `js/products.js`.
2. Gunakan `id` kategori tersebut pada properti `category` produk.

---

## 5. Form Kontak (Penting)

Form kontak saat ini **hanya validasi sisi klien** dan menampilkan pesan sukses (demo). **Belum mengirim email / data ke server.**

Untuk mengaktifkan pengiriman sungguhan, pilih salah satu:
- **EmailJS** — kirim email langsung dari front-end (tanpa backend).
- **Formspree / Web3Forms** — endpoint form siap pakai.
- **Backend sendiri** — kirim via `fetch()` ke API kamu.

Titik integrasi ada di `js/contact.js`, pada bagian setelah komentar `Demo success`.

---

## 6. Mengganti Lokasi Peta

Di `contact.html`, ubah parameter `q=` pada `src` iframe Google Maps:
```html
src="https://www.google.com/maps?q=ALAMAT+ANDA&output=embed"
```

Update juga alamat, telepon, email, dan jam kerja di:
- Bagian Contact Info (`contact.html`)
- Footer (semua halaman)

---

## 7. Catatan Animasi

- **Scroll reveal**: elemen dengan atribut `data-reveal` muncul saat masuk viewport (`js/main.js`).
- **Count-up**: angka statistik (`data-count`) menghitung naik saat terlihat.
- **Reduced motion**: animasi otomatis dinonaktifkan bila user mengaktifkan "reduce motion" di OS-nya.

---

## 8. Deploy

Karena statis, bisa di-host gratis di mana saja:

| Platform | Cara singkat |
|----------|--------------|
| **Netlify** | Drag & drop folder `TRIFUSION/` ke dashboard Netlify |
| **Vercel** | `vercel` di dalam folder, atau import repo |
| **GitHub Pages** | Push ke repo → Settings → Pages → pilih branch |
| **Hosting cPanel** | Upload semua file ke folder `public_html/` |

Pastikan struktur folder (`css/`, `js/`, `assets/`) ikut terbawa saat upload.

---

## 9. Checklist Sebelum Go-Live

- [ ] Ganti semua `placeholder.svg` dengan foto asli (hero, about, produk)
- [ ] Ganti logo teks dengan logo resmi (opsional)
- [ ] Update info kontak (alamat, telepon, email, jam kerja)
- [ ] Update lokasi Google Maps
- [ ] Hubungkan form kontak ke layanan email/backend
- [ ] Update link sosial media di footer
- [ ] Periksa tampilan di mobile, tablet, desktop
- [ ] (Opsional) Tambahkan favicon versi PNG/ICO untuk kompatibilitas lama
