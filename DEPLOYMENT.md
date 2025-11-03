# Deployment ke GitHub Pages

## Konfigurasi yang Sudah Diterapkan

### 1. Vite Configuration
- **Base path**: Diatur ke `/` untuk root directory
- **Server**: Dikonfigurasi untuk host `0.0.0.0` dan port `5000`
- File: `vite.config.ts`

### 2. GitHub Pages Files
- `.nojekyll`: Mencegah GitHub Pages memproses file dengan Jekyll
- `public/404.html`: Menangani routing SPA untuk navigasi langsung ke halaman
- `public/.nojekyll`: Backup file .nojekyll yang akan masuk ke dist

### 3. Routing Fix
- Script di `index.html` menangani redirect dari 404.html
- Memungkinkan routing React Router bekerja dengan benar di GitHub Pages

### 4. GitHub Actions Workflow
- File: `.github/workflows/deploy.yml`
- Otomatis build dan deploy saat push ke branch `main`
- Menggunakan Bun untuk instalasi dan build

## Cara Deploy ke GitHub Pages

### Langkah 1: Setup GitHub Repository
1. Push kode ke repository GitHub Anda
2. Pastikan repository bernama `ujanglum-hub.github.io` (atau nama user-pages lainnya)

### Langkah 2: Aktifkan GitHub Pages
1. Pergi ke Settings > Pages di repository GitHub
2. Di bagian "Build and deployment":
   - Source: Pilih **GitHub Actions**

### Langkah 3: Deploy
1. Push perubahan ke branch `main`:
   ```bash
   git add .
   git commit -m "Setup GitHub Pages deployment"
   git push origin main
   ```

2. GitHub Actions akan otomatis:
   - Install dependencies dengan Bun
   - Build aplikasi dengan Vite
   - Deploy ke GitHub Pages

3. Website akan tersedia di: `https://ujanglum-hub.github.io/`

## Build Manual (Opsional)

Untuk build manual:
```bash
bun run build
```

Hasil build akan ada di folder `dist/`

## Build untuk GitHub Pages dengan Base Path Custom

Jika ingin deploy di subdirectory (bukan root), gunakan:
```bash
bun run build:gh-pages
```

## Troubleshooting

### Halaman Putih (Blank)
✅ Sudah diperbaiki dengan:
- File `404.html` untuk routing
- Script redirect di `index.html`
- Base path `/` di vite config

### Routing Tidak Berfungsi
✅ Sudah diperbaiki dengan:
- BrowserRouter configuration
- 404 fallback system
- History API redirect

### Assets Tidak Termuat
✅ Sudah diperbaiki dengan:
- Base path configuration di Vite
- Proper public folder setup

## Catatan Penting

1. **Base URL**: Website akan berjalan di root path `/`
2. **Routing**: Menggunakan BrowserRouter dengan 404 fallback
3. **Build**: Gunakan `bun run build` untuk production build
4. **Deploy**: Otomatis via GitHub Actions saat push ke `main`

## Verifikasi Deployment

Setelah deploy, cek:
1. Homepage: `https://ujanglum-hub.github.io/`
2. Halaman lain: `/shop`, `/about`, dll
3. Refresh halaman (seharusnya tidak error 404)
4. Navigasi langsung ke URL (seharusnya berfungsi)
