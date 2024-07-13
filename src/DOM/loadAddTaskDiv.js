import '../css/addTask.css';

const createAddTaskButton = () => {
  // creating a button which opens a form to add tasks
  const addTaskButton = document.createElement('button');
  addTaskButton.textContent = '+ \u00A0 TASK';
  addTaskButton.classList.add('add-task-button');

  return addTaskButton;
};

const createAddTaskModal = () => {
  // creating the modal which has the form to add task
  const addTaskModal = document.createElement('dialog');
  addTaskModal.classList.add('add-task-modal');
  const modalTitle = document.createElement('div');
  modalTitle.classList.add('modal-title');
  modalTitle.textContent = 'Add a task';
  addTaskModal.append(modalTitle);

  return addTaskModal;
};

const createAddTaskModalForm = () => {
  // creating the form which asks the user for title, description, duedate and priority
  const addTaskForm = document.createElement('form');
  addTaskForm.setAttribute('autocomplete', 'on');
  addTaskForm.setAttribute('action', '');

  // container thats contains all the title related elements
  const formTitleDiv = document.createElement('div');
  formTitleDiv.classList.add('form-controls');
  // label for title input
  const formTitleLabel = document.createElement('label');
  formTitleLabel.setAttribute('for', 'new-task-title');
  formTitleLabel.textContent = 'Title';
  //cinput element for getting the title of new task
  const formTitleInput = document.createElement('input');
  formTitleInput.setAttribute('type', 'text');
  formTitleInput.setAttribute('id', 'new-task-title');
  formTitleInput.setAttribute('name', 'new-task-title');
  formTitleInput.setAttribute('required', '');
  formTitleDiv.append(formTitleLabel, formTitleInput);

  // container thats contains all the description related elements
  const formDescDiv = document.createElement('div');
  formDescDiv.classList.add('form-controls');
  const formDescLabel = document.createElement('label');
  // label for description input
  formDescLabel.setAttribute('for', 'new-task-description');
  formDescLabel.textContent = 'Description';
  // input element for getting description of the new task
  const formDescInput = document.createElement('textarea');
  formDescInput.setAttribute('id', 'new-task-description');
  formDescInput.setAttribute('required', '');
  formDescDiv.append(formDescLabel, formDescInput);

  // container thats contains all the due-date related elements
  const formDueDateDiv = document.createElement('div');
  formDueDateDiv.classList.add('form-controls');
  // label for due-date input
  const formDueDateLabel = document.createElement('label');
  formDescLabel.setAttribute('for', 'new-task-date');
  formDueDateLabel.textContent = 'Due-date';
  //cinput element for getting the due-date of new task
  const formDueDateInput = document.createElement('input');
  formDueDateInput.setAttribute('type', 'date');
  formDueDateInput.setAttribute('id', 'new-task-date');
  formDueDateInput.setAttribute('required', '');
  formDueDateDiv.append(formDueDateLabel, formDueDateInput);

  // container thats contains all the priority related elements
  const formPriorityDiv = document.createElement('div');
  formPriorityDiv.classList.add('form-controls');
  // label for priority input
  const formPriorityLabel = document.createElement('label');
  formPriorityLabel.setAttribute('for', 'new-task-priority');
  formPriorityLabel.textContent = 'Priority';
  //cinput element for getting the priority of new task
  const formPriorityInput = document.createElement('input');
  formPriorityInput.setAttribute('type', 'number');
  formPriorityInput.setAttribute('min', '1');
  formPriorityInput.setAttribute('max', '5');
  formPriorityInput.setAttribute('id', 'new-task-priority');
  // instrction for setting the priority between 1 to 5
  const formPriorityInstruction = document.createElement('div');
  formPriorityInstruction.classList.add('priority-hint');
  formPriorityInstruction.textContent = '5 being highest and 1 being lowest';
  formPriorityDiv.append(
    formPriorityLabel,
    formPriorityInput,
    formPriorityInstruction,
  );

  // div container the cancel form and confirm form button for adding task
  const formButtonsDiv = document.createElement('div');
  formButtonsDiv.classList.add('form-buttons');
  // creating the confirm button
  const confirmButton = document.createElement('button');
  confirmButton.setAttribute('type', 'submit');
  confirmButton.setAttribute('id', 'confirm-button');
  confirmButton.textContent = 'CONFRIM';
  // creating the cancel button
  const cancelButton = document.createElement('button');
  cancelButton.setAttribute('type', 'button');
  cancelButton.setAttribute('id', 'cancel-button');
  cancelButton.textContent = 'CANCEL';
  formButtonsDiv.append(cancelButton, confirmButton);

  // appending all the input Element, their label and buttons div inside the form element
  addTaskForm.append(
    formTitleDiv,
    formDescDiv,
    formDueDateDiv,
    formPriorityDiv,
    formButtonsDiv,
  );

  return addTaskForm;
};

const openModalForm = function openTheModalWhenUserClicksOnAddTask(
  event,
  modal,
) {
  event.addEventListener('click', () => {
    modal.showModal();
  });
};

const closeModalForm = function closeTheModalWhenUserCancelsForm(
  formDiv,
  modal,
) {
  formDiv.addEventListener('click', (event) => {
    if (event.target.id === 'cancel-button') {
      modal.close();
    } else {
      return;
    }
  });
};

// load the addTaskDiv with all the above contents
const loadAddTaskDiv = () => {
  // creating a div which will have the "add-task" button and the "modal-form"
  const addTaskDiv = document.createElement('div');
  addTaskDiv.classList.add('add-task-div');

  // gettiing the button
  const addTaskButton = createAddTaskButton();

  // getting the modal
  const addTaskModal = createAddTaskModal();

  // getting the form that asks for title, description, due-Date, and prority
  const addTaskForm = createAddTaskModalForm();

  // appending the form inside the modal
  addTaskModal.append(addTaskForm);

  // appending the button and modal inside the div
  addTaskDiv.append(addTaskButton, addTaskModal);

  // attaching event listner for closing and openning the moda using event bubbling
  openModalForm(addTaskButton, addTaskModal);
  closeModalForm(addTaskForm, addTaskModal);

  return addTaskDiv;
};

export default loadAddTaskDiv;
