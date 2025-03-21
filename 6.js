let createList = prompt("Do you want to create a grocery list? (y/n)").toLowerCase()
if (createList === "y") {
    let numItems = parseInt(prompt("How many times do you want to add?"), 10);
    let groceryList = [];

    for (let i=0; i < numItems; i++) {
        let item = prompt('Enter item ${i+1}:');
        groceryList.push(item);
    }

    let groceryListSorted = [...groceryList].sort(); //sort in alphabetical order
    let groceryListReversed = [...grocertListSorted].reverse(); //reverse sorted list

    alert('Original List: $ {groceryList.join(","} \nSorted List: $ {groceryListSorted.join(,)} \nReveresd List: $ {groceryListReserved.join(",")}');
    alert("Grocery list creation canceled.");
}