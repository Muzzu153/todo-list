import '../css/taskList.css';

export default function createTaskDiv(individualTasks) {
  // create a div element to display the task title
  const taskTitle = document.createElement('div');
  // display tasks title
  taskTitle.textContent = individualTasks['title'];

  //this button opens a details modal which displays other detais of task such as description, due-Date, priority
  const taskDetails = document.createElement('button');
  taskDetails.textContent = 'DETAILS';

  // creating the modal which has the details
  const detailsModal = document.createElement('dialog');
  // adding click event listener to the button which opens the modal
  taskDetails.addEventListener('click', () => {
    detailsModal.showModal();
  });

  // create a div element to display description of task
  const taskDescription = document.createElement('div');
  taskDescription.textContent = `Description:\u00A0  ${individualTasks['description']}`;
  taskDescription.classList.add('task-details');
  taskDescription.setAttribute('id', 'task-description');

  // creating a div element to display due date of the task
  const taskDueDate = document.createElement('div');
  taskDueDate.textContent = `Due-date: \u00A0 \u00A0 \u00A0   ${individualTasks['dueDate']}`;
  taskDueDate.classList.add('task-details');
  taskDueDate.setAttribute('id', 'task-due-date');

  // creating a div elelment to diplay the priority of the task
  const taskPriority = document.createElement('div');
  taskPriority.textContent = `Priority: \u00A0 \u00A0 \u00A0 \u00A0 \u00A0 ${individualTasks['priority']}`;
  taskPriority.classList.add('task-details');
  taskPriority.setAttribute('id', 'task-priority');

  // appending desciption, due-date and priority divs to details modal
  detailsModal.append(taskDescription, taskDueDate, taskPriority);

  // adding styles to the modal
  detailsModal.classList.add('modal');
  // if the user clicks anywhre outside the modal it closes
  detailsModal.addEventListener('click', (e) => {
    const dialogDimensions = detailsModal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      detailsModal.close();
    }
  });

  // creating remove task button which will remove the task
  const removeTask = document.createElement('button');
  removeTask.textContent = 'REMOVE';
  removeTask.classList.add('remove-button');

  // options div which is parentNode to the details-modal and remove-button
  const optionsDiv = document.createElement('div');
  optionsDiv.append(taskDetails, removeTask);

  // appending the task title and options div to task div
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('taskDiv');
  taskDiv.append(taskTitle, optionsDiv);

  return { taskDiv, detailsModal };
}
// }
