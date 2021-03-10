const containerProject = document.querySelector("#projects-container");
const containerTask = document.querySelector("#tasks-container");
let projectsArray = [];
let currentProject = 0;


//     Proyecto
const createProject = (name) => {

  const tasks = [
    ["NAME", "DESCRIPTION", "DATE", "PRIORITY"]
  ];

  const getName = () => name;
  const getTasks = () => tasks;

  return {
    getName,
    getTasks
  };
};


const DOM_projects = (() => {

  const resetProjects = () => {
    while (containerProject.firstChild) {
      containerProject.removeChild(containerProject.firstChild);
    }
  };

  const drawProjects = () => {
    resetProjects();

    projectsArray.forEach((project, i) => {
      let cardProject = document.createElement("div");
      cardProject.classList.add("card-project");
      cardProject.id = i;
      cardProject.onclick = () => {
        getIndexProject(cardProject.id)
      };
      cardProject.textContent = projectsArray[i].getName();
      containerProject.appendChild(cardProject);
    });
  }

  return {
    drawProjects
  };
})();


function getIndexProject(id = 0) {
  currentProject = id;
  DOM_Tasks.drawTasks(projectsArray[id].getName(), projectsArray[id].getTasks(), id);
}

/////////////////////////////////////////

//   tareas
const createTask = (name, description, date, priority, currentProject) => {
  const taskArray = [name, description, date, priority];
  projectsArray[currentProject].getTasks().push(taskArray);
};


const DOM_Tasks = (() => {
  const resetTasks = () => {
    while (containerTask.firstChild) {
      containerTask.removeChild(containerTask.firstChild);
    }
  };

  const drawTasks = (currentProject, currentTasks, id) => {
    resetTasks();

    currentTasks.forEach((task, i) => {
      console.log(task);

      let cardTask = document.createElement("div");
      cardTask.classList.add("card-task");
      cardTask.id = id;
      containerTask.appendChild(cardTask);

      let title = document.createElement("p");
      title.textContent = task[0];
      cardTask.appendChild(title);

      let description = document.createElement("p");
      description.textContent = task[1];
      cardTask.appendChild(description);

      let date = document.createElement("p");
      date.textContent = task[2];
      cardTask.appendChild(date);

      let priority = document.createElement("p");
      priority.textContent = task[3];
      cardTask.appendChild(priority);

    });

  }

  return {
    drawTasks
  };
})();
////////////////////////////////////




const defa = createProject("defa");
projectsArray.push(defa);
DOM_projects.drawProjects();
getIndexProject();


addProject = () => {
  let nameProject = document.getElementById("name-project").value;
  document.getElementById("name-project").value = "";
  console.log(nameProject);
  nameProject = createProject(nameProject);
  projectsArray.push(nameProject);
  console.log(projectsArray);

  DOM_projects.drawProjects();
  
}

addTasks = () => {
  let nameTask = document.getElementById("name-task").value;
  let descriptionTask = document.getElementById("description-task").value;
  let dateTask = document.getElementById("date-task").value;
  let priorityTask = document.getElementById("priority-task").value;

  nameTask = createTask(nameTask, descriptionTask, dateTask, priorityTask, currentProject);

  DOM_projects.drawProjects();
  getIndexProject()

}