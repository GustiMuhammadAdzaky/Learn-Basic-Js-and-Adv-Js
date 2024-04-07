const container = document.querySelector(".container");
const jumbo = document.querySelector(".jumbo");

container.addEventListener("click", function (e) {
  // cek apakah yang di klik adalah thumb
  if (e.target.className == "thumb") {
    // Ubah sumber gambar jumbo
    jumbo.src = e.target.src;

    // Tambahkan kelas "fadeIn" ke elemen jumbo
    jumbo.classList.add("fadeIn");

    // Hapus kelas "fadeIn" setelah animasi selesai
    setTimeout(function () {
      jumbo.classList.remove("fadeIn");
    }, 500); // Sesuaikan dengan durasi animasi, dalam kasus ini 0.5s
  }
});
