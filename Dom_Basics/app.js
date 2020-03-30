let val;

//a way to manipulate dom without using selectors

val = document;
val = document.all;
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
  console.log(script.getAttribute('src'));
});

console.log(val);

// manipulating dom using single selectors

// document.getElementById()

console.log(document.getElementById('task-title'));

// Get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');

// Change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// taskTitle.style.display = 'none';

// Change content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hello World';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';


// DOM manipulation using multiple selectors
// document.getElementsByClassName

const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); // selection particular class under html tag

console.log(listItems);

document.getElementsByTagName
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[3].textContent = 'Hello';

// Conver HTML Collection into array
lis = Array.from(lis);

lis.reverse(); // to reverse the array list

lis.forEach(function(li, index){
  console.log(li.className);
  li.textContent = `${index}: Hello`;
});

console.log(lis);

// document.querySelectorAll
const itemss = document.querySelectorAll('ul.collection li.collection-item');

itemss.forEach(function(item, index){
    item.textContent = `${index}: Hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li){
  li.style.background = '#ccc';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
}


console.log(items);


// DOM traversing

 let val1;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val1 = listItem;
val1 = list;

// Get child nodes
val1 = list.childNodes;
val1 = list.childNodes[0];
val1 = list.childNodes[0].nodeName;
val1 = list.childNodes[3].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype


// Get children element nodes
val1 = list.children;
val1 = list.children[1];
console.log(val1);

list.children[1].textContent = 'Hello';
// Children of children
// list.children[3].children[0].id = 'test-link';
val = list.children[3].children[0];
console.log(val);

// First child
val = list.firstChild;
console.log(val);

val = list.firstElementChild;
console.log(val);

// Last child
val = list.lastChild;
console.log(val);

val = list.lastElementChild;
console.log(val);

// Count child elements
val = list.childElementCount;
console.log(val);

// Get parent node
val = listItem.parentNode;
console.log(val);

val = listItem.parentElement;
console.log(val);

val = listItem.parentElement.parentElement;
console.log(val);

// Get next sibling
val = listItem.nextSibling;
console.log(val);

val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;
console.log(val);

// Get prev sibling
val = listItem.previousSibling;
console.log(val);

val = listItem.previousElementSibling;

console.log(val);

//Creating elements

// Create element
const li  = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// Add classes
link.className = 'delete-item secondary-content';
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);


// REMOVE AND REPLACE ELEMENT

// Create Element
const newHeading = document.createElement('h2');
// Add id
newHeading.id = 'task-title';
// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get the old heading
const oldHeading = document.getElementById('task-title');
//Parent
const cardAction = document.querySelector('.card-action');

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT
const liss = document.querySelectorAll('li');
const lists = document.querySelector('ul');

// Remove list item
liss[0].remove();

// Remove child element
lists.removeChild(lis[3]);

// CLASSES & ATTR
const firstLi = document.querySelector('li:first-child');
const links = firstLi.children[0];

let value;

// Classes
value = links.className;
value = links.classList;
value = links.classList[0];
links.classList.add('test');
links.classList.remove('test');
value = links;

// Attributes
value = link.getAttribute('href');
console.log(value);

val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'Google'); 
val = link.hasAttribute('title'); // returns boolean value
link.removeAttribute('title');
val = link;

console.log(val);


