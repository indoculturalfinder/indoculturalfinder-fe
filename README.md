<p align="center">
    <a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/indoculturalfinder/infoculturalfinder-be/main/storage/img/Animation%20-%201702738212790.gif" width="150" alt="Laravel Logo"></a>
    <a href="https://laravel.com" target="_blank"><img src="https://github.com/indoculturalfinder/indoculturalfinder-fe/assets/112412781/463c935b-d0e9-4bae-8b9b-e2829440441a" width="150" alt="Laravel Logo"></a>
</p>

## IndoCulturalFinder Frontend (indoculturalfinder-fe)


IndoCulturalFinder Frontend (indoculturalfinder-fe) adalah proyek frontend untuk aplikasi IndoCulturalFinder. Aplikasi ini bertujuan untuk memberikan informasi mengenai budaya Indonesia, seperti makanan, tarian, pakaian adat, dan upacara adat.

### Teknologi dan Standarisasi

- **JavaScript**: Proyek ini menggunakan standar proyek JavaScript.
- **Module Bundler**: Menggunakan module bundler untuk mengelola dependensi dan mengatur distribusi kode.
- **PWA (Progressive Web App)**: Dengan menggunakan fitur PWA, aplikasi ini dapat diakses secara offline dan memberikan pengalaman yang lebih baik kepada pengguna.

### Struktur Direktori

```
indoculturalfinder-fe/
|-- src/
|   |-- public/
|   |   |-- images/
|   |   |-- icons/
|   |   |-- app.webmanifest
|   |   |-- favicon.png
|   |-- styles/
|   |-- scripts/
|   |   |-- components/
|   |   |-- data/
|   |   |-- globals/
|   |   |-- routes/
|   |   |-- utils/
|   |   |-- views/
|   |   |-- index.js
|   |   |-- sw.js
|   |-- templates/
|-- package.json
|-- postcss.config.js
|-- tailwind.config.js
|-- webpack.common.js
|-- webpack.dev.js
|-- webpack.prod.js
|-- README.md
```

### Cara Menjalankan Proyek

1. **Clone Repositori**

   ```bash
   git clone https://github.com/indoculturalfinder/indoculturalfinder-fe.git
   cd indoculturalfinder-fe
   ```

2. **Install Dependensi**

   ```bash
   npm install
   ```

3. **Menjalankan Tailwind CSS**
   ```
   npm run tailwind
   ```

4. **Menjalankan Proyek dalam Mode Pengembangan**

   ```bash
   npm run start-dev
   ```

   Proyek akan berjalan di [http://localhost:9000](http://localhost:9000).

5. **Build untuk Produksi**

   ```bash
   npm run build
   ```

   Hasil build akan ada di direktori `dist`.

5. **Menjalankan Server untuk Mengakses Hasil Build**
   ```
   npm run serve
   ```

8. **Mengelola Perubahan Menggunakan Git**
   ```
   git commit -m "Pesan commit Anda"
   git push origin master
   git pull origin master
   ```

### Lisensi

Proyek ini dilisensikan di bawah [MIT License](./LICENSE).
