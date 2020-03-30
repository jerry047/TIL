//Define UI Vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners(){

    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);

    //Add task Event
    form.addEventListener('submit', addTask);

    //Remove task event
    taskList.addEventListener('click', removeTask);

    //Clear task event
    clearBtn.addEventListener('click', clearTasks);

    //Filter through the task events
    filter.addEventListener('keyup', filterTasks);
}

 // Creating getTasks function to get tasks for LS
 function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null ){
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
         //Create li element
        const li = document.createElement('li');

        //Add class
        li.className = 'collection-item';

        //Create text node and append to li
        li.appendChild(document.createTextNode(task));
        
        //Create new link element
        const link = document.createElement('a');

        //ADD class
        link.className = 'delete-item secondary-content';

        //ADD icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';

        //Append the link to the li
        li.appendChild(link);

        //Append the li to ul
        taskList.appendChild(li);
    });
 }

 // Creating addTask function
 function addTask(e){
    if(taskInput.value === ''){
        alert('Add a Task');
    }

    //Create li element
    const li = document.createElement('li');

    //Add class
    li.className = 'collection-item';

    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    
    //Create new link element
    const link = document.createElement('a');

    //ADD class
    link.className = 'delete-item secondary-content';

    //ADD icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //Append the link to the li
    li.appendChild(link);

    //Append the li to ul
    taskList.appendChild(li);

    //Store in localstorage
    storeTaskInLocalStorage(taskInput.value);

    //Clear input
    taskInput.value = '';

    e.preventDefault();
 }

 //Store Task
 function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null ){
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
 }

 //Creating removetask function
  function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();

        //Remove task from localstorage
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
  }

  //Remove from LS
  function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null ){
        tasks = [];
    }
    else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            task.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  //Creating clearTasks function
  function clearTasks(){
      //simple way to do it
      taskList.innerHTML = '';

      //Faster way to do it
      while(taskList.firstChild){
          taskList.removeChild(taskList.firstChild);
      }

      // Clear from LS
      clearTasksFromLocalStorage();
  }

  //clear tasks from LS using clear button
  function clearTasksFromLocalStorage(){
      localStorage.clear();
  }

  //Creating filterTasks function
  function filterTasks(e){
      const text = e.target.value.toLowerCase();

      document.querySelectorAll('.collection-item').forEach(
          function(task){
            const item = task.firstChild.textContent;
            if(item.toLowerCase().indexOf(text) != -1){
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
      });

  }