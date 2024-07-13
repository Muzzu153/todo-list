// creates task object with title, description, duedate and priority as properties
export const createTask = (
  titleValue,
  descriptionValue,
  dueDateValue,
  priorityValue,
) => {
  const title = titleValue;
  const description = descriptionValue;
  const dueDate = dueDateValue;
  const priority = priorityValue;

  return { title, description, dueDate, priority };
};
