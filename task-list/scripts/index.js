var taskCount = 0;

/**
 * Adds JSON data to the task list
 * @Returns void
 */
function addJSONData() {
  // find taskList and create new task
  const taskList = document.querySelector(".task-list-flex");
  // const newTask = document.createElement("div");
  // newTask.setAttribute("class", "task");
  // taskList.appendChild(newTask);
  // fetch JSON data
  fetch("../data/tasks.json").then((ret) => {
    return ret.json();
  }).then(data => {

    const tasks = data.tasks;

    tasks.forEach(function (task) {
      if ((task.name == null) || (task.deadline == null) ||
          (task.name.length == 0) || (task.deadline.length == 0)) { 
        console.error("Incorrect format for JSON task");
      } else {
        const newTask = document.createElement("div");
        newTask.setAttribute("class", "task");
        taskList.appendChild(newTask);
        newTask.insertAdjacentHTML("afterbegin",
          `
          <input type="checkbox" id="toggle-btn" onclick="updateCompleted(this)">
          <label for="toggle-btn">Mark as Complete</label>
          <p>${task.name}</p>
          <p>Due: ${task.deadline}</p>
          <button type="delete" onclick="deleteCompleted()">Delete</button>
          `
        );
        newTask.querySelector("input").setAttribute("id", "toggle-btn-" + taskCount);
        newTask.querySelector("label").setAttribute("for", "toggle-btn-" + taskCount);
        taskCount++;
      }
    });
  }
  ).catch(error => {
    console.error("Error fetching JSON data: ", error);
  });
}

addJSONData();

/**
 * Deletes all tasks that are marked as completed from the task list
 */
function deleteCompleted() {
  const taskList = document.querySelector(".task-list-flex");
  let completedTask = document.querySelector(".completed");
  while (completedTask !== null){
    taskList.removeChild(completedTask);
    completedTask = document.querySelector(".completed");
  }
}

/**
 * Toggles the "completed" class of the parent task of the checkbox
 * @param checkbox
 */
function updateCompleted(checkbox) {
  checkbox.parentElement.classList.toggle("completed");
}


// html has two boxes, one for deadline, and one for task?
/**
 * 
 * @returns 
 */
function addTask() {
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
    `<input type="checkbox" id="toggle-btn" onclick="updateCompleted(this)">
    <label for="toggle-btn">Mark as Complete</label>
    <p>${taskName.value}</p>
    <p>Due: ${taskDeadline.value}</p>
    <button type="delete" onclick="deleteCompleted()">Delete</button>`
  );
  newTask.querySelector("input").setAttribute("id", "toggle-btn-" + taskCount);
  newTask.querySelector("label").setAttribute("for", "toggle-btn-" + taskCount);
  taskCount++;
  
  taskName.value = "";
  taskDeadline.value = "";
}