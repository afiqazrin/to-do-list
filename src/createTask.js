import { checkTile } from "./render";
import { projectList } from "./createProject";
import { toggleTaskPopup } from "./render";
function createTask(e) {
  e.preventDefault();
  const newTaskName = document.getElementById("task-name").value;
  const newTaskDescription = document.getElementById("task-description").value;
  const newTaskDeadline = document.getElementById("task-due").value;
  const radioButtons = document.getElementsByName("radio");
  var getSelectedValue = document.querySelector(
    'input[name="priority"]:checked'
  );
  const selectedProject = getSelectedProject();
  console.log(
    newTaskName,
    newTaskDescription,
    newTaskDeadline,
    selectedProject,
    getSelectedValue.value
  );
  const projectObject = projectList.find((obj) => obj.id === selectedProject);
  console.log("Object is :" + projectObject.name);
  projectObject.tasks.push(
    createTaskObject(
      newTaskName,
      newTaskDescription,
      newTaskDeadline,
      getSelectedValue.value
    )
  );
  toggleTaskPopup();
}

function getSelectedProject() {
  const selected = document.querySelector(".active-project");
  console.log(selected.dataset.listId);
  return selected.dataset.listId;
}

function createTaskObject(taskname, taskdesc, taskdue, taskpriority) {
  return {
    name: taskname,
    description: taskdesc,
    due: taskdue,
    priority: taskpriority,
  };
}

export { createTask };
