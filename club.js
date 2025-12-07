const input = require("prompt-sync")({ sigint: true });

console.log("--- Sistem Security Club Coding ---");

const nama = input("Masukkan Nama Kamu: ");
const umur = Number(input("Masukkan Umur Kamu: "));

// Logika Umur
if (umur < 21) {
    const selisih = 21 - umur;
    console.log(`Maaf ${nama}, umur kamu kurang ${selisih} tahun lagi`);
} else {
    // Jika umur >= 21, baru kita tanya uang
    const uang = Number(input("Masukkan Jumlah Uang: "));

    // Logika Uang
    if (uang < 500000) {
        console.log(`Maaf ${nama}, uang kamu cuma ${uang}, datang lagi lain kali`);
    } else {
        console.log(`Selamat datang ${nama}`) ; 
    }
}