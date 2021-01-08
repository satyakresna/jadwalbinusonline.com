# jadwalbinusonline.com

Jadwal Daftar Binus Online Learning (Jakarta).

## Data yang diambil

- Nama Gelombang (mis: Gelombang November) => nama_gelombang
- Pendaftaran sampai dengan => batas_pendaftaran
- Test Potensi Keberhasilan Studi => tanggal_tkps
- Pengumuman Hasil TKPS => pengumuman_tkps
- Orientasi => orientasi
- Perkuliahan Perdana => kuliah_perdana

## Mekanisme (MVP)

- Ambil data
- Taruh dalam json
- Pakai GitHub Action
- Kirim ke email setiap kali ada pendaftaran gelombang baru.
- Ada opsi untuk berlangganan jadwal daftar dan berhenti berlangganan. Isi nama dan email.

## Tech Stack

- Crawler (NodeJS, JSDOM)
- Scheduler (kirim email) pakai GitHub Action