// manipulasi elemnt
const judul = document.getElementById("judul");
judul.innerHTML = "<em>Zaky Gusti</em>";

const sectionA = document.querySelector("section#a");
sectionA.innerHTML = "hello world";
sectionA.innerHTML = "<div><p>Paragraf 1</p></div>";

const judul = document.querySelector("h1#judul");
judul.style.color = "lightBlue";
judul.style.backgroundColor = "salmon";

const judul = document.getElementsByTagName("h1")[0];

// menambah attribut kedalam element
judul.setAttribute("name", "zaky");
// Mengambil attribute
const attributeName = judul.getAttribute("name");
// last example
const a = document.querySelector("section#a a");
hrefAttribute = a.getAttribute("href");

// mengelola tambahan class
const p2 = document.querySelector("p.p2");
p2.classList.add("active");
p2.classList.remove("active");
p2.classList.toggle("active");

// for example, to item wi build 3 a new class
p2.classList.add("satu");
p2.classList.add("dua");
p2.classList.add("tiga");
// Mengambil item pada p2 dengan sepertii array
// isi p2 = p2 satu dua tiga
const itemP2 = p2.classList.item(1);
// Contains berfungsi menanyakan contoh :
// const containP2 = p2.classList.contains("satu");
// const containP2 = p2.classList.contains("empat");
// replace berfungsi untuk mengganti suatu class contoh
p2.classList.replace("p2", "ini-perubahannya");
