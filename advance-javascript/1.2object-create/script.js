// Cara untuk membuat object
// 1. Object Literal
// let mahasiswa = {
//   nama: "Gusti Muhammad Adzaky",
//   energi: 10,
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, selamat makan`);
//   },
// };

// 2. Funtion Declaration
// const methodMahasiswa = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, selamat makan!`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Hallo ${this.nama}, selamat bermain!`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Hallo ${this.nama}, selamat tidur!`);
//   },
// };

function mahasiswa(nama, energi) {
  let mhs = {};
  mhs.nama = nama;
  mhs.energi = energi;

  mhs.makan = methodMahasiswa.makan;
  mhs.main = methodMahasiswa.main;
  mhs.tidur = methodMahasiswa.tidur;
  return mhs;
}

let mahasiswa1 = mahasiswa("zaky", 10);
let mahasiswa2 = mahasiswa("enola", 10);

// 3. constructor function
// keyword new
// function mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, selamat makan!`);
//   };

//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Hallo ${this.nama}, selamat bermain!`);
//   };
// }

// let mahasiswa3 = new mahasiswa("ivan", 10);
// let mahasiswa4 = new mahasiswa("najeha", 10);
