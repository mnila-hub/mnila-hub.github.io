# Vite React ShadCN TypeScript Project

## Overview
Proyek ini adalah aplikasi web React dengan TypeScript, menggunakan Vite sebagai build tool dan ShadCN UI sebagai komponen library. Aplikasi ini telah dikonfigurasi untuk di-deploy ke GitHub Pages.

## Recent Changes (November 3, 2025)
- ✅ Migrasi dari Lovable ke Replit
- ✅ Konfigurasi Vite untuk GitHub Pages dengan base directory di root (/)
- ✅ Setup workflow untuk development server di port 5000
- ✅ Dibuat GitHub Actions workflow untuk automatic deployment ke GitHub Pages

## Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite 5
- **Language**: TypeScript
- **UI Components**: ShadCN UI (Radix UI)
- **Styling**: TailwindCSS
- **Package Manager**: Bun
- **Routing**: React Router DOM

## Configuration

### Vite Configuration
- **Base URL**: `/` (root directory untuk GitHub Pages)
- **Dev Server**: Host `0.0.0.0`, Port `5000`
- **Build Command**: `bun run build:gh-pages` untuk GitHub Pages deployment

### GitHub Pages Deployment
1. Push code ke branch `main`
2. GitHub Actions akan otomatis build dan deploy
3. Atau gunakan manual trigger melalui GitHub Actions tab

## Scripts
- `bun run dev` - Start development server
- `bun run build` - Build untuk production
- `bun run build:gh-pages` - Build khusus untuk GitHub Pages (base: /)
- `bun run preview` - Preview production build
- `bun run lint` - Run ESLint

## Project Structure
```
src/
├── components/     # UI components (ShadCN)
├── pages/         # Route pages
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── assets/        # Static assets (images, etc)
```

## GitHub Pages Setup Instructions
1. Di GitHub repository, pergi ke Settings > Pages
2. Source: Pilih "GitHub Actions"
3. Push kode ke branch main
4. Workflow akan otomatis berjalan dan deploy aplikasi
5. Aplikasi akan tersedia di `https://[username].github.io/[repository-name]/`

## Development
Server development berjalan di port 5000 dan dapat diakses melalui Replit webview.
