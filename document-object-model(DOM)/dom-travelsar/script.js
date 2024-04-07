// const closeButton = document.querySelector(".card .close");
// const card = document.querySelector(".card");
// closeButton.addEventListener("click", function () {
//   card.style.display = "none";
// });

// dom traversal
const close = document.querySelectorAll(".close");
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // dom Travelsal ambil parentnya, baru dihapus
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }

close.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
  });
});

const nama = document.querySelector(".nama");
// apabila study kasus ingin mengammbil container caranya :
// console.log(nama.parentElement.parentElement);
// ingin mengammbil setelah nama  kita :
console.log(nama.nextElementSibling);
