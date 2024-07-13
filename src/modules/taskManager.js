const taskManager = () => {
  const allTaskList = [];

  // get tasks list
  const getAllTasks = () => allTaskList;

  // add new task to list
  const addTasksToList = (tasks) => {
    allTaskList.push(tasks);
  };

  // remove tasks from list
  const removeTaskFromList = (indexOftask, taskArray) => {
    console.log(indexOftask);
    if (indexOftask > -1) {
      taskArray.splice(indexOftask, 1);
    }
  };

  return { getAllTasks, addTasksToList, removeTaskFromList };
};

export default taskManager;
