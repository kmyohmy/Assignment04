/*eslint-env browser*/

var inventory = [[number,"product",quantity,cost],];
	sku (number), product (string), quantity (number), and cost (floating point number)

[[2233, "Hat", 12,14.99], [3223, "Socks",36, 9.99], [4824, "Shirt", 10, $15.99], [6343, "Jeans", 22, 39.99], [9382, "Jacket", 5, 49.99] ]
var inv[["sku", 2233, "hat", 12, 14.99], []]

function display_menu() {
    "use strict";
    window.console.log("Welcome to the Product Inventor Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products,");
    window.console.log("update - update stock");
    window.console.log("exit - Exit the program");
    window.console.log("");
}
function view(employee_list) {
   inventory = inventory.join(" ");
	window.console.log(inventory);
}
function update() {
 "use strict";
    var newStockItem = window.prompt("Enter the stock item");
   	inventory.push(newStockItem);
    window.console.log(newStockItem + " was added.");
    window.console.log("");
}

function update(employee_list) {
    "use strict";
    var num, employee;
    num = parseInt(window.prompt("Employee number to delete"), 10);
    if (num < 1 || num > employee_list.length) {
        window.alert("Invalid employee number.");
    } else {
        employee = employee_list.splice(num - 1, 1);
        window.console.log(employee + ' was deleted.');
        /* OR
        delete employee_list[num - 1];
        window.console.log("Employee number " + num + " was deleted.");
        */
    }
}