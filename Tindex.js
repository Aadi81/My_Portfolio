function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");

    // Get current date and time
    let now = new Date();
    let dateTime = now.toLocaleString(); // Format: "MM/DD/YYYY, HH:MM:SS AM/PM"

    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <span class="task-time">Added: ${dateTime}</span>
        <button class="delete-btn" onclick="removeTask(this)">Delete</button>
    `;
    
    // Mark task as completed on click
    li.addEventListener("click", function () {
        this.classList.toggle("completed");
    });

    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}
