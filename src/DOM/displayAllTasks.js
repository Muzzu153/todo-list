import createTaskDiv from './taskListDiv';
import taskManager from '../modules/taskManager';
import loadAddTaskDiv from './loadAddTaskDiv';

// create the main div which will display all tasks created by the user
const createAllListDiv = () => {
  // default tasks for impplimentation testing
  const allTaskList = [
    {
      title: 'task1',
      description: 'this is my first task',
      dueDate: '1-1-2025',
      priority: 'higher',
    },
    {
      title: 'task2',
      description:
        'this is my second task this is my second task this is my second task this is my second task this is my second task this is my second task',
      dueDate: '9-8-2025',
      priority: 'highest',
    },
  ];

  /* main element which will contain all the main contents such as list
   of task with thier details and remove button, and the add task button 
   opens a modal form */
  const mainDiv = document.createElement('main');

  /* the div which we are importing from the loadAddTaskDiv and it contains
   the button which if the user clicks a modal form pops up and asks for the 
   details of the title to be added */
  const addTaskDiv = loadAddTaskDiv();

  // function which update the screen whenever there is change in the allTaskList array
  const updateScreen = () => {
    while (mainDiv.hasChildNodes()) {
      mainDiv.removeChild(mainDiv.lastChild);
    }

    // loop thorugh the allTaskList array cretae a div to display each task
    allTaskList.forEach((element, index) => {
      // create the task div and the details modal from the createTaskDiv module
      const { taskDiv, detailsModal } = createTaskDiv(element);

      // set the data attritube for each task to its index value so that it can be used to remove
      taskDiv.dataset.index = index;

      // append the task div and moal to main div
      mainDiv.append(taskDiv, detailsModal);
    });

    /* and also append the add task div at the end of the main div so that it 
    always displays at the end after every task has been displayed */
    mainDiv.append(addTaskDiv);
  };

  // get the removeTask function from the taskMnager module
  const { removeTaskFromList } = taskManager();

  // attaching a event listner which listens to cick event on the remove button
  mainDiv.addEventListener('click', (event) => {
    if (event.target.classList.contains('remove-button')) {
      /* access dataset attribute which we earlier set to get the index of the task on
       which the remove button was clicked  */
      const taskIndex = event.target.parentNode.parentNode.dataset.index;

      // remove that task from the allTaskList array
      removeTaskFromList(taskIndex, allTaskList);
      console.log(allTaskList);
    } else {
      return;
    }

    // update the screen after removing the task from the array
    updateScreen();
  });

  // initial render
  updateScreen();
  return mainDiv;
};

const loadAllTasksDiv = () => {
  // getting the main div
  const mainDiv = createAllListDiv();

  // targetting the wrapper div from html
  const wrapper = document.getElementById('wrapper');

  // append the main div to the wrapper div
  wrapper.append(mainDiv);

  return wrapper;
};

export default loadAllTasksDiv;
