// https://www.youtube.com/watch?v=DLFqQ1SP8xU&list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3&index=9
// seleksi body
const body = document.body;
const tUbahWarna = document.getElementById("tUbahWarna");
tUbahWarna.addEventListener("click", function () {
  //   body.setAttribute("class", "active");
  body.classList.toggle("active");
});

// const pBaru = document.createElement("p");
// const teksPBaru = document.createTextNode("Paragraf Baru");
// pBaru.appendChild(teksPBaru);
// const sectionA = document.getElementById("a");
// sectionA.appendChild(pBaru);

const tAcakWarna = document.createElement("button");
const teksTombol = document.createTextNode("Acak Warna");
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute("type", "button");
// ambil perent dan implemntasikan setelah perent
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// <input type="range" name="sMerah">
const sMerah = document.querySelector("input[name=sMerah]");
const sHijau = document.querySelector("input[name=sHijau]");
const sBiru = document.querySelector("input[name=sBiru]");
sMerah.addEventListener("change", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
sHijau.addEventListener("change", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
sBiru.addEventListener("change", function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

body.addEventListener("mousemove", function (event) {
  // posisi mouse
  // console.log(event.clientX);
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ",100)";
});
