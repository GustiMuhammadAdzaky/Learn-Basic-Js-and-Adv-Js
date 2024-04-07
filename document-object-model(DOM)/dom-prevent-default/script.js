// dom traversal
const close = document.querySelectorAll(".close");

close.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.target.parentElement.style.display = "none";
    // cegah aksi default, karna href seharusnya berpindah
    e.preventDefault();
  });
});
