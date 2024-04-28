const button = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

function addItem() {
  const item = input.value;
  input.value = "";

  const addItem = document.createElement("li");
  const addSpan = document.createElement("span");
  const addButton = document.createElement("button");
  
  addItem.appendChild(addSpan);
  addItem.appendChild(addButton);
  
  addSpan.textContent = item;
  addButton.textContent = "Delete";

  ul.appendChild(addItem);

  addButton.addEventListener("click", () => {
    ul.removeChild(addItem);
  });
}

button.addEventListener("click", addItem);
