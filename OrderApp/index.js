import { menuArray } from '/OrderApp/data.js'

const main = document.getElementById("main")
const orderList = document.getElementById("order-list")


function render(){
menuArray.forEach(menuItem => {
    main.innerHTML += `
    <div id="menu-item" >
                <div id="img">${menuItem.emoji}</div>
                <div id="meals">
                    <div  id="diner-name">${menuItem.name}</div>
                    <div  id="diner-includes">${menuItem.ingredients}</div>
                    <div  id="diner-price">$${menuItem.price}</div>
                </div>
                <button id="${menuItem.id}">+</button>
            </div>
    `
});
}
render()

document.addEventListener("click", (e)=>{
    if(e.target.id === menuItem.id){
        addOrder(e.target.id)
        
    }
})


function addOrder(e){
    orderList.classList.toggle("hidden")
}