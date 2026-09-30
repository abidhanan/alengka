/* =========================================================
   DATA PRODUK — Alengka Home Living
   ---------------------------------------------------------
   Edit, tambah, atau hapus produk di sini. Tiap produk:
     cat      : "kursi" | "bangku" | "meja" | "set"
     name     : nama produk
     spec     : keterangan singkat / spesifikasi
     price    : harga (angka, tanpa titik). null = "Hubungi Kami"
     from     : true  -> tampil "Mulai dari"
     oldPrice : harga coret (opsional, untuk promo)
     badge    : label kecil di pojok foto (opsional)
     img      : foto utama -> assets/images/produk/<kategori>-<nama>.webp
     images   : (opsional) daftar semua foto produk, termasuk foto utama.
                Jika lebih dari 1 foto, detail produk menampilkan panah geser.
   ========================================================= */
window.ALENGKA_PRODUCTS = [
  {"cat": "kursi", "name": "Dining Arm Chair", "spec": "Material besi tebal · Lebar 45/50 cm · Tinggi 80/83 cm", "price": 599000, "img": "assets/images/produk/kursi-dining-arm-chair.webp", "images": ["assets/images/produk/kursi-dining-arm-chair.webp", "assets/images/produk/kursi-dining-arm-chair-2.webp"], "badge": "Terlaris"},
  {"cat": "kursi", "name": "Kursi Jamur / Ottoman Palisade", "spec": "Besi tebal · Lebar dudukan 60 cm · Tinggi dudukan 38 cm", "price": 698000, "img": "assets/images/produk/kursi-ottoman-palisade.webp"},
  {"cat": "kursi", "name": "Kursi Jamur / Ottoman Arm Palisade", "spec": "Lebar 50 cm · Tinggi dudukan 38 cm · Finishing bisa request", "price": 698000, "img": "assets/images/produk/kursi-ottoman-arm-palisade.webp"},
  {"cat": "kursi", "name": "Kursi Jamur / Ottoman Palisade Duo", "spec": "Lebar 60 cm · Tinggi dudukan 38 cm · Finishing bisa request", "price": 650000, "img": "assets/images/produk/kursi-ottoman-palisade-duo.webp"},
  {"cat": "kursi", "name": "Dining Arm Palisade", "spec": "Plat besi tebal · Tinggi 80/83 cm · Dudukan 45 x 45 cm", "price": 650000, "img": "assets/images/produk/kursi-dining-arm-palisade.webp"},
  {"cat": "kursi", "name": "Lounge Chair", "spec": "Bahan pipa & plat besi tebal", "price": 950000, "img": "assets/images/produk/kursi-lounge-chair.webp"},
  {"cat": "kursi", "name": "Lounge Chair Santai", "spec": "Desain lebih santai, ukuran lebih panjang", "price": 980000, "img": "assets/images/produk/kursi-lounge-chair-santai.webp"},
  {"cat": "kursi", "name": "Stool Palisade", "spec": "Bahan plat besi tebal · Ukuran 45 x 45 cm", "price": 495000, "img": "assets/images/produk/kursi-stool-palisade.webp", "images": ["assets/images/produk/kursi-stool-palisade.webp", "assets/images/produk/kursi-stool-palisade-2.webp"]},
  {"cat": "kursi", "name": "Kursi Besi Sandaran Kayu", "spec": "Dudukan & sandaran kayu · Finishing jati / TPK", "price": 650000, "img": "assets/images/produk/kursi-kursi-besi-sandaran-kayu.webp"},
  {"cat": "kursi", "name": "Kursi Aqua Outdoor", "spec": "Full outdoor · Plat & pipa besi tebal", "price": 645000, "img": "assets/images/produk/kursi-kursi-aqua-outdoor.webp"},
  {"cat": "kursi", "name": "Kursi Palisade \"The Traktor\"", "spec": "Full plat besi tebal", "price": 695000, "img": "assets/images/produk/kursi-palisade-the-traktor.webp"},
  {"cat": "kursi", "name": "Kursi Custom Cafe & Padel", "spec": "Desain custom · Harga per pcs", "price": 790000, "img": "assets/images/produk/kursi-custom-cafe-padel.webp"},
  {"cat": "kursi", "name": "Kursi Bar Tinggi", "spec": "Tinggi dudukan 70/75 cm · Lebar 45 cm", "price": 759000, "img": "assets/images/produk/kursi-kursi-bar-tinggi.webp"},
  {"cat": "kursi", "name": "Kursi Cafe Modern", "spec": "Rangka besi, sandaran lengkung", "price": 650000, "img": "assets/images/produk/kursi-kursi-cafe-modern.webp"},
  {"cat": "kursi", "name": "Kursi Besi Dudukan Busa", "spec": "Rangka besi · Dudukan & sandaran busa", "price": 699000, "img": "assets/images/produk/kursi-kursi-dudukan-busa.webp"},
  {"cat": "kursi", "name": "Kursi Cafe Lengan", "spec": "Rangka besi dengan lengan · Warna bisa request", "price": 750000, "img": "assets/images/produk/kursi-kursi-cafe-lengan.webp"},
  {"cat": "kursi", "name": "Kursi Modern Cafe Slat", "spec": "Desain slat modern, cocok untuk cafe", "price": 698000, "img": "assets/images/produk/kursi-kursi-modern-cafe-slat.webp"},
  {"cat": "kursi", "name": "Kursi Makan Stainless", "spec": "Rangka stainless · Bahan kain bisa request", "price": 1698000, "img": "assets/images/produk/kursi-kursi-makan-stainless.webp"},
  {"cat": "kursi", "name": "Kursi Sofa Stainless", "spec": "Rangka stainless finishing gold · Harga per pcs", "price": 3998000, "img": "assets/images/produk/kursi-kursi-sofa-stainless.webp", "images": ["assets/images/produk/kursi-kursi-sofa-stainless.webp", "assets/images/produk/kursi-kursi-sofa-stainless-2.webp"], "badge": "Premium"},
  {"cat": "bangku", "name": "Bench Palisade", "spec": "Ukuran di foto 120 cm · Panjang bisa request", "price": 985000, "img": "assets/images/produk/bangku-bench-palisade.webp"},
  {"cat": "bangku", "name": "Bangku Panjang Sandaran 150 cm", "spec": "Bahan besi plat tebal · Panjang 150 cm", "price": 1598000, "img": "assets/images/produk/bangku-bangku-panjang-sandaran-150.webp"},
  {"cat": "bangku", "name": "Bangku Panjang Lengan & Sandaran", "spec": "Desain custom · Cocok indoor & outdoor", "price": 2798000, "img": "assets/images/produk/bangku-bangku-lengan-sandaran.webp"},
  {"cat": "bangku", "name": "Meja & Bangku Panjang 150 cm", "spec": "Meja Rp1.590.000 · Bangku Rp1.450.000 · Full plat besi tebal", "price": 1450000, "img": "assets/images/produk/bangku-meja-bangku-panjang-150.webp", "from": true},
  {"cat": "meja", "name": "Meja Cafe Kaki Tunggal", "spec": "Diameter 60 cm · Ukuran bisa request", "price": 950000, "img": "assets/images/produk/meja-meja-cafe-kaki-tunggal.webp"},
  {"cat": "meja", "name": "Meja Kaki Tuan Crab", "spec": "Diameter 60 cm · Plat besi tebal", "price": 1100000, "img": "assets/images/produk/meja-meja-kaki-tuan-crab.webp"},
  {"cat": "meja", "name": "Meja Pendek", "spec": "Tinggi 45/50 cm · Diameter 50 cm", "price": 798000, "img": "assets/images/produk/meja-meja-pendek.webp"},
  {"cat": "meja", "name": "Meja Spider", "spec": "Diameter 60 cm · Kaki besi model spider", "price": 998000, "img": "assets/images/produk/meja-meja-spider.webp"},
  {"cat": "meja", "name": "Meja Top HPL Kaki Besi", "spec": "Top meja HPL · Warna bisa request", "price": 1095000, "img": "assets/images/produk/meja-meja-top-hpl.webp"},
  {"cat": "meja", "name": "Meja Desain Jamur", "spec": "Diameter 60 cm", "price": 998000, "img": "assets/images/produk/meja-meja-desain-jamur.webp"},
  {"cat": "meja", "name": "Kaki Meja Besi", "spec": "Plat besi tebal · Jumlah banyak lebih hemat · Harga per pcs", "price": 635000, "img": "assets/images/produk/meja-kaki-meja-besi.webp"},
  {"cat": "meja", "name": "Meja Cafe Plat Super Tebal", "spec": "Plat besi super tebal", "price": 998000, "img": "assets/images/produk/meja-meja-cafe-plat-super-tebal.webp"},
  {"cat": "meja", "name": "Meja Besar 120 cm", "spec": "Cocok untuk restoran, taman, ruang belajar", "price": 1898000, "img": "assets/images/produk/meja-meja-besar-120.webp"},
  {"cat": "set", "name": "Set Lounge Tali Anyam", "spec": "Rangka besi tebal, dudukan tali anyam · Meja 60 x 60 cm", "price": 2698000, "img": "assets/images/produk/set-lounge-tali-anyam.webp", "badge": "Favorit"},
  {"cat": "set", "name": "Set Kursi Custom Duo + Meja", "spec": "Desain custom · Bahan plat besi tebal", "price": 1898000, "img": "assets/images/produk/set-kursi-custom-duo-meja.webp"},
  {"cat": "set", "name": "Set Kursi + Meja Samping", "spec": "Satu set meja & kursi · Besi tebal", "price": 989000, "img": "assets/images/produk/set-kursi-meja-samping.webp"},
  {"cat": "set", "name": "Set Kursi Palisade Lengan & Meja Jamur", "spec": "Kursi Rp2.298.000 · Meja Rp2.198.000 · Harga proyek bisa disesuaikan", "price": 2198000, "img": "assets/images/produk/set-palisade-lengan-meja-jamur.webp", "from": true},
  {"cat": "set", "name": "Set Meja Capit + Kursi Palisade Lengan", "spec": "Meja 70 x 70 cm · Dudukan 45/50 cm", "price": 3398000, "img": "assets/images/produk/set-meja-capit-palisade-lengan.webp"},
  {"cat": "set", "name": "Set Meja Spider + Kursi Plat Palisade", "spec": "Diameter meja 80 cm · Bisa 1 meja + 2 kursi", "price": 3498000, "img": "assets/images/produk/set-meja-spider-plat-palisade.webp"},
  {"cat": "set", "name": "Set Meja Taman 6 Orang", "spec": "Meja, bangku, stool & kursi lounge", "price": 4778000, "img": "assets/images/produk/set-meja-taman-6-orang.webp"},
  {"cat": "set", "name": "Set Table & Chair Lounge", "spec": "4 kursi lounge + meja", "price": 4298000, "img": "assets/images/produk/set-table-chair-lounge.webp"},
  {"cat": "set", "name": "Set Meja HPL + Kursi Jok", "spec": "Dudukan & sandaran jok · Bahan kain bisa request", "price": 2898000, "img": "assets/images/produk/set-meja-hpl-kursi-jok.webp"},
  {"cat": "set", "name": "Set Meja Jamur / Mushroom", "spec": "Meja Ø60 cm, tinggi 60 cm · Kursi lebar 60 cm", "price": 2198000, "img": "assets/images/produk/set-meja-jamur-mushroom.webp"},
  {"cat": "set", "name": "Set Meja Spider \"Laba Laba\"", "spec": "Meja, stool & meja tanaman", "price": 2898000, "img": "assets/images/produk/set-meja-spider-laba-laba.webp"},
  {"cat": "set", "name": "Set Indoor / Outdoor Full", "spec": "Indoor Rp1.250.000 · Outdoor Rp1.898.000 (per bangku)", "price": 1250000, "img": "assets/images/produk/set-indoor-outdoor-full.webp", "images": ["assets/images/produk/set-indoor-outdoor-full.webp", "assets/images/produk/set-indoor-outdoor-full-2.webp"], "from": true},
  {"cat": "set", "name": "Set Meja Cafe & Restoran", "spec": "Untuk cafe, restoran, padel, rumah makan, villa", "price": null, "img": "assets/images/produk/set-meja-cafe-restoran.webp", "badge": "Proyek"},
  {"cat": "set", "name": "Set Cafe / Kedai", "spec": "Lebih hemat · Tahan karat & awet", "price": 3698000, "img": "assets/images/produk/set-cafe-kedai.webp"},
  {"cat": "set", "name": "Set Kursi Padel Anyam", "spec": "Cocok untuk padel · Promo sampai akhir tahun", "price": 6598000, "img": "assets/images/produk/set-kursi-padel-anyam.webp", "oldPrice": 8989000, "badge": "Promo"},
  {"cat": "set", "name": "Set Meja Top Marmer + Payung", "spec": "Top marmer Carrara asli · Payung bisa dilipat", "price": 7995000, "img": "assets/images/produk/set-meja-marmer-payung.webp", "badge": "Premium"},
  {"cat": "set", "name": "Set Kursi Bar", "spec": "Meja Rp998.000 · Kursi Rp650.000", "price": 650000, "img": "assets/images/produk/set-kursi-bar.webp", "from": true},
  {"cat": "set", "name": "Promo Set Cafe Jumlah Banyak", "spec": "Harga promo untuk pembelian set dalam jumlah banyak", "price": null, "img": "assets/images/produk/set-promo-cafe-jumlah-banyak.webp", "badge": "Promo"},
  {"cat": "set", "name": "Set Kursi Jamur Ottoman Lengan", "spec": "Kursi jamur Ottoman dengan lengan tangan", "price": 3598000, "img": "assets/images/produk/set-kursi-jamur-ottoman-lengan.webp"},
  {"cat": "set", "name": "Set Meja Kursi Palisade", "spec": "Besi tebal · Free finishing, bisa request", "price": 2398000, "img": "assets/images/produk/set-meja-kursi-palisade.webp"},
  {"cat": "set", "name": "Set Meja 70x70 + 4 Kursi", "spec": "Meja 70 x 70 cm, tinggi 75 cm · 4 kursi", "price": 3398000, "img": "assets/images/produk/set-meja-70-4-kursi.webp"},
  {"cat": "set", "name": "Set Meja Square Plat Tebal", "spec": "Meja square plat tebal · 4 kursi palisade", "price": 3398000, "img": "assets/images/produk/set-meja-square-plat-tebal.webp"},
  {"cat": "set", "name": "Set Meja Top Plat + Kursi Jaring", "spec": "Top meja plat besi tebal · Kursi model jaring", "price": 3498000, "img": "assets/images/produk/set-meja-top-plat-kursi-jaring.webp"},
  {"cat": "set", "name": "Set Lounge Chair Cafe", "spec": "Lebar kursi 55/60 cm · Tinggi dudukan 40/45 cm", "price": 2498000, "img": "assets/images/produk/set-lounge-chair-cafe.webp"},
  {"cat": "set", "name": "Set Meja Jamur + Bench 120 cm", "spec": "Meja jamur + bench panjang 120 cm", "price": 3198000, "img": "assets/images/produk/set-meja-jamur-bench-120.webp"},
  {"cat": "set", "name": "Set Meja Tuan Crab + Kursi Palisade", "spec": "Meja kaki tuan crab · 2 kursi palisade lengan", "price": 2298000, "img": "assets/images/produk/set-tuan-crab-palisade.webp"},
  {"cat": "set", "name": "Set Meja Kursi Padel", "spec": "Meja bundar + 2 kursi lounge", "price": 2898000, "img": "assets/images/produk/set-meja-kursi-padel.webp"},
  {"cat": "set", "name": "Set Meja Tuan Crab + Kursi Jumbo", "spec": "Finishing warna duco · Warna bisa request", "price": 2398000, "img": "assets/images/produk/set-tuan-crab-kursi-jumbo.webp"},
  {"cat": "set", "name": "Set Meja Bundar 60 cm + Kursi Palisade", "spec": "Meja bundar 60 cm · Kursi lebar 45 cm", "price": 2198000, "img": "assets/images/produk/set-meja-bundar-60-palisade.webp"},
  {"cat": "set", "name": "Set Meja Square 60x60", "spec": "Meja 60 x 60 cm · 2 kursi palisade", "price": 2198000, "img": "assets/images/produk/set-meja-square-60.webp"},
  {"cat": "set", "name": "Set Kursi Jamur Lengan + Meja", "spec": "Kursi jamur dengan lengan · Finishing bisa request", "price": 2298000, "img": "assets/images/produk/set-kursi-jamur-lengan-meja.webp"},
  {"cat": "set", "name": "Set Meja Square 70x70 + 4 Kursi", "spec": "Meja 70 x 70 cm · 4 kursi", "price": 3498000, "img": "assets/images/produk/set-meja-square-70-4-kursi.webp"},
  {"cat": "set", "name": "Set Meja Square + 2 Kursi Palisade", "spec": "Meja square · 2 kursi palisade", "price": 2298000, "img": "assets/images/produk/set-meja-square-2-palisade.webp"},
  {"cat": "set", "name": "Set Meja + 2 Bangku", "spec": "Meja bilah + 2 bangku", "price": 2598000, "img": "assets/images/produk/set-meja-2-bangku.webp"},
  {"cat": "set", "name": "Set Meja 60x60 + 2 Kursi", "spec": "Meja 60 x 60 cm · Kursi lebar 45 cm", "price": 1998000, "img": "assets/images/produk/set-meja-60-2-kursi.webp"},
  {"cat": "set", "name": "Set Meja Jamur + Bangku Sandaran", "spec": "Meja jamur · Bangku sandaran 120 cm", "price": 3498000, "img": "assets/images/produk/set-meja-jamur-bangku-sandaran.webp"},
  {"cat": "set", "name": "Set Meja Piknik + Bangku Panjang", "spec": "Meja panjang + 2 bangku · Cocok untuk cafe & taman", "price": 4298000, "img": "assets/images/produk/set-meja-piknik-bangku-panjang.webp"},
  {"cat": "set", "name": "Set Meja Bundar + Stool", "spec": "Meja bundar + 2 stool", "price": 1889000, "img": "assets/images/produk/set-meja-bundar-stool.webp"},
  {"cat": "set", "name": "Set Meja 70x70 + Kursi", "spec": "Meja 70 x 70 cm · Dudukan 45 x 45 cm", "price": 3398000, "img": "assets/images/produk/set-meja-70-kursi.webp"},
  {"cat": "set", "name": "Set Meja Square 70x70 + 4 Kursi Palisade", "spec": "Meja square 70 x 70 cm · 4 kursi palisade", "price": 3398000, "img": "assets/images/produk/set-meja-square-70-palisade.webp"},
  {"cat": "set", "name": "Set Meja Square Jumbo 80x80", "spec": "Meja 80 x 80 cm · Kursi palisade lengan", "price": 3598000, "img": "assets/images/produk/set-meja-square-jumbo-80.webp"},
  {"cat": "set", "name": "Set Sofa Tali Anyam 5 Seater", "spec": "Bangku 150 cm + 2 kursi 60 cm · Tali anyam & top meja bisa request", "price": 8898000, "img": "assets/images/produk/set-sofa-tali-anyam-5-seater.webp", "badge": "Premium"},
  {"cat": "set", "name": "Set Cafe & Restoran Outdoor", "spec": "Bangku panjang, meja & 2 kursi", "price": 4298000, "img": "assets/images/produk/set-cafe-restoran-outdoor.webp"},
  {"cat": "set", "name": "Set Meja 70x70 + Kursi Lengan", "spec": "Meja 70 x 70 cm · Dudukan 50 cm, tinggi 45 cm", "price": 3498000, "img": "assets/images/produk/set-meja-70-kursi-lengan.webp"},
  {"cat": "set", "name": "Set Meja Bar Panjang + Stool", "spec": "Meja panjang dengan top bundar · Stool palisade", "price": null, "img": "assets/images/produk/set-meja-bar-panjang-stool.webp"}
];
