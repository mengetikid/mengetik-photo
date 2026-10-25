PHOTO STUDIO MENGETIK.ID V2.0
=============================

YANG BARU
1. TEMPLATE TREN 3D (tombol "Template 3D" di layar awal & tombol "Template" di atas)
   - Kartu Cuaca 3D (widget kaca, orang keluar kartu)  - Teks di Belakang (gaya "THIS IS KENYA")
   - Siang & Malam (dua suasana bertukar)                 - Pop-Out Bingkai
   - Polaroid 3D                                           - Sampul Majalah (judul di belakang kepala)
   - Shutter Kota (panning otomatis)                       - Kartu Ganda 3D
   Cara pakai: pilih template -> pilih foto -> AI memisahkan objek otomatis.
   Seret foto dari baris foto ke slot (HP & PC), atau ketuk slot lalu ketuk foto.
   Semua teks bisa diganti (ketuk teks 2x). "Ganti Template" mempertahankan foto.

2. FOKUS AI (tab baru saat edit foto)
   - Masker objek AI: Objek Utama / Semua Orang / Ketuk Objek / Kuas Saja
   - Rapikan: kuas tambah/kurangi, perluas/persempit, haluskan tepi, lihat area objek
   - Efek latar, objek tetap tajam: Shutter/Panning (arah gerak), Zoom Burst, Putar,
     Bokeh Lensa; lampu jadi garis cahaya / bulatan bokeh; terang & warna latar
   - Resep cepat: Panning Mobil Malam, Pelari, Zoom Burst Kota, Potret Bokeh, dll.
   - Teks: opsi "Teks di belakang objek (3D)" untuk foto tunggal.

3. DETAIL & SIMPAN KUALITAS MAKSIMAL
   - Super Resolusi "AI Pro" (model ESRGAN lebih besar, detail rambut/daun lebih tajam)
   - Tombol "Detail Pro": bersihkan noise + pertajam detail halus tanpa halo
   - Preset platform baru (Instagram, Instagram HD 1440, TikTok, Facebook 2048, Threads,
     X, WhatsApp HD, Web) dengan ukuran yang tidak diperkecil ulang oleh platform + tips
   - Penajaman output setelah ubah ukuran: Layar (otomatis) / Layar kuat / Cetak
   - Mode Cetak: pilih ukuran kertas (4R, 5R, 8R, 10R, A4, A3, A2, A1, banner, baliho)
     + DPI (150/200/300). Aplikasi menghitung piksel yang dibutuhkan, memberi peringatan
     bila resolusi kurang, dan menawarkan perbesar dengan AI Pro. DPI ditulis ke file
     (JPEG & PNG) sehingga percetakan membaca ukuran yang benar.

Semua tetap responsif di HP, tablet, laptop & PC, dan semua proses (termasuk AI)
berjalan di perangkat pengguna; foto tidak diunggah ke server.

CARA PASANG (sama seperti Video Studio)
1. GitHub: buat repo baru bernama  mengetik-photo  (Public) di akun mengetikid.
   Unggah file  photo-studio-2.0.js  ke folder utama repo (Add file > Upload files > Commit).
2. Blogger: buka Halaman Photo Edit > Tampilan HTML > hapus seluruh kode lama (V1.2) >
   tempel seluruh isi  photo-studio-mengetik-v2.0.html  > Perbarui.
3. Buka halaman, tekan Ctrl+F5 (HP: tutup lalu buka lagi browser).
   Bila baru diunggah, jsDelivr kadang butuh beberapa menit sebelum file terbaca.

Tidak ada model AI yang perlu diunggah: model diambil dari CDN resmi dan cadangan di
repo mengetik-raw / mengetik-video yang sudah ada. Proyek & foto lama pengguna (V1.2)
tetap terbaca karena memakai penyimpanan yang sama.
