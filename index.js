var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var price = Math.floor(Math.random() * Math.floor(100));
  cart.push({[itemName]:price});
 // write your code here

 console.log(`${itemName} has been added to your cart`)
 console.log(cart);
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
