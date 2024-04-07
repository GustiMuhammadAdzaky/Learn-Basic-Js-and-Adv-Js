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
function mahasiswa(nama, energi) {
  mhs = {};
  mhs.nama = nama;
  mhs.energi = energi;
  mhs.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama}, selamat makan!`);
  };

  mhs.main = function (jam) {
    this.energi -= jam;
    console.log(`Hallo ${this.nama}, selamat bermain!`);
  };
  return mhs;
}

let mahasiswa1 = mahasiswa("zaky", 10);
let mahasiswa2 = mahasiswa("enola", 10);

// 3. constructor function
// keyword new
function mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama}, selamat makan!`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Hallo ${this.nama}, selamat bermain!`);
  };
}

let mahasiswa3 = new mahasiswa("ivan", 10);
let mahasiswa4 = new mahasiswa("najeha", 10);
