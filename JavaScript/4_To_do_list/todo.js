const containerProject = document.querySelector("#projects-container");
const containerTask = document.querySelector("#tasks-container");
let projectsArray = [];
let currentProject = 0;


//     Proyecto
const createProject = (name) => {
  const tasks = [
//    ["NAME", "DESCRIPTION", "DATE", "PRIORITY"]
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
      cardProject.textContent = projectsArray[i].getName();
      cardProject.onclick = () => {
        getIndexProject(cardProject.id)
      };
      containerProject.appendChild(cardProject);
    });
  }

  return {
    drawProjects
  };
})();


function getIndexProject(id = 0) {

  let selects = document.getElementsByClassName("card-project-select");
  for (let i = 0; i < selects.length; i++) {
    selects[i].classList.remove("card-project-select");
  }
  currentProject = id;
  document.getElementById(id).classList.add("card-project-select");
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
getIndexProject(currentProject);


addProject = () => {
  let nameProject = document.getElementById("name-project").value;
  document.getElementById("name-project").value = "";
  console.log(nameProject);
  nameProject = createProject(nameProject);
  projectsArray.push(nameProject);
  console.log(projectsArray);

  DOM_projects.drawProjects();
  getIndexProject(currentProject);
  
}

addTasks = () => {
  let nameTask = document.getElementById("name-task").value;
  let descriptionTask = document.getElementById("description-task").value;
  let dateTask = document.getElementById("date-task").value;
  let priorityTask = document.getElementById("priority-task").value;


  document.getElementById("name-task").value = "";
  document.getElementById("description-task").value = "";
  document.getElementById("date-task").value = "";
  document.getElementById("priority-task").value = "Low" ;

  nameTask = createTask(nameTask, descriptionTask, dateTask, priorityTask, currentProject);

  DOM_projects.drawProjects();
  getIndexProject(currentProject);

}