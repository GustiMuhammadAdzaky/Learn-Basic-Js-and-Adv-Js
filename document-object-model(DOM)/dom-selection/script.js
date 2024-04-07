// Dom Selection

// document.querySelector();
// const p4 = document.querySelector("#container section#b p");
// p4.style.color = "green";
// p4.style.fontSize = "30px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "blue";
}

const sectionB = document.querySelector("#b");
const p4 = sectionB.getElementsByTagName("p")[0];
p4.style.backgroundColor = "orange";
