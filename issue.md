# Setup Project Backend: Elysia.js + Drizzle ORM + MySQL

Dokumen ini berisi panduan high-level untuk menginisialisasi dan men-setup project backend menggunakan Bun, Elysia.js, Drizzle ORM, dan database MySQL. Instruksi ini ditujukan untuk programmer atau AI model untuk dieksekusi langkah demi langkah.

## 1. Inisialisasi Project
- Lakukan inisialisasi project Bun di direktori ini (misalnya menggunakan `bun init`).
- Pastikan struktur dasar project dan `package.json` sudah terbentuk.

## 2. Instalasi Dependensi
Instal library yang dibutuhkan:
- **Framework Utama**: `elysia`
- **Database & ORM**: `drizzle-orm`, driver MySQL untuk Bun (seperti `mysql2` atau driver lain yang direkomendasikan Drizzle)
- **Development**: `drizzle-kit` (untuk manajemen schema dan migrasi), serta types yang diperlukan.

## 3. Konfigurasi Database & Drizzle
- Buat file koneksi database MySQL menggunakan Drizzle.
- Definisikan setidaknya satu schema tabel sederhana (contoh: tabel `users`) untuk memverifikasi koneksi dan fungsionalitas ORM.
- Buat konfigurasi Drizzle Kit (misal: `drizzle.config.ts`).
- Siapkan script npm/bun di `package.json` untuk melakukan `generate` dan `push`/`migrate` skema ke database.

## 4. Konfigurasi Server Elysia
- Buat file entry point (contoh: `src/index.ts`).
- Setup instance server Elysia.js.
- Buat routing sederhana:
  - Endpoint `GET /` untuk memastikan server berjalan.
  - Endpoint (misal: `GET /users`) yang melakukan query ke database MySQL via Drizzle untuk memastikan integrasi berhasil.

## 5. Variabel Environment
- Gunakan file `.env` untuk menyimpan string koneksi database MySQL (`DATABASE_URL`).
- Sediakan juga file `.env.example` sebagai referensi.
- Pastikan file `.env` masuk ke dalam `.gitignore`.

## Definition of Done (Kriteria Selesai)
- Terdapat instruksi cara menjalankan project (misal: `bun run dev`).
- Server dapat berjalan tanpa error dan merespons request HTTP.
- ORM dapat melakukan koneksi ke MySQL dan berhasil mengeksekusi operasi baca/tulis sederhana ke dalam tabel.
