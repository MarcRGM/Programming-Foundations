const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', () => {
    const task = input.value.trim();
    if (task === "") return;

    const li = document.createElement("li");
    li.textContent = task;

    // Remove task when clicked
    li.addEventListener("click", () => {
        li.remove();
    });

    taskList.appendChild(li);
    input.value = ""; // clear input
})