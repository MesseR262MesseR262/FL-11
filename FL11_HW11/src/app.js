let rootNode = document.getElementById("root");

const MAX_ITEMS = 10;

let input = document.querySelector('#input');
let    button = document.querySelector('#addBtn');
let    output = document.querySelector('#output');
let    ul = document.createElement('ul');

input.focus();

button.addEventListener('click', addNewItem);

function newItem() {

    let listItem = document.createElement('li');
    let leftDiv = document.createElement('div');

    listItem.setAttribute('id','list');
    listItem.setAttribute('draggable','true');
    output.appendChild(ul);
    ul.appendChild(listItem);
    listItem.appendChild(leftDiv);
    leftDiv.innerHTML = input.value;
    input.value = '';
    input.focus();

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type','checkbox');
    checkbox.setAttribute('id','check');
    leftDiv.prepend(checkbox);

    let deleteSymbol = document.createElement('i');
    deleteSymbol.setAttribute('class','material-icons delete');
    deleteSymbol.innerHTML='delete';
    deleteSymbol.addEventListener('click', deleteElement);
    listItem.appendChild(deleteSymbol);

    let edit = document.createElement('i');
    edit.setAttribute('class', 'material-icons edit');
    edit.innerHTML = 'edit';
    leftDiv.appendChild(edit);

}

function addNewItem() {

    newItem();

    if (ul.children.length === MAX_ITEMS) {
        button.setAttribute('disabled', '');
        input.setAttribute('disabled','');
        let alert = document.querySelector('#alert');
        alert.innerHTML = 'Maximum item per list are created';
    }

}

function isChecked(event) {

    let target = event.target;

    if (target.getAttribute('type') === 'checkbox') {
        target.setAttribute('disabled','')
    }

}

ul.addEventListener('click', isChecked);

function editAndSaveItem(event) {

    let target = event.target;

    if (target.innerHTML === 'edit') {
        let contentSpan = target.previousSibling,
            input = document.createElement('input'),
            temp = '';

        target.parentNode.removeChild(contentSpan);
        input.value = temp;
        target.parentNode.insertBefore(input, target);
        target.innerHTML = 'save';
        return;
    }

    if (target.innerHTML === 'save') {
        let contentInput = target.previousSibling, temp = contentInput.value;
        target.parentNode.removeChild(contentInput);
        let span = document.createElement('span');
        span.setAttribute('class','content');
        span.innerHTML = temp;
        target.parentNode.insertBefore(span, target);
        target.innerHTML = 'edit';
    }

}

ul.addEventListener('click', editAndSaveItem);

function deleteElement(event) {

    let target = event.target;
    let item = document.getElementById('list');

    if (target.innerHTML === 'delete') {

        if(ul.children.length === MAX_ITEMS) {
            button.toggleAttribute('disabled');
            input.toggleAttribute('disabled');
            let alert = document.querySelector('#alert');
            alert.innerHTML = '';
        }

        ul.removeChild(item);

    }
}

let dragItem = null;

function allowDrop(event) {

    event.preventDefault();

}

function dragStart(event) {

    let target = event.target;

    while (target.tagName !== 'LI') {
        target = target.parentNode;
    }

    dragItem = target;
    event.dataTransfer.setData('text/html', dragItem);

}

function drop(event) {

    let target = event.target;

    while (target.tagName !== 'LI') {

        target = target.parentNode;

    }

    if(target.parentNode.tagName === 'UL') {

        target.parentNode.insertBefore(dragItem, target.nextSibling);

    }
}

ul.addEventListener('dragover', allowDrop);
ul.addEventListener('dragstart', dragStart);
ul.addEventListener('drop', drop);