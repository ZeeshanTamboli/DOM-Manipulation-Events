//document.getElementById()

// const taskTitle = document.getElementById('task-title');

// //Change style
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// //h5.style.display = 'none';

// //Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color: red;">My Tasks</span>';

// console.log(taskTitle);

//document.querySelector()
document.querySelector('#task-title');
document.querySelectorAll('li');
document.querySelector('ul li').style.color = 'blue';
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World!';
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; //selects only one
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4'; //selects only one
