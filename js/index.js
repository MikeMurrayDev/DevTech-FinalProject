const modal = document.getElementById("modal");

let modalClose = document.getElementById("close");

let cartItems = document.getElementById("currentItems");
let itemPriceElement = document.getElementById("itemCost");
let itemQuantity = document.getElementById("itemQuantity");

let cartTotal = 0;
let priceNumber = itemPriceElement.innerText;

priceNumber = priceNumber.slice(1);
let itemPrice = Number(priceNumber, 10);

function displayCart() {  
    itemQuantity.innerText = myProduct['aggressors'].quantity;

    itemPrice = myProduct['aggressors'].quantity * myProduct['aggressors'].price;

    
    modal.style.display = "block";

    cartItems.innerText = "$" + itemPrice;

    modalClose.onclick = function() {
        modal.style.display = "none"
    };
  
    window.onclick = function(event) {
        if (event.target === modal) {
          modal.style.display = "none"
        }
    };
  }

function addItem(productName) {
    const targetProduct = myProduct['aggressors'];

    targetProduct.quantity += 1;

    document.getElementById('cartQuantity').innerText = targetProduct.quantity;
    document.getElementById('cartQuantity').style.visibility = 'visible';

    itemPrice = myProduct['aggressors'].quantity * myProduct['aggressors'].price;
    itemQuantity.innerText = myProduct['aggressors'].quantity;
    cartItems.innerText = "$" + itemPrice;
}

function removeItem() {
    const targetProduct = myProduct['aggressors'];
    targetProduct.quantity -= 1;

    itemPrice = myProduct['aggressors'].quantity * myProduct['aggressors'].price;

    itemQuantity.innerText = myProduct['aggressors'].quantity;
    cartItems.innerText = "$" + itemPrice;
}

const myProduct = {
    aggressors: {
        price: 129.95,
        size: '',
        quantity: 0,
        color: ''
    }
}