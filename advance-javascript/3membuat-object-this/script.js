// this
// var a = 10;
// console.log(this.a);

// membuat object

// cara 1 - function declaration
// function halo() {
//   console.log(this);
//   console.log("halo");
// }
// this mengaembalikan object global(window)
// this.halo();

// cara 2 - object literal
// var obj = { a: 10, nama: "zaky" };
// obj.halo = function () {
//   console.log(this);
//   console.log("halo");
// };
// mengembalikan object yang ada di function
// obj.halo();

// cara 3 - constructor
// function Halo() {
//   console.log(this);
//   console.log("halo");
// }

// mengembalikan object yang baru di buat(real object)
// var halo1 = new Halo();
// var halo2 = new Halo();
