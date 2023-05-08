var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemsList.parentNode.parentNode.parentNode);
parentelement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'red';
console.log(itemsList.parentElement.parentElement.parentElement);

//childnodes
//console.log(itemsList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

//firstchild
console.log(itemList.firstChild);
//firstelementchild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'hello 1';
// lastelement
console.log(itemList.lastChild);
//lastelementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'hello 4';
//nextsibling
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

//previoussibling
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//createelement

//create a div
var newDiv = document.createElement('div');
//add class
newDiv.className = 'hello';
//add id
newDiv.id = 'hello1';
//add attr
newDiv.setAttribute('title', 'hello Div');
//create text node
var newDivText = document.createTextNode('hello world');
newDiv.appendChild(newDivText);
console.log(newDiv);
