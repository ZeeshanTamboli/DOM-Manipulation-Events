//Set local storage item
// localStorage.setItem('name', 'Zeeshan');

// //Set session storage item
// // sessionStorage.setItem('name', 'Javed');

// //remove from storage
// // localStorage.removeItem('name');

// //get from storage
// const name = localStorage.getItem('name');
// console.log(name);

document.querySelector('form').addEventListener('submit', function(e) {
  const task = document.querySelector('#task').value;

  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task saved');
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(task => console.log(task));
