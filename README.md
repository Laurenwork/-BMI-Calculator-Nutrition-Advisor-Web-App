# 🏃‍♂️ Kalkulator BMI React

Aplikasi kalkulator BMI dengan tema olahraga yang dibangun menggunakan React dan TypeScript.

## ✨ Fitur

- ✅ Kalkulator BMI yang akurat
- ✅ Validasi input yang komprehensif
- ✅ Rekomendasi olahraga berdasarkan kategori BMI
- ✅ Rentang berat ideal
- ✅ Desain responsif dan modern
- ✅ TypeScript untuk type safety
- ✅ CSS Modules untuk styling yang terorganisir
- ✅ Komponen React yang reusable
- ✅ Accessibility features

## 📁 Struktur Proyek

```
bmi-calculator-react/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── HeroBanner/
│   │   │   ├── HeroBanner.tsx
│   │   │   └── HeroBanner.module.css
│   │   ├── InputForm/
│   │   │   ├── InputForm.tsx
│   │   │   └── InputForm.module.css
│   │   └── ResultsDisplay/
│   │       ├── ResultsDisplay.tsx
│   │       └── ResultsDisplay.module.css
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── bmiCalculator.ts
│   ├── App.tsx
│   ├── App.module.css
│   ├── index.tsx
│   └── index.css
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## 🚀 Instalasi dan Menjalankan

### Prerequisites

- Node.js (versi 14 atau lebih baru)
- npm atau yarn

### Langkah-langkah:

1. **Clone atau download proyek ini**

2. **Install dependencies:**

```bash
npm install
```

3. **Jalankan aplikasi:**

```bash
npm start
```

4. **Buka browser dan akses:**

```
http://localhost:3000
```

### Build untuk Production:

```bash
npm run build
```

## 🧩 Komponen Utama

### 🎯 HeroBanner

Header dengan gradient dan emoji olahraga yang menarik.

### 📝 InputForm

Form input untuk tinggi, berat, dan jenis kelamin dengan validasi yang komprehensif.

### 📊 ResultsDisplay

Menampilkan hasil BMI, kategori, rentang berat ideal, dan rekomendasi olahraga.

## 🔧 Utilitas

### bmiCalculator.ts

- `validateInputs()`: Validasi input pengguna
- `calculateBMI()`: Menghitung BMI
- `getCategory()`: Menentukan kategori BMI
- `calculateIdealWeightRange()`: Menghitung rentang berat ideal
- `getRecommendation()`: Rekomendasi olahraga
- `calculateBMIResult()`: Fungsi utama untuk menghitung semua hasil

## 📋 TypeScript Types

- `BMIResult`: Interface untuk hasil BMI
- `UserInput`: Interface untuk input pengguna
- `ValidationError`: Interface untuk error validasi

## 🎨 Styling

Menggunakan CSS Modules untuk styling yang terorganisir dan tidak ada konflik class name.

## ♿ Accessibility

- ARIA labels dan roles
- Focus management
- Screen reader support
- Keyboard navigation

## 🛠️ Scripts yang Tersedia

- `npm start`: Menjalankan aplikasi dalam mode development
- `npm run build`: Build aplikasi untuk production
- `npm test`: Menjalankan test suite
- `npm run eject`: Eject dari Create React App (tidak dapat di-undo)

## 📱 Responsive Design

Aplikasi ini dirancang untuk bekerja dengan baik di:

- 📱 Mobile devices
- 📱 Tablet
- 💻 Desktop
- 🖥️ Large screens

## 🎯 Fitur BMI Calculator

- **Kategori BMI:**

  - Underweight (< 18.5)
  - Normal (18.5 - 24.9)
  - Overweight (25 - 29.9)
  - Obese (≥ 30)

- **Rekomendasi Olahraga:**
  - Underweight: Latihan beban ringan
  - Normal: Rutinitas seimbang
  - Overweight: Kardio + defisit kalori
  - Obese: Kardio ringan + konsultasi ahli

## 🔄 Migrasi dari HTML

Aplikasi ini adalah hasil migrasi dari file HTML sederhana menjadi aplikasi React yang terstruktur dengan:

- **Modular Components**: Setiap bagian UI menjadi komponen terpisah
- **Type Safety**: TypeScript untuk mencegah error
- **Maintainable Code**: Struktur yang mudah dipelihara
- **Reusable Components**: Komponen yang dapat digunakan kembali
- **Modern Development**: Menggunakan React hooks dan best practices
