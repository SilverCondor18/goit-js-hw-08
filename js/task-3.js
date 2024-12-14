const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const handleNameInput = e => {
    nameOutput.textContent = e.target.value.trim() === "" ? "Anonymous" : e.target.value.trim();
};

nameInput.addEventListener("input", handleNameInput);