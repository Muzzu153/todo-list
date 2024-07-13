import { createTask } from './tasks';

const Project = () => {
  // this lists all the project in one place
  const projectList = [];

  // get the list
  const getProjectList = () => projectList;

  // creating the project which will store all the details and is an object itself
  const createSingleProject = (storeProjectName) => {
    const singleProject = Object.assign({});

    // creates tasks inside the project with the project name given by the user
    singleProject[storeProjectName] = createTask();

    console.log(singleProject);
    return singleProject;
  };

  // get individual tasks from the projects if there is any
  const getTaskOfProjects = (project) => {
    for (let projectName in project) {
      for (let tasks of project[projectName]) {
        console.log(tasks);
        return tasks;
      }
    }
  };

  const addSingleProjectToList = (project) => {
    projectList.push(project);
  };

  return {
    getProjectList,
    createSingleProject,
    addSingleProjectToList,
    getTaskOfProjects,
  };
};

export default Project;
