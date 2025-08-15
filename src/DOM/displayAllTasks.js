import createTaskDiv from "./taskListDiv";
import taskManager from "../modules/taskManager";
import loadAddTaskDiv from "./loadAddTaskDiv";
import { createTask } from "../modules/createTask";

// create the main div which will display all tasks created by the user
const createAllListDiv = () => {
  // default tasks for implementation testing
  const allTaskList = [
    {
      title: "task1",
      description: "this is my first task",
      dueDate: "1-1-2025",
      priority: "higher",
    },
    {
      title: "task2",
      description:
        "this is my second task this is my second task this is my second task this is my second task this is my second task this is my second task",
      dueDate: "9-8-2025",
      priority: "highest",
    },
  ];

  /* main element which will contain all the main contents such as list
   of task with their details and remove button, and the add task button 
   opens a modal form */
  const mainDiv = document.createElement("main");

  /* the div which we are importing from the loadAddTaskDiv and it contains
   the button which if the user clicks a modal form pops up and asks for the 
   details of the title to be added */
  const addTaskDiv = loadAddTaskDiv();

  // function which update the screen whenever there is change in the allTaskList array
  const updateScreen = () => {
    while (mainDiv.hasChildNodes()) {
      mainDiv.removeChild(mainDiv.lastChild);
    }

    // loop through the allTaskList array create a div to display each task
    allTaskList.forEach((element, index) => {
      // create the task div and the details modal from the createTaskDiv module
      const { taskDiv, detailsModal } = createTaskDiv(element);

      // set the data attribute for each task to its index value so that it can be used to remove
      taskDiv.dataset.index = index;

      // append the task div and modal to main div
      mainDiv.append(taskDiv, detailsModal);
    });

    /* and also append the add task div at the end of the main div so that it 
    always displays at the end after every task has been displayed */
    mainDiv.append(addTaskDiv);
  };

  // Handle form submission for adding new tasks
  const handleFormSubmission = () => {
    // Wait for addTaskDiv to be added to DOM
    setTimeout(() => {
      const form = addTaskDiv.querySelector("form");

      if (form) {
        form.addEventListener("submit", (event) => {
          event.preventDefault();

          // Get form values
          const titleInput = document.getElementById("new-task-title");
          const descriptionInput = document.getElementById(
            "new-task-description"
          );
          const dueDateInput = document.getElementById("new-task-date");
          const priorityInput = document.getElementById("new-task-priority");

          // Validate inputs exist
          if (
            !titleInput ||
            !descriptionInput ||
            !dueDateInput ||
            !priorityInput
          ) {
            console.error("Form inputs not found");
            return;
          }

          // Create new task
          const newTask = createTask(
            titleInput.value,
            descriptionInput.value,
            dueDateInput.value,
            priorityInput.value
          );

          // Add to task list
          allTaskList.push(newTask);

          // Update screen
          updateScreen();

          // Close modal and reset form
          const modal = addTaskDiv.querySelector(".add-task-modal");
          if (modal) {
            modal.close();
            form.reset();
          }
        });
      }
    }, 0);
  };

  // get the removeTask function from the taskManager module
  const { removeTaskFromList } = taskManager();

  // attaching a event listener which listens to click event on the remove button
  mainDiv.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-button")) {
      /* access dataset attribute which we earlier set to get the index of the task on
       which the remove button was clicked  */
      const taskIndex = parseInt(
        event.target.parentNode.parentNode.dataset.index
      );

      // remove that task from the allTaskList array
      removeTaskFromList(taskIndex, allTaskList);
      console.log(allTaskList);
    } else {
      return;
    }

    // update the screen after removing the task from the array
    updateScreen();
  });

  // Setup form submission handler
  handleFormSubmission();

  // initial render
  updateScreen();
  return mainDiv;
};

const loadAllTasksDiv = () => {
  // getting the main div
  const mainDiv = createAllListDiv();

  // targeting the wrapper div from html
  const wrapper = document.getElementById("wrapper");

  // append the main div to the wrapper div
  wrapper.append(mainDiv);

  return wrapper;
};

export default loadAllTasksDiv;
