document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('new-task');
  const addTaskBtn = document.getElementById('add-task');
  const taskList = document.getElementById('task-list');

  const loadTasks = () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
  };

  const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const getTasks = () => {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  };

  const addTaskToDOM = (task) => {
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.completed) {
      li.classList.add('completed');
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      deleteTask(task, li);
    });

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      editTask(task, li);
    });

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleTaskCompletion(task, li);
    });

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
    li.appendChild(completeBtn);
    taskList.appendChild(li);
  };

  const addTask = () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
      alert('Task cannot be empty!');
      return;
    }

    const task = {
      text: taskText,
      completed: false
    };

    const tasks = getTasks();
    tasks.push(task);
    saveTasks(tasks);
    addTaskToDOM(task);
    taskInput.value = '';
  };

  const deleteTask = (task, li) => {
    let tasks = getTasks();
    tasks = tasks.filter(t => t.text !== task.text);
    saveTasks(tasks);
    taskList.removeChild(li);
  };

  const editTask = (task, li) => {
    const newText = prompt('Edit task:', task.text);
    if (newText) {
      task.text = newText;
      let tasks = getTasks();
      tasks = tasks.map(t => t.text === task.text ? task : t);
      saveTasks(tasks);
      li.firstChild.textContent = newText;
    }
  };

  const toggleTaskCompletion = (task, li) => {
    task.completed = !task.completed;
    let tasks = getTasks();
    tasks = tasks.map(t => t.text === task.text ? task : t);
    saveTasks(tasks);
    li.classList.toggle('completed');
  };

  addTaskBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  });

  loadTasks();
});