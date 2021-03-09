let projectsArray = [];

const createProject = (name) => {

  const tasks = [
    ["NAME", "DESCRIPTION", "DATE", "PRIORITY"]
  ];
  const getName = () => name;
  const getTasks = () => tasks;

  projectsArray.push(name);

  return {
    getName,
    getTasks
  };
};



const createTask = (name, description, date, priority, currentProject) => {
  const taskArray = [name, description, date, priority];
  currentProject.tasks.push(taskArray);
};


const getProjects = (() => {
  const drawProjects = () => {
    projectsArray.forEach((project, i) => {
      console.log(project + " " + i);
    });
  }

  return {
    drawProjects
  };
})();



project0 = createProject("default");
getProjects.drawProjects();