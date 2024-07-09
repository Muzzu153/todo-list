  const createTask = () => {
    const title = prompt("title?");
    const description = prompt("description?");
    const dueDate = prompt("due-date?");
    const priority = prompt("priority?");

    return { title, description, dueDate, priority };
  };

export default createTask;
