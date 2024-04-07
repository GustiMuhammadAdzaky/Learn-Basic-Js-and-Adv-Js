// // 15:37
// const p3 = document.querySelector(".p3");

// // - inline HTML Atrribute
// // <p class="p3" onclick="ubahWarnaP3()">paragraf 3</p>
// function ubahWarnaP3() {
//   p3.style.backgroundColor = "lightblue";
// }

// //  - Element Method
// function ubahWarnaP2() {
//   p2.style.backgroundColor = "lightblue";
// }

// const p2 = document.querySelector(".p2");
// p2.onclick = ubahWarnaP2;

// // - addEventListener(isiskan event, isikan fungsi !)
// const p4 = document.querySelector("section#b p");
// p4.addEventListener("click", function () {
//   const li = document.createElement("li");
//   const teksLi = document.createTextNode("item baru");
//   li.appendChild(teksLi);

//   const ul = document.querySelector("section#b ul");
//   ul.appendChild(li);
// });

// eventhanlder vs addeventlistener
const p3 = document.querySelector(".p3");
// event handler problem
// ketika kita memberikan lebih dari satu perubahan dari sebuah event, jika kita menggunakan Event Handeler maka perubahan yang terakhir akan menimpa perubahan sebelumnya

// p3.onclick = function () {
//   p3.style.backgroundColor = "lightblue";
// };
// p3.onclick = function () {
//   p3.style.color = "red";
// };

// AddEventlistener
// sedangkan addEventListener malah akan menambah perubahan sebelumnya !
// p3.addEventListener("click", function () {
//   p3.style.backgroundColor = "lightblue";
// });
// p3.addEventListener("click", function () {
//   p3.style.color = "red";
// });

// try self
p3.addEventListener("mouseenter", function () {
  p3.style.backgroundColor = "lightblue";
});
p3.addEventListener("mouseleave", function () {
  p3.style.backgroundColor = "white";
});
