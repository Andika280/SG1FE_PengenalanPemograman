
const input = require("prompt-sync")({ sigint: true });

const nilai = Number(input('Masukkan nilai siswa: '))


// PROGRAM MENGECEK KATEGORI NILAI TAMBAHAN OPERATOR LOGIKA (AND DAN OR)
if (nilai > 85) { // MENGECEK APAKAH NILAI LEBIH DARI/DIATAS 85
    console.log("Kategori A")
} else if (nilai >= 80 && nilai <= 85) { // MENGECEK APAKAH NILAI ADA DI RENTANG 80 - 85
    console.log("Kategori B")
}
