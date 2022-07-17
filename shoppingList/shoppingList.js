
 class ShoppingList {   
   
     constructor(){
        this.items = new Array();
    }

    getItems() {
        return this.items;
    }

    setItems(items){
        this.items = items;
    }
    
    //And an array
    addItems (newItems) {
        this.items.concat(newItems);
    }

    //Add one item
    addItem(item) {
        this.items.push(item);
    }

    //Add a list of itmes
    addListOfItems(...items){
        this.items.concat(items);
    }

    getFirstItem(){
        return this.items.shift();
    }

    getListItem(){
        return this.items.pop();
    }

}

