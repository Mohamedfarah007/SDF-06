// Get the input field and button
const inputField = document.getElementById('input-field');
const addButton = document.getElementById('add-button');
const shoppingList = document.getElementById('shopping-list');

function addItem() {
    const newItem = inputField.value.trim();


    if (newItem === '') {
        alert('Please enter an item');
        return;
    }


    const listItem = document.createElement('li');
    listItem.textContent = newItem;


    shoppingList.appendChild(listItem);

    inputField.value = '';
}


addButton.addEventListener('click', addItem);
