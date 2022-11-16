function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const changeColorEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");
changeColorEl.addEventListener("click", changeBgColorRandom);

function changeBgColorRandom() {
  const colorbg = getRandomHexColor();
  bodyEl.style.backgroundColor = colorbg;
  colorEl.textContent = colorbg;
}
