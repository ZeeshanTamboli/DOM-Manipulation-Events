//document.getElementsByClassName()
// const items = document.getElementsByClassName('collection-item'); //globally
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';

// const listItems = document
//   .querySelector('ul')
//   .getElementsByClassName('collection-item'); //select class inside of an element

// console.log(listItems);

//document.getElementsByTagName()
// let lis = document.getElementsByTagName('li'); //globally
// console.log(lis);
// console.log(lis[0]);
// // items[0].style.color = 'red';

// //Convert HTML collection into arrays
// lis = Array.from(lis);

// lis.reverse();

// lis.forEach((li, index) => {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

//document.querySelectorAll() - allows array methods
const items = document.querySelectorAll('.collection-item');

items.forEach(item => {
  console.log(item);
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(li => {
  li.style.background = '#ccc';
});

//works with HTML collection
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}

console.log(items);
