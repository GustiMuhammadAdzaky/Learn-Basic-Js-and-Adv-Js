// while syntax
// while(consdisi) selama kondisi ini bernilai TRUE maka lakukan aksi{
//     aksi(yang akan dilakukan)
// }

//selama kondisi ini bernilai TRUE maka lakukan aksi
// while (false) {
//   console.log("hello world"); // karna kondisi tidak bernilai TRUE, maka dari itu console tidak akan pernah dijalankan !
// }

// menentukan berhentinya suatau perulangan berdasarkan keinginan user
// var ulang = true;
// while (ulang) {
//   console.log("hello World");
//   // confirm bernilai true or flase, jika use menekan ya maka kondisi variable ulang menjadi true, jika tidak maka berubah menjadi false
//   ulang = confirm("lagi?");
// }

// menentukan berhentinya perulangan ditentukan dengan program itu sendiri !
// -------------------TEORI-----------------------
// ingat yang harus ada dalam while adalah, nilai nilaiAwal, kondisi atau terminasi, dan increment

var nilaiAwal = 1;
while (nilaiAwal <= 100) {
  console.log("hello World " + nilaiAwal + " Kali");
  nilaiAwal++;
}
