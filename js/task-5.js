function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const docBody = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const colorButton = document.querySelector(".change-color");

const handleButtonClick = e => {
  const newColor = getRandomHexColor();
  docBody.style.backgroundColor = newColor;
  colorSpan.textContent = newColor;
}

colorButton.addEventListener("click", handleButtonClick);