const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  const task = inputBox.value.trim();

  if (task === "") {
    alert("Please write down a task!");
    return;
  }

  // Create list item with checkbox beside text
  const li = document.createElement("li");
  li.innerHTML = `
    <span>${task}</span>
    <div class="actions">
      <input type="checkbox" onclick="toggleTask(this)">
      <button onclick="deleteTask(this)">❌</button>
    </div>
  `;
  listContainer.appendChild(li);

  inputBox.value = "";
}

// Mark a task as done
function toggleTask(checkbox) {
  const li = checkbox.closest("li");
  li.classList.toggle("checked", checkbox.checked);
}

// Delete a task
function deleteTask(button) {
  button.closest("li").remove();
}
