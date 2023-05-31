import { render } from "./render";
export var projectList = [];

function createProject(e) {
  const newProjectInput = document.querySelector("[data-new-project-input]");
  e.preventDefault();
  const projectName = newProjectInput.value;
  if (projectName == null || projectName == "") return;
  const project = createProjectObject(projectName);
  projectList.push(project);
  console.log(projectList);
  console.log(project);
  newProjectInput.value = null;
  render();
}

function createProjectObject(name) {
  return { id: Date.now().toString(), name: name, tasks: [] };
}
export { createProject };
