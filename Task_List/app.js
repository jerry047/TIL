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
    //Add task Event
    form.addEventListener('submit', addTask);

    //Remove task event
    taskList.addEventListener('click', removeTask);

    //Clear task event
    clearBtn.addEventListener('click', clearTasks);

    //Filter through the task events
    filter.addEventListener('keyup', filterTasks);
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

    //Clear input
    taskInput.value = '';

    e.preventDefault();
 }

 //Creating removetask function
  function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
        e.target.parentElement.parentElement.remove();
        }
    }
  }

  //Creating clearTasks function
  function clearTasks(){
      //simple way to do it
      taskList.innerHTML = '';

      //Faster way to do it
      while(taskList.firstChild){
          taskList.removeChild(taskList.firstChild);
      }
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