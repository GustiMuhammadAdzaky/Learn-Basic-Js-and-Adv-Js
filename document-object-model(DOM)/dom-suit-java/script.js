// // 10:15 https://www.youtube.com/watch?v=3t9hlI0JrOM&list=PLFIM0718LjIWB3YRoQbQh82ZewAGtE2-3&index=10

function getPilihanCompoter() {
  let comp = Math.random();

  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }

  return comp;
}

function getHasil(comp, player) {
  if (player == comp) {
    hasil = "SERI!";
  } else if (player == "gajah") {
    hasil = comp == "orang" ? "MENANG!" : "KALAH!";
  } else if (player == "orang") {
    hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
  } else if (player == "semut") {
    hasil = comp == "orang" ? "KALAH" : "MENANG!";
  }
  return hasil;
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "orang", "semut"];
  let i = 0;
  const waktuMulai = new Date().getTime(); // Perbaiki pemanggilan waktu di sini
  const interval = setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      // Perbaiki pemanggilan waktu di sini
      clearInterval(interval); // Perbaiki pemanggilan clearInterval di sini
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanCompoter = getPilihanCompoter(); // Perbaiki nama variabel pilihanComputer di sini
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanCompoter, pilihanPlayer);

    putar();

    setTimeout(function () {
      const gKomputer = document.querySelector(".area-komputer img");
      if (pilihanCompoter == "gajah") {
        gKomputer.setAttribute("src", "img/gajah.png");
      } else if (pilihanCompoter == "orang") {
        gKomputer.setAttribute("src", "img/orang.png");
      } else {
        gKomputer.setAttribute("src", "img/semut.png");
      }

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// const pGajah = document.querySelector(".gajah");
// const pOrang = document.querySelector(".orang");
// const pSemut = document.querySelector(".semut");
// pGajah.addEventListener("click", function () {
//   const pilihanCompoter = getPilihanCompoter();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanCompoter, pilihanPlayer);

//   const gKomputer = document.querySelector(".area-komputer img");
//   if (pilihanCompoter == "gajah") {
//     gKomputer.setAttribute("src", "img/gajah.png");
//   } else if (pilihanCompoter == "orang") {
//     gKomputer.setAttribute("src", "img/orang.png");
//   }
//   if (pilihanCompoter == "semut") {
//     gKomputer.setAttribute("src", "img/semut.png");
//   }

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// pOrang.addEventListener("click", function () {
//   const pilihanCompoter = getPilihanCompoter();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanCompoter, pilihanPlayer);

//   const gKomputer = document.querySelector(".area-komputer img");
//   if (pilihanCompoter == "gajah") {
//     gKomputer.setAttribute("src", "img/gajah.png");
//   } else if (pilihanCompoter == "orang") {
//     gKomputer.setAttribute("src", "img/orang.png");
//   }
//   if (pilihanCompoter == "semut") {
//     gKomputer.setAttribute("src", "img/semut.png");
//   }

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// pSemut.addEventListener("click", function () {
//   const pilihanCompoter = getPilihanCompoter();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanCompoter, pilihanPlayer);

//   const gKomputer = document.querySelector(".area-komputer img");
//   if (pilihanCompoter == "gajah") {
//     gKomputer.setAttribute("src", "img/gajah.png");
//   } else if (pilihanCompoter == "orang") {
//     gKomputer.setAttribute("src", "img/orang.png");
//   }
//   if (pilihanCompoter == "semut") {
//     gKomputer.setAttribute("src", "img/semut.png");
//   }

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
