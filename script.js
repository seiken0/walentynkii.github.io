function moveElmRand(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 70 + 10) + "%";
  elm.style.left = Math.floor(Math.random() * 70 + 10) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveElmRand(e.target);
});