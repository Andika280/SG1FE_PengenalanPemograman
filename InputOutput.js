const input = require('prompt-sync')({ sigint: true})

const salam = "Selamat pagi, "
const nama = input('Masukkan nama kamu: ') // DEKLARASI VARIABEL NAMA SECARA DINAMIS, BISA BERUBAH UBAH
const lahir = Number(input("Masukkan tahun lahir: ")); // DEKLARASI VARIABEL LAHIR DENGAN KONVERSI OUTPUT KE ANGKA
const umur = 2025 - lahir


console.log(salam + nama) // MENCETAK OUTPUT MENGGUNAKAN OPERATOR ARITMATIKA ( + )
console.log(`Selamat pagi (backtics), ${nama}, ${umur}`) // MENCETAK OUTPUT MENGGUNAKAN  BACKTICS