function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColour = document.querySelector(".change-color");
const bodyFrame = document.body;
const nameOfColor = document.querySelector(".color");

btnChangeColour.addEventListener("click", () => {
  const color = getRandomHexColor();
  bodyFrame.style.backgroundColor = color;
  nameOfColor.textContent = color;
});
