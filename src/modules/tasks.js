const Tasks = () => {
  const allTasks = [];

  const getTask = () => allTasks;

  const getTaskValuesFromUser = () => {
    const title = prompt("title?");
    const description = prompt("description?");
    const dueDate = prompt("due-date?");
    const priority = prompt("priority?");

    return { title, description, dueDate, priority };
  };

  const addTask = (task) => {
    allTasks.push(task);
  };

  return { getTask, getTaskValuesFromUser, addTask };
};

export default Tasks;
