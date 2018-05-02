const form = document.querySelector('form');
const taskInput = document.querySelector('input#task');
const heading = document.querySelector('h5');

//Clear input
taskInput.value = '';

// submit
// form.addEventListener('submit', runEvent);
// keydown
// taskInput.addEventListener('keydown', runEvent);
//keyup
//taskInput.addEventListener('keyup', runEvent);
// keypress
// taskInput.addEventListener('keypress', runEvent);
// focus
// taskInput.addEventListener('focus', runEvent);
//blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// input
taskInput.addEventListener('input', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  // console.log(e.target.value);

  // heading.innerText = e.target.value;

  //Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
}
