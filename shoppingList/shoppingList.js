const itemTxt = document.getElementById("itemTxt");
const addBtn = document.getElementById("addBtn");
const removeFirstBtn = document.getElementById("removeFirstBtn");
const removeFirstLast = document.getElementById("removeLastBtn");



addBtn.addEventListener("click", () => {
	const input = itemTxt.value;
	if (input) {
		const items = input.split(",");
		addItems(items);
	} else {
		showError("Please enter an item.");
	}
	dispaly();
} );



const syd = { userName: "Sydney", age: 27, address: 1231 };

let users = [
	{ userName: "MJ", age: 5, address: 1231 },
	{ userName: "Byron", age: 50, address: 2912 }
];


let shoppingList = [];

let myname = new String();
let myage = number;
let sydneyAge = string;

myname = "Byron";
myage = 50;

sydneyAge = 27;
let combinedAged = sydneyAge + myage;

console.log();



function addItems(items) {
	shoppingList = shoppingList.concat(items);
}

function removeFirst() {}

function removeLast() {}

function dispaly() {
	const itemList = document.getElementById("itemList");
	for (i = 0; i < shoppingList.length; i++) {
		itemList.appendChild(createListItem(shoppingList[i]));
	}
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
