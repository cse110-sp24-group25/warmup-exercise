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