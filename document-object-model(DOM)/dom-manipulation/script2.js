// 8:31
// manipulasi node

// new Element
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");
pBaru.appendChild(teksPBaru);
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// insert before
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("item baru");
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2);

// removeChild href
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// replace paragraf 4 to ...
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2Baru = document.createElement("h2");
const teksH2Baru = document.createTextNode("Judul Baru!");
h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

// give new backgound color if using javascript
pBaru.style.backgroundColor = "pink";
liBaru.style.backgroundColor = "pink";
h2Baru.style.backgroundColor = "pink";
