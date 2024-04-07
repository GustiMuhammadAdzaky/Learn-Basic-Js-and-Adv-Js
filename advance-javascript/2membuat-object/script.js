// Membuat Object
// Object Literal
let mhs1 = {
  nama: "Gusti Muhammad Adzaky",
  nim: "181220091",
  email: "zakygustu@gmail.com",
  jurusan: "Teknik Informatika",
};
let mhs2 = {
  nama: "Gusti Achmad Fikri",
  nim: "23xxxxx",
  email: "lorem@gmail.com",
  jurusan: "Teknik Sipil",
};

// function deklaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
  let mhs = {};
  mhs.nama = nama;
  mhs.nim = nim;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

const mhs3 = buatObjectMahasiswa("bibi", "xxxxxxx", "bibi@gmail.com", "sma");

// Constructor
function BuatObjectMahasiswaConstructor(nama, nim, email, jurusan) {
  this.nama = nama;
  this.nim = nim;
  this.email = email;
  this.jurusan = jurusan;
}

const mhs4 = new BuatObjectMahasiswaConstructor(
  "coba nama",
  "coba nim",
  "coba email",
  "coba jurusan"
);
