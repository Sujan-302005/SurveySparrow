const addBtn = document.getElementById("addBtn");
const input = document.getElementById("itemInput");
const list = document.getElementById("itemList");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  // Create new list item
  const li = document.createElement("li");
  li.textContent = text;

  // Create delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append button and list item
  li.appendChild(delBtn);
  list.appendChild(li);

  // Clear input
  input.value = "";
});
