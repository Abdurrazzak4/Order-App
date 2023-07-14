import { menuArray } from "/OrderApp/data.js";

const main = document.getElementById("main");
const orderList = document.getElementById("order-list");

menuArray.forEach((menuItem) => {
  main.innerHTML += `
    <div id="menu-item" >
                <div id="img">${menuItem.emoji}</div>
                <div id="meals">
                    <div  id="diner-name">${menuItem.name}</div>
                    <div  id="diner-includes">${menuItem.ingredients}</div>
                    <div  id="diner-price">$${menuItem.price}</div>
                </div>
                <button id="btn" data-id=${menuItem.id}>+</button>
            </div>
    `;
});

document.addEventListener("click", (e) => {
  if (e.target.id === "btn") {
    handleBtnClicked(e.target.dataset.id);
  }
  if (e.target.id === "remove") {
    ordersArray.pop();
    handleRemove();
    console.log(ordersArray);
    e.target.parentElement.parentElement.remove();
  }
  if (e.target.id === "total-cost" || e.target.id === "click-for-pay") {
    document.getElementById("cardForm").style.display = "block";
  }
  if (e.target.id === "close") {
    document.getElementById("cardForm").style.display = "none";
  }
});
const ordersArray = [];

function handleBtnClicked(id) {
  const payment = document.getElementById("payment");
  const matchedId = menuArray.filter((menu) => {
    return menu.id === parseInt(id);
  })[0];
  addOrder(matchedId);

  payment.classList.remove("hidden");
  orderList.classList.remove("hidden");

  ordersArray.push(matchedId);
  handlePayment();
}
function handleRemove() {
  if (ordersArray.length === 0) {
    payment.classList.add("hidden");
    orderList.classList.add("hidden");
  }

  // ordersArray.forEach((order)=>{
  //   if(order.id === parseInt(id)){
  //     ordersArray.pop(order)
  //   }
  // })

  handlePayment();
}

function addOrder(menuItem) {
  orderList.innerHTML += `
    
      <div id="order-menu">
        <div id="added-items">${menuItem.name} <span id="remove">remove</span></div>
        <div id="added-price">$${menuItem.price}</div>
      </div>

    `;
}

function handlePayment() {
  const cost = document.getElementById("cost");
  const total = ordersArray.reduce((acc, order) => {
    return acc + order.price;
  }, 0);
  cost.innerHTML = `$${total}`;
  console.log(total);
}
