// function init(nama) {
//   function tampilNama() {
//     console.log(nama);
//   }
//   return tampilNama; // Removed the function invocation ()
// }

// let panggilNama = init("zaky"); // Passing "zaky" as an argument here
// panggilNama(); // Calling panggilNama as a function

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, Semoga harimu menyenangkan`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatMalam = ucapkanSalam("Malam");

// selamatPagi("zaky");
// selamatSiang("zaky");
// selamatMalam("zaky");

let add = (function () {
  let counter = 0;
  return function () {
    return counter++;
  };
})();

console.log(add());
console.log(add());
console.log(add());
