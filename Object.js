const siswa = {
    nama: "Agung",
    umur: 17,
    lulus: true
}

// TERNARY OPERATOR
const lulus = siswa.lulus ? "lulus sekolah" : "tidak lulus sekolah"

console.log(`Ada seorang siswa bernama ${siswa.nama}, umurnya ${siswa.umur}, dan ${lulus}`)