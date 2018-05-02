//REPLACE ELEMENT

//CREATE ELEMENT
const newHeading = document.createElement('h2');
//Add id
newHeading.id = 'task-title';
//New text node
newHeading.appendChild(document.createTextNode('Task List'));

//Get the old heading
const oldHeading = document.querySelector('h5#task-title');
//Parent
const cardAction = document.querySelector('.card-action');

//Replace element
cardAction.replaceChild(newHeading, oldHeading);

//REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

//Remove list item
//lis[0].remove();

//Remove child element
list.removeChild(lis[0]);

//CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

//Classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

//Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href');
val = link.removeAttribute('href');
val = link;
console.log(val);
