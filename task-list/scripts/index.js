/**
 * Adds JSON data to the task list
 * @Returns void
 */
async function addJSONData() {
  // find taskList and create new task
  const taskList = document.querySelector(".task-list-grid");
  const newTask = document.createElement("div");
  newTask.setAttribute("class","task");
  taskList.appendChild(newTask);
  // fetch JSON data
  fetch("../data/tasks.json").then( (ret) => {
    return ret.json();
    }).then(data => {
      // add JSON data to HTML

      
      /**
       * TO IMPLEMENT:
       * Need to add all JSON task objects to HTML. This code only adds
       * the one at index 0. So a while loop should work I think
       */
  
      newTask.insertAdjacentHTML("beforeend",
      `<div class="task">
        <p>${data.tasks[0].name}</p>
        <p>Due: ${data.tasks[0].deadline}</p>
      </div>`
      );
    }
  );
}

addJSONData();






