
//Constants for menu items and pizza price
const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

function isOnMenu (order){
    return orderName === vegetarian || orderName === hawaiian || orderName === pepperoni;
}
 
function checkOrderName(orderName) {
    return orderName === vegetarian || orderName === hawaiian || orderName === pepperoni;
}

// Function to calculate the total cost
function totalCost(orderQuantity) {
    return orderQuantity * pizzaPrice;
}

// Function to calculate cooking time
function cookingTime(orderQuantity) {
    if (orderQuantity >= 1 && orderQuantity <= 2) {
        return 10;
    } else if (orderQuantity >= 3 && orderQuantity <= 5) {
        return 15;
    } else {
        return 20;
    }
}

// Greeting the customer
alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}`);

// Ask the user for their order
var orderName = prompt("Enter the name of the pizza you want to order today.");

// Check if the entered pizza is on the menu
if (checkOrderName(orderName)) {
    var orderQuantity = parseInt(prompt(`How many of ${orderName} do you want?`));

    // Calculate the total cost
    var orderTotal = totalCost(orderQuantity);

    // Calculate cooking time
    var time = cookingTime(orderQuantity);

    // Display the final message
    alert(`Great, I'll get started on your ${orderName} right away, it will cost ${orderTotal} kr. The pizzas will take ${time} minutes.`);
} else {
    alert("Sorry, we don't have that pizza on our menu. Please choose a pizza from our menu.");
}

function submitOrder() {
    var pizzaType = document.getElementById("pizzaType").value;
    var quantity = parseInt(document.getElementById("quantity").value);

    // Your pizzabot logic
    var totalCost = quantity * pizzaPrice;
    var time = cookingTime(quantity);

    var botResponse = `Great, I'll get started on your ${pizzaType} right away, it will cost ${totalCost} kr. The pizzas will take ${time} minutes.`;

    document.getElementById("botResponse").textContent = botResponse;
}
 



