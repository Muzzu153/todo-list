import loadHeader from '../DOM/header';
import loadAllTasksLists from '../DOM/displayAllTasks';
// import loadHome from "../DOM/home";

const firstLoad = () => {
  loadHeader();
  loadAllTasksLists();
};

export default firstLoad;
