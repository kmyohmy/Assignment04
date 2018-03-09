/*eslint-env browser*/


/*	[[number, "product",quantity,cost],];
	sku (number), product (string), quantity (number), and cost (floating point number)

var inventory1 =[[ [2233, "Hat", 12,14.99], [3223, "Socks",36, 9.99], [4824, "Shirt", 10, $15.99], [6343, "Jeans", 22, 39.99], [9382, "Jacket", 5, 49.99] ]];*/



function display_menu() {
    "use strict";
    window.console.log("Welcome to the Product Inventory Management Application");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all products,");
    window.console.log("update - update stock");
    window.console.log("exit - Exit the program");
    window.console.log("");
}

function view(inventory) {
	"use strict";
	inventory = inventory.sort();
	for (var i = 0; i < inventory.length; i += 1) {

		window.console.log(inventory[i][0] + " " + inventory[i][1] + " " + inventory[i][2] + " "  + inventory[i][3] + "\n");
		}
}

function update(inventory) {
	/*If the user selects the update command, a prompt should appear that allows the user to enter a sku number. Once the user enters a correct sku number a second prompt should appear that allows the user to enter a new stock quantity. The quantity should then update the product of the sku number entered.
*/
	"use strict";
	var skuNumber = Number(window.prompt("Please enter a sku number"));
	var stockQuantity = window.prompt("Please enter the stock quantity");
	
	switch (skuNumber) {
	case 2233:
		inventory[0][2] = stockQuantity;
	case 3223:
		inventory[1][2] =  stockQuantity;
		break;
	case 4824:
		inventory[2][2] =  stockQuantity;
		break;
	case 6343:
		inventory[3][2] = stockQuantity;
		break;
	case 9382:
		inventory[4][2] = stockQuantity;
		break;
	default:
		window.alert("That Sku number does not exist!");
		window.console.log("Invalid Sku Number Entered!");
	}
	
}
	
function main() {
    "use strict";
	
//Order Layout inventory [0]Sku [1] Product [2]Quantity [3] Price
	var product1 = [2233, "Hat", 12, 14.99];
	var product2 = [3223, "Socks", 36, 9.99];
	var product3 = [4824, "Shirt", 10, 15.99];
	var product4 = [6343, "Jeans", 22, 39.99];
	var product5 = [9382, "Jacket", 5, 49.99];
	var inventory = [product1,product2, product3,product4, product5];

  	var command;
    
    display_menu();
  
    
    while (true) {
        command = window.prompt("Enter command");
        if (command !== null) {
            if (command === "view") {
                view(inventory);
            } else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("That is not a valid command.");
            }
        } else {
            break;
        }
    }
    window.console.log("Program terminated.");
}
main();

