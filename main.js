const input = require("prompt-sync")({ sigint: true });

console.log("--- Sistem Security Club Coding ---");

const nama = input("Masukkan Nama Kamu: ");
const umur = Number(input("Masukkan Umur Kamu: "));

// Logika Umur
if (umur < 21) {
    const selisih = 21 - umur;
    // Menggunakan Template Literal sesuai materi Object.js
    console.log(`Maaf ${nama}, umur kamu kurang ${selisih} tahun lagi`);
} else {
    // Pesan sementara sebelum logika uang dibuat
    console.log("Umur lolos, lanjut cek uang...");
}