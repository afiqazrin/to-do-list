import { projectList } from "./createProject";
const projectsContainer = document.querySelector(".dynamic-ul");
const addTaskForm = document.getElementById("form-container");
function render() {
  console.log(projectList);
  clearProject(projectsContainer);

  projectList.forEach((project) => {
    const projectElement = document.createElement("li");
    projectElement.classList.add("sidebar-li");
    const projectIcon = document.createElement("i");
    projectIcon.classList.add("fa-solid", "fa-bars");

    projectElement.append(projectIcon);
    const projectNameDiv = document.createElement("div");
    projectNameDiv.textContent = project.name;

    projectElement.append(projectNameDiv);
    projectElement.dataset.listId = project.id;
    projectsContainer.append(projectElement);
  });
}

function toggleTaskPopup() {
  if (addTaskForm.classList.contains("hidden")) {
    addTaskForm.classList.remove("hidden");
    addTaskForm.reset();
  } else {
    addTaskForm.classList.add("hidden");
    addTaskForm.reset();
  }
}
const selectTile = (node) => {
  const selectedTile = document.querySelector(".active-project");
  selectedTile.classList.remove("active-project"); //remove class selected from old tile

  node.classList.add("active-project"); //add class selected to current tile
};

function checkTile(e) {
  let homeTile = e.target.closest(".main-ul .sidebar-li");
  let projectTile = e.target.closest(".dynamic-ul .sidebar-li");
  if (homeTile != null) {
    // console.log(homeTile.classList[0]);
    selectTile(homeTile);
    return homeTile.classList[0];
  } else if (projectTile != null) {
    selectTile(projectTile);
    // console.log(projectTile.dataset.listId);
    return projectTile.dataset.listId;
  } else {
    return;
  }
}
function clearProject(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
export { render, toggleTaskPopup, checkTile };
