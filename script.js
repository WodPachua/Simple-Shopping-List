const ulList = document.querySelector('ul');
const inputBox = document.querySelector('input');
const addItemButton = document.querySelector('button');

addItemButton.addEventListener('click', addItem);

function addItem() {
    const item = inputBox.value;
    inputBox.value = '';

    const createItem = document.createElement('li');
    const createSpan = document.createElement('span');
    const createButton = document.createElement('button');

    createItem.appendChild(createSpan);
    createSpan.textContent = item;
    createSpan.style.fontWeight = 'bolder';
    createSpan.style.color = 'green';
    createItem.appendChild(createButton);
    createButton.textContent = 'Delete Item';
    createButton.style.fontWeight = 'bolder';
    createButton.style.color = 'white';

    ulList.appendChild(createItem);

    createButton.addEventListener('click', removeList)

    function removeList() {
        ulList.removeChild(createItem);
    };

    inputBox.focus();
};

