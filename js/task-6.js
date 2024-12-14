function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controls = document.querySelector("#controls");
const boxes = document.querySelector("#boxes");
const renderBoxes = [];

function createBoxes(amount)
{
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    renderBoxes.push(box);
  }
}

function destroyBoxes()
{
  renderBoxes.forEach(box => box.remove());
  renderBoxes.length = 0;
}

const numberControl = controls.querySelector("input[type='number']");
const createButton = controls.querySelector("button[data-create]");
const destroyButton = controls.querySelector("button[data-destroy]");

const handleCreateButtonClick = e => {
  const boxesNumber = numberControl.value;
  if (boxesNumber >= 1 && boxesNumber <= 100) {
    destroyBoxes();
    createBoxes(boxesNumber);
    boxes.append(...renderBoxes);
  }
};

const handleDestroyButtonClick = e => {
  destroyBoxes();
}

createButton.addEventListener("click", handleCreateButtonClick);
destroyButton.addEventListener("click", handleDestroyButtonClick);