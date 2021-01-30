# jadwalbinusonline.com

Situs dan layanan untuk memberikan jadwal pendaftaran Binus Online Learning (Jakarta).

## Data yang diambil

- Nama Gelombang
- Batas Pendaftaran
- Tanggal Tes Potensi Keberhasilan Studi (TKPS)
- Pengumuman Hasil TKPS
- Orientasi
- Kuliah Perdana

## Mekanisme (MVP)

1. Pengguna menuju ke situs jadwalbinusonline.com
2. Situs jadwalbinusonline.com menampilkan jadwal pendaftaran terkini yang diambil dari [situs jadwal pendaftaran Binus Online Learning (Jakarta)](https://onlinelearning.binus.ac.id/jadwal-pendaftaran-jakarta/).
3. Tersedia pilihan untuk berlangganan jadwal pendaftaran via email untuk memudahkan pengguna sehingga pengguna tidak perlu membuka situs jadwalbinusonline.com atau situs jadwal pendaftaran binus online learning (Jakarta) setiap saat.
4. Untuk berhenti berlangganan bisa dilakukan jika ada info jadwal pendaftaran baru yang masuk ke email pengguna.
5. Fitur layanan berlangganan via email menggunakan Github Action dengan mengecek apakah ada data jadwal pendaftaran baru. **Jadwal hanya dikirim via email bila ada data jadwal pendaftaran terbaru.**