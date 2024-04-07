// Dom Selection
// document.getElementById()
const judul = document.getElementById("judul");
judul.style.color = "white";
judul.style.backgroundColor = "grey";
judul.innerHTML = "Gusti Muhammad Adzaky";

document.getElementsByTagName(); // HTML Collection
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "red";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

document.getElementsByClassName; // -> HTML COlection
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "ini diubah dari javascript";
