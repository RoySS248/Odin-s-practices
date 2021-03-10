function project() {

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


  const getProjects = (() => {
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
        cardProject.textContent = projectsArray[i];
        containerProject.appendChild(cardProject);
        console.log(project + " " + i);
      });
    }

    return {
      drawProjects
    };
  })();

}

export default project;