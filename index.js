var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var obj = {itemName: item, itemPrice: Math.floor(Math.random()*100)}
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  if (cart.length == 0) {
    return "Your shopping cart is empty."
  }
  if (cart.length == 1){
    return `In your cart, you have ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
  }
  var i = 0;
  var statement = ["In your cart, you have"];
  var cartItems = []
  for (i=0; i < cart.length - 1 ; i++) {
    cartItems.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
  }
    cartItems.push(` and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`)
    cartItems.join(", ")
    statement.push(cartItems)
      return statement.join("")
  }


function total() {
  var total = 0;
  var i = 0;
  for (i = 0; i < cart.length; i++) {
    total = total + cart[i].itemPrice
  }
  return total
}

function removeFromCart(item) {
  var i=0;
  for (i=0; i < cart.length; i++){
      if (cart[i].itemName == item) {
      cart.splice(i, 1);
      return cart;
    }
  }
      return "That item is not in your cart."
  }

function placeOrder(cardNumber) {
  if (cardNumber) {
    var cost = total()
    cart = []
    return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
  } else {
    return "Sorry, we don't have a credit card on file for you."
  }
}
