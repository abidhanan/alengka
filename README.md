# Alengka Home Living — Website Katalog

Website katalog furnitur statis (HTML + CSS + JavaScript murni, tanpa build tool).
100% responsif (mobile, tablet, desktop).

**Live:** https://alengka.vercel.app

## Cara Menjalankan

- **Paling mudah:** klik dua kali `index.html` untuk membukanya di browser.
- **Pakai server lokal (disarankan):**
  ```bash
  python -m http.server 5500
  ```
  lalu buka http://localhost:5500

## Deploy ke Vercel

Website di-hosting di Vercel (project `alengka-home-living`, domain `alengka.vercel.app`)
dan terhubung ke repo GitHub ini. **Setiap push ke branch `main` otomatis di-deploy.**

```bash
git add -A
git commit -m "pesan perubahan"
git push
```

Deploy manual tanpa GitHub (opsional): `npx vercel deploy --prod`.

- `.vercelignore` mengatur file yang tidak ikut di-upload.
- `vercel.json` mengalihkan alamat lama `alengka-home-living.vercel.app` ke `alengka.vercel.app`.
- Jika memakai domain sendiri, ganti semua `https://alengka.vercel.app` di `index.html`.
- Setelah mengubah CSS/JS, naikkan angka `?v=` di `index.html` agar browser memuat versi terbaru.

## Struktur Folder

```
alengka/
├── index.html                  ← halaman utama
├── vercel.json                 ← pengaturan Vercel (redirect domain lama)
├── assets/
│   ├── css/style.css           ← semua styling (warna ada di :root)
│   ├── js/products.js          ← DATA PRODUK (nama, harga, spesifikasi, foto)
│   ├── js/main.js              ← interaksi (tab, menu, lightbox, dsb)
│   └── images/
│       ├── hero-bg.webp         ← foto latar hero
│       ├── favicon.svg
│       ├── logo-alengka.webp
│       ├── katalog-warna-100.webp
│       ├── katalog-warna-200-hal1.webp
│       ├── katalog-warna-200-hal2.webp
│       ├── contoh-model-warna.webp
│       ├── og-image.webp       ← gambar pratinjau link (1200x630)
│       └── produk/             ← foto produk: <kategori>-<nama>.webp
└── _src/                       ← foto mentah & script olah (lokal, tidak masuk Git/Vercel)
```

## Mengganti Foto

Cukup **timpa file dengan nama yang sama**. Semua foto memakai `object-fit: cover`,
jadi rasio foto apa pun tetap rapi (tidak gepeng).

| Area | File | Rekomendasi |
|---|---|---|
| Hero | `assets/images/hero-bg.webp` | Landscape, minimal 1920 px lebar |
| Produk | `assets/images/produk/*.webp` | Rasio ±4:5, lebar 800–1000 px |
| Katalog warna | `assets/images/katalog-warna-*.webp` | Portrait |

Jika sebuah foto produk belum ada/terhapus, kartu otomatis menampilkan placeholder
elegan berisi nama produk (tidak ada ikon "gambar rusak").

## Menambah / Mengubah Produk

Buka `assets/js/products.js`. Setiap produk adalah satu baris:

```js
{"cat": "kursi", "name": "Dining Arm Chair", "spec": "Material besi tebal · ...",
 "price": 599000, "img": "assets/images/produk/kursi-dining-arm-chair.webp", "badge": "Terlaris"}
```

- `cat`: `kursi` | `bangku` | `meja` | `set`
- `price`: angka tanpa titik; `null` akan tampil sebagai "Hubungi Kami"
- `from: true` → tampil "Mulai dari"; `oldPrice` → harga coret (promo); `badge` → label pojok foto
- `images` (opsional) → daftar semua foto produk, contoh:
  `"images": ["assets/images/produk/kursi-dining-arm-chair.webp", "assets/images/produk/kursi-dining-arm-chair-2.webp"]`.
  Panah geser di detail produk hanya muncul jika fotonya lebih dari 1.

Jumlah produk per tab dan tombol "Tampilkan Lebih Banyak" menyesuaikan otomatis.

## Mengganti Logo

Di `index.html`, cari komentar `PLACEHOLDER LOGO` lalu ganti `<span class="logo__mark">`
dengan `<img src="assets/images/logo.webp" class="logo__img" alt="Alengka Home Living">`.

## Nomor WhatsApp

Nomor `6288985099829` ada di `index.html` (link `wa.me`) dan di `assets/js/main.js`
(`WA_NUMBER`). Gunakan fitur *Find & Replace* bila ingin mengganti.

## Daftar File Foto Produk

### Kursi & Stool

| File | Produk |
|---|---|
| `kursi-dining-arm-chair.webp` | Dining Arm Chair |
| `kursi-ottoman-palisade.webp` | Kursi Jamur / Ottoman Palisade |
| `kursi-ottoman-arm-palisade.webp` | Kursi Jamur / Ottoman Arm Palisade |
| `kursi-ottoman-palisade-duo.webp` | Kursi Jamur / Ottoman Palisade Duo |
| `kursi-dining-arm-palisade.webp` | Dining Arm Palisade |
| `kursi-lounge-chair.webp` | Lounge Chair |
| `kursi-lounge-chair-santai.webp` | Lounge Chair Santai |
| `kursi-stool-palisade.webp` | Stool Palisade |
| `kursi-kursi-besi-sandaran-kayu.webp` | Kursi Besi Sandaran Kayu |
| `kursi-kursi-aqua-outdoor.webp` | Kursi Aqua Outdoor |
| `kursi-palisade-the-traktor.webp` | Kursi Palisade "The Traktor" |
| `kursi-custom-cafe-padel.webp` | Kursi Custom Cafe & Padel |
| `kursi-kursi-bar-tinggi.webp` | Kursi Bar Tinggi |
| `kursi-kursi-cafe-modern.webp` | Kursi Cafe Modern |
| `kursi-kursi-dudukan-busa.webp` | Kursi Besi Dudukan Busa |
| `kursi-kursi-cafe-lengan.webp` | Kursi Cafe Lengan |
| `kursi-kursi-modern-cafe-slat.webp` | Kursi Modern Cafe Slat |
| `kursi-kursi-makan-stainless.webp` | Kursi Makan Stainless |
| `kursi-kursi-sofa-stainless.webp` | Kursi Sofa Stainless |

### Bangku & Meja Panjang

| File | Produk |
|---|---|
| `bangku-bench-palisade.webp` | Bench Palisade |
| `bangku-bangku-panjang-sandaran-150.webp` | Bangku Panjang Sandaran 150 cm |
| `bangku-bangku-lengan-sandaran.webp` | Bangku Panjang Lengan & Sandaran |
| `bangku-meja-bangku-panjang-150.webp` | Meja & Bangku Panjang 150 cm |

### Meja

| File | Produk |
|---|---|
| `meja-meja-cafe-kaki-tunggal.webp` | Meja Cafe Kaki Tunggal |
| `meja-meja-kaki-tuan-crab.webp` | Meja Kaki Tuan Crab |
| `meja-meja-pendek.webp` | Meja Pendek |
| `meja-meja-spider.webp` | Meja Spider |
| `meja-meja-top-hpl.webp` | Meja Top HPL Kaki Besi |
| `meja-meja-desain-jamur.webp` | Meja Desain Jamur |
| `meja-kaki-meja-besi.webp` | Kaki Meja Besi |
| `meja-meja-cafe-plat-super-tebal.webp` | Meja Cafe Plat Super Tebal |
| `meja-meja-besar-120.webp` | Meja Besar 120 cm |

### Set Meja & Kursi

| File | Produk |
|---|---|
| `set-lounge-tali-anyam.webp` | Set Lounge Tali Anyam |
| `set-kursi-custom-duo-meja.webp` | Set Kursi Custom Duo + Meja |
| `set-kursi-meja-samping.webp` | Set Kursi + Meja Samping |
| `set-palisade-lengan-meja-jamur.webp` | Set Kursi Palisade Lengan & Meja Jamur |
| `set-meja-capit-palisade-lengan.webp` | Set Meja Capit + Kursi Palisade Lengan |
| `set-meja-spider-plat-palisade.webp` | Set Meja Spider + Kursi Plat Palisade |
| `set-meja-taman-6-orang.webp` | Set Meja Taman 6 Orang |
| `set-table-chair-lounge.webp` | Set Table & Chair Lounge |
| `set-meja-hpl-kursi-jok.webp` | Set Meja HPL + Kursi Jok |
| `set-meja-jamur-mushroom.webp` | Set Meja Jamur / Mushroom |
| `set-meja-spider-laba-laba.webp` | Set Meja Spider "Laba Laba" |
| `set-indoor-outdoor-full.webp` | Set Indoor / Outdoor Full |
| `set-meja-cafe-restoran.webp` | Set Meja Cafe & Restoran |
| `set-cafe-kedai.webp` | Set Cafe / Kedai |
| `set-kursi-padel-anyam.webp` | Set Kursi Padel Anyam |
| `set-meja-marmer-payung.webp` | Set Meja Top Marmer + Payung |
| `set-kursi-bar.webp` | Set Kursi Bar |
| `set-promo-cafe-jumlah-banyak.webp` | Promo Set Cafe Jumlah Banyak |
| `set-kursi-jamur-ottoman-lengan.webp` | Set Kursi Jamur Ottoman Lengan |
| `set-meja-kursi-palisade.webp` | Set Meja Kursi Palisade |
| `set-meja-70-4-kursi.webp` | Set Meja 70x70 + 4 Kursi |
| `set-meja-square-plat-tebal.webp` | Set Meja Square Plat Tebal |
| `set-meja-top-plat-kursi-jaring.webp` | Set Meja Top Plat + Kursi Jaring |
| `set-lounge-chair-cafe.webp` | Set Lounge Chair Cafe |
| `set-meja-jamur-bench-120.webp` | Set Meja Jamur + Bench 120 cm |
| `set-tuan-crab-palisade.webp` | Set Meja Tuan Crab + Kursi Palisade |
| `set-meja-kursi-padel.webp` | Set Meja Kursi Padel |
| `set-tuan-crab-kursi-jumbo.webp` | Set Meja Tuan Crab + Kursi Jumbo |
| `set-meja-bundar-60-palisade.webp` | Set Meja Bundar 60 cm + Kursi Palisade |
| `set-meja-square-60.webp` | Set Meja Square 60x60 |
| `set-kursi-jamur-lengan-meja.webp` | Set Kursi Jamur Lengan + Meja |
| `set-meja-square-70-4-kursi.webp` | Set Meja Square 70x70 + 4 Kursi |
| `set-meja-square-2-palisade.webp` | Set Meja Square + 2 Kursi Palisade |
| `set-meja-2-bangku.webp` | Set Meja + 2 Bangku |
| `set-meja-60-2-kursi.webp` | Set Meja 60x60 + 2 Kursi |
| `set-meja-jamur-bangku-sandaran.webp` | Set Meja Jamur + Bangku Sandaran |
| `set-meja-piknik-bangku-panjang.webp` | Set Meja Piknik + Bangku Panjang |
| `set-meja-bundar-stool.webp` | Set Meja Bundar + Stool |
| `set-meja-70-kursi.webp` | Set Meja 70x70 + Kursi |
| `set-meja-square-70-palisade.webp` | Set Meja Square 70x70 + 4 Kursi Palisade |
| `set-meja-square-jumbo-80.webp` | Set Meja Square Jumbo 80x80 |
| `set-sofa-tali-anyam-5-seater.webp` | Set Sofa Tali Anyam 5 Seater |
| `set-cafe-restoran-outdoor.webp` | Set Cafe & Restoran Outdoor |
| `set-meja-70-kursi-lengan.webp` | Set Meja 70x70 + Kursi Lengan |
| `set-meja-bar-panjang-stool.webp` | Set Meja Bar Panjang + Stool |