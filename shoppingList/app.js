
const itemTxt = document.getElementById("itemTxt");
const addBtn = document.getElementById("addBtn");
const removeFirstBtn = document.getElementById("removeFirstBtn");
const removeFirstLast = document.getElementById("removeLastBtn");

const shoppingList = new ShoppingList();

addBtn.addEventListener("click", () => {
	console.log('hey');
	const input = itemTxt.value;
	if (input) {
		const items = input.split(",");
	      shoppingList.setItems(items) //	addItems(items);
	} else {
		showError("Please enter an item.");
	}
	dispaly();
} );


function addItems(items) {
	
}

function removeFirst() {

}

function removeLast() {}

function dispaly() {
	for( const sli of shoppingList.getItems()){
		itemList.appendChild(createListItem(sli));
	}
	// const itemList = document.getElementById("itemList");
	// for (i = 0; i < shoppingList.getItems.length; i++) {
	// 	itemList.appendChild(createListItem(shoppingList[i]));
	// }
}

function createListItem(item) {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(item));
	return li;
}

function showError(errorMsg, type) {
	const messages = document.getElementById("messages");
	messages.style.background = "red";
	messages.style.color = "yellow";
	messages.innerHTML = errorMsg;
	messages.style.textAlign = "center";

	setTimeout(() => {
		messages.innerHTML = "";
		messages.style.background = "white";
	}, 3000);
}


