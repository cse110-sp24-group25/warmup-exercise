/**
 * Adds JSON data to the task list
 * @Returns void
 */
async function addJSONData() {
  // find taskList and create new task
  const taskList = document.querySelector(".task-list-grid");
  const newTask = document.createElement("div");
  newTask.setAttribute("class", "task");
  taskList.appendChild(newTask);
  // fetch JSON data
  fetch("../data/tasks.json").then((ret) => {
    return ret.json();
  }).then(data => {

    const tasks = data.tasks;

    tasks.forEach(function (task) {
      newTask.insertAdjacentHTML("beforeend",
        `<div class="task">
          <p>${task.name}</p>
          <p>Due: ${task.deadline}</p>
        </div>`
      );
    });
  }
  );
}

addJSONData();

// html has two boxes, one for deadline, and one for task?
async function addTask() {
  // find taskList and create new task
  const taskName = document.getElementById("task-name");
  const taskDeadline = document.getElementById("deadline");
  if (taskName.value == "" || taskDeadline.value == "") {
    return;
  }

  const taskList = document.querySelector(".task-list-flex");
  const newTask = document.createElement("div");
  
  newTask.setAttribute("class","task");
  taskList.appendChild(newTask);
  newTask.insertAdjacentHTML("beforeend",
    `<input type="checkbox" id="toggle-btn">
    <label for="toggle-btn">Mark as Complete</label>
    <p>${taskName.value}</p>
    <p>Due: ${taskDeadline.value}</p>
    <button type="delete">Delete</button>`
  );
  
  taskName.value = "";
  taskDeadline.value = "";
}