import { menuArray } from "/OrderApp/data.js";

const main = document.getElementById("main");
const orderList = document.getElementById("order-list");
const totalPrice = document.getElementById("total-price");

function render() {
  menuArray.forEach((menuItem) => {
    main.innerHTML += `
    <div id="menu-item" >
                <div id="img">${menuItem.emoji}</div>
                <div id="meals">
                    <div  id="diner-name">${menuItem.name}</div>
                    <div  id="diner-includes">${menuItem.ingredients}</div>
                    <div  id="diner-price">$${menuItem.price}</div>
                </div>
                <button id="btn" data-id="${menuItem.id}">+</button>
            </div>
    `;
  });
}
render();

document.addEventListener("click", (e)=>{
    if(e.target.id === "btn")
    handleBtnClicked(e.target.dataset.id)
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.parentElement.remove()
        totalPrices(0)
    }
})
const orders = []
function handleBtnClicked(id){
    const matchedId = menuArray.filter((menu)=>{
       return (menu.id === parseInt(id)); 
    })[0]
    addOrder(matchedId)
    orders.push(matchedId)
    
    
    console.log(orders);
}

function addOrder(menuItem){
    orderList.innerHTML += `
    
      <div id="order-menu">
        <div id="added-items">${menuItem.name} <span>remove</span></div>
        <div id="added-price">$${menuItem.price}</div>
      </div>

    `
    totalPrices(menuItem.price)
}

function totalPrices(price) {
let total = price;
for (let i = 0; i < orders.length; i++) {
  total += orders[i].price;
}

totalPrice.innerHTML = `
    <div id="total">Total: $${total}</div>
`
}