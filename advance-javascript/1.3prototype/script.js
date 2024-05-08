// function Mahasiswa(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;
// }

// // makan
// Mahasiswa.prototype.makan = function (porsi) {
//   this.energi += porsi;
//   return `selamat makan ${this.nama}`;
// };
// // main
// Mahasiswa.prototype.main = function (jam) {
//   this.energi -= jam;
//   return `Selamat Bermain ${this.nama}`;
// };
// // tidur
// Mahasiswa.prototype.tidur = function (jam) {
//   this.energi += jam;
//   return `Selamat tidur ${this.nama}`;
// };
// let zaky = new Mahasiswa("zaky", 10);

// versi class
class Mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  // makan
  makan = function (porsi) {
    this.energi += porsi;
    return `selamat makan ${this.nama}`;
  };
  // main
  main = function (jam) {
    this.energi -= jam;
    return `Selamat Bermain ${this.nama}`;
  };
  // tidur
  tidur = function (jam) {
    this.energi += jam;
    return `Selamat tidur ${this.nama}`;
  };
}

let zaky = new Mahasiswa("zaky", 10);
