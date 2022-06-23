const itemTxt = document.getElementById('itemTxt');
const addBtn = document.getElementById('addBtn');
const removeFirstBtn = document.getElementById('removeFirstBtn');
const removeFirstLast = document.getElementById('removeLastBtn');

addBtn.addEventListener('click', readInput);


let shoppingList = []

function readInput() {
    const input = itemTxt.value;
    if (input) {
        const items = input.split(',');
        addItems(items);
    } else {
        showError('Please enter an item.');
    }
}

function addItems(items) {
    shoppingList = shoppingList.concat(items);
    console.log(shoppingList);
}


function removeFirst() {

}

function removeLast() {

}

function dispaly() {

}

function showError(errorMsg) {
    const messages = document.getElementById('messages');
    messages.style.background = 'red';
    messages.style.color = 'yellow';
    messages.innerHTML = errorMsg;
    messages.style.textAlign = 'center';

    setTimeout( () =>{
        messages.innerHTML = '';
        messages.style.background = 'white';
    }, 3000);
}