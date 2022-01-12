const taskInput = document.querySelector('.task-input');
const addTaskButton = document.querySelector('.add-task-button');
const taskList = document.querySelector('.task-list');
const clearButton = document.querySelector('.clear-button');

addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTask);
clearButton.addEventListener('click', clearTasks);

function addTask(e){
    e.preventDefault();
    if(taskInput.value === ''){
        alert('Please add a task');
    }
    else{
        const li = document.createElement('li');
        li.className = 'task-item';
        const task = document.createElement('span');
        task.className = 'task';
        task.innerText = taskInput.value;
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerText = 'X';
        li.appendChild(task);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function deleteTask(e){
    if(e.target.classList.contains('delete-button')){
        const li = e.target.parentElement;
        taskList.removeChild(li);
    }
}

function clearTasks(e){
    e.preventDefault();
    taskList.innerHTML = '';
}
