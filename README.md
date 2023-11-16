## IndoCulturalFinder Frontend (indoculturalfinder-fe)

![image](https://github.com/indoculturalfinder/indoculturalfinder-fe/assets/112412781/463c935b-d0e9-4bae-8b9b-e2829440441a)


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

3. **Menjalankan Proyek dalam Mode Pengembangan**

   ```bash
   npm start
   ```

   Proyek akan berjalan di [http://localhost:9000](http://localhost:9000).

4. **Build untuk Produksi**

   ```bash
   npm run build
   ```

   Hasil build akan ada di direktori `dist`.

### Kontribusi

Kami senang menerima kontribusi! Silakan buka _issues_ untuk melaporkan bug atau usulan fitur, dan beri tahu kami jika Anda ingin berkontribusi dengan membuat _pull request_.

### Lisensi

Proyek ini dilisensikan di bawah [MIT License](./LICENSE).
