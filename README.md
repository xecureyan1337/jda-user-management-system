# User Management System

Aplikasi manajemen pengguna yang dibangun dengan teknologi modern untuk mengelola data user dengan fitur CRUD lengkap.

## 🚀 Fitur Utama

### ✅ CRUD Lengkap
- **Create**: Menambah user baru dengan form validasi
- **Read**: Menampilkan semua user dalam tabel responsif
- **Update**: Edit data user yang sudah ada
- **Delete**: Hapus user dengan konfirmasi

### ✅ Teknologi yang Digunakan
- **Next.js 15** dengan App Router
- **TypeScript** untuk type safety
- **Tailwind CSS** untuk styling modern
- **Prisma ORM** untuk database management
- **Neon PostgreSQL** sebagai database

### ✅ Fitur Tambahan
- Form validasi dengan error handling
- Loading states untuk UX yang lebih baik
- Responsive design untuk mobile dan desktop
- Soft delete dengan konfirmasi
- Auto-refresh setelah operasi CRUD

## 📋 Prasyarat

Sebelum memulai, pastikan Anda memiliki:
- Node.js (versi 18 atau lebih tinggi)
- npm atau yarn atau pnpm
- Akun Neon PostgreSQL

## 🛠️ Instalasi

1. **Clone repository**
```bash
git clone <repository-url>
cd user-management-app
```

2. **Install dependencies**
```bash
npm install
# atau
yarn install
# atau
pnpm install
```

3. **Setup Environment Variables**
Buat file `.env.local` di root directory dan tambahkan:
```env
DATABASE_URL="your-neon-postgresql-connection-string"
NEXTAUTH_SECRET="your-secret-key"
```

4. **Setup Database**
```bash
npx prisma generate
npx prisma db push
```

5. **Jalankan aplikasi**
```bash
npm run dev
# atau
yarn dev
# atau
pnpm dev
```

Aplikasi akan berjalan di [http://localhost:3000](http://localhost:3000)

## 🗂️ Struktur Project

```
user-management-app/
├── app/
│   ├── api/
│   │   └── users/
│   ├── components/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── prisma/
│   └── schema.prisma
├── public/
├── .env.local
├── package.json
└── README.md
```

## 📱 Penggunaan

### Menambah User Baru
1. Klik tombol "Add User" atau "Tambah User"
2. Isi form dengan data yang valid
3. Klik "Save" untuk menyimpan

### Mengedit User
1. Klik tombol "Edit" pada user yang ingin diubah
2. Ubah data yang diperlukan
3. Klik "Update" untuk menyimpan perubahan

### Menghapus User
1. Klik tombol "Delete" pada user yang ingin dihapus
2. Konfirmasi penghapusan pada dialog yang muncul
3. User akan dihapus dari database

## 🔧 Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm run start

# Type checking
npm run type-check

# Linting
npm run lint
```

## 🛡️ Database Schema

```prisma
model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🎨 Styling

Aplikasi menggunakan Tailwind CSS dengan:
- Responsive design untuk semua ukuran layar
- Modern UI components
- Consistent color scheme
- Hover effects dan transitions

## 🔒 Validasi

- Email format validation
- Required field validation
- Duplicate email prevention
- Client-side dan server-side validation

## 📈 Performance

- Server-side rendering dengan Next.js
- Optimized database queries dengan Prisma
- Loading states untuk better UX
- Auto-refresh data setelah operasi

## 📄 License

Distributed under the MIT License. See `LICENSE` file for more information.

## 📞 Support

Jika Anda mengalami masalah atau memiliki pertanyaan, silakan buat issue di repository ini.

---

**Dibuat dengan ❤️ menggunakan Next.js 15 dan TypeScript 🗿**