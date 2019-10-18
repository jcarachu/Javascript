// Define UI Vars
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter');
const taskinput = document.querySelector('#task');
const tasklist = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');

loadEventListeners();

function loadEventListeners()
{
    document.addEventListener('DOMContentLoaded', getTasks);
    form.addEventListener('submit', addTask);
    tasklist.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTask);
    filter.addEventListener('keyup', filterTasks);
}

function getTasks()
{
    let tasks;
    if (localStorage.getItem('tasks') === null)
    {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task)
    {
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.appendChild(document.createTextNode(task));
        const link = document.createElement('a');
        link.className = 'delete-item secondary-content';
        link.innerHTML = '<i class="fa fa-remove"></i>';
        li.appendChild(link);
        tasklist.appendChild(li);
    });
}

function addTask(e)
{
    if (taskinput.value === '')
    {
        alert('Add a task');
    }

    const li =  document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskinput.value));
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    tasklist.appendChild(li);
    storeTaskInLocalStorage(taskinput.value);
    taskinput.value = '';
    e.preventDefault();
}

function storeTaskInLocalStorage(task)
{
    let tasks;
    if (localStorage.getItem('tasks'))
    {
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e)
{
    if (e.target.parentElement.classList.contains('delete-item'))
    {
        if (confirm('Are You Sure?'))
        {
            e.target.parentElement.parentElement.remove();
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

function removeTaskFromLocalStorage(taskItem)
{
    let tasks;
    if (localStorage.getItem('tasks') === null)
    {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(tasks, index) 
    {
        if (taskItem.textContent === task)
        {
            task.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTask()
{
    while (tasklist.firstChild)
    {
        tasklist.removeChild(tasklist.firstChild);
    }

    clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage()
{
    localStorage.clear();
}

function filterTasks(e)
{
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task)
    {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1)
        {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}
