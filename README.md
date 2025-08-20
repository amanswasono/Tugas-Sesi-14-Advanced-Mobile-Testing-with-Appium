# 🧪 Tugas Sesi 14 – Advanced Mobile Testing with Appium

Proyek ini merupakan implementasi **Mobile Automation Testing** menggunakan **Appium** dan **WebdriverIO (WDIO)** untuk menguji aplikasi Android secara otomatis.  
Pengujian dijalankan melalui framework **Mocha**, dengan integrasi **Allure Report** untuk visualisasi hasil test. Project ini juga otomatis mengambil screenshot jika terjadi kegagalan saat test berlangsung.

---

## 📌 Teknologi yang Digunakan
- **Node.js** – JavaScript runtime environment  
- **Appium** – Mobile automation framework  
- **WebdriverIO** – Framework untuk menjalankan automation test  
- **Mocha** – Test runner untuk JavaScript  
- **Allure Report** – Reporting tool untuk visualisasi hasil test  
- **Chai** – Library assertion  

---

## 📂 Struktur Proyek
```
.
├── allure-results/         # Hasil mentah test untuk Allure
├── allure-report/          # Laporan visual hasil test
├── screenshots/            # Screenshot dari test yang gagal
├── test/                   # File test automation
├── wdio.conf.js            # Konfigurasi WebdriverIO dan Appium
├── package.json
├── .gitignore
└── README.md
```

---

## ⚙️ Instalasi

### 1. Pastikan Node.js terinstal
```bash
node -v
npm -v
```

### 2. Clone repository
```bash
git clone https://github.com/username/tugas-sesi-14-appium.git
cd tugas-sesi-14-appium
```

### 3. Install semua dependencies
```bash
npm install
```

### 4. Pastikan Appium telah terinstal
```bash
npm install -g appium
```

### 5. Jalankan Appium server di terminal baru
```bash
appium
```

---

## 📱 Konfigurasi Device
Edit file **wdio.conf.js** sesuai dengan konfigurasi emulator/device kamu:
```js
'appium:deviceName': '7e220a28',       // Ganti sesuai device kamu
'appium:platformVersion': '15',        // Ganti dengan versi Android
```

Cek apakah device terhubung:
```bash
adb devices
```

---

## ▶️ Menjalankan Test
Untuk menjalankan automation test:
```bash
npm test
```

Setelah test selesai, hasil akan otomatis disimpan ke folder **allure-results/** dan screenshot (jika ada error) di folder **screenshots/**.

---

## 📊 Melihat Laporan Allure

### Generate laporan Allure
```bash
npm run allure:generate
```

### Buka laporan di browser
```bash
npm run allure:open
```

Allure akan membuka tampilan dashboard test di browser default.

---

## 📸 Screenshot Otomatis
Project ini akan mengambil screenshot otomatis jika test gagal.  
File screenshot akan disimpan di dalam folder:

```
/screenshots/
```

---

## 🧪 Skenario Pengujian (Contoh)
Skenario aktual tergantung isi file test kamu di folder **/test**.

1. Membuka aplikasi Android ApiDemos  
2. Menjalankan langkah-langkah uji pada fitur/komponen aplikasi  
3. Verifikasi hasil dengan assertion menggunakan chai  
4. Ambil screenshot jika assertion gagal  

---

## 🔧 Script yang Tersedia
| Perintah | Fungsi |
|----------|--------|
| `npm test` | Menjalankan test dengan konfigurasi dari wdio.conf.js |
| `npm run allure:generate` | Generate laporan hasil test |
| `npm run allure:open` | Membuka laporan Allure di browser |

---

## ✍️ Author
**Aman Swasono**  
*Tugas Sesi 14 – Advanced Mobile Testing with Appium*
