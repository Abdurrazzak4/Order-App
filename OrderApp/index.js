import { menuArray } from '/data.js'

const main = document.getElementById("main")

menuArray.forEach(menuItem => {
    main.innerHTML += `
    <div id="menu-item" >
                <div id="img">${menuItem.emoji}</div>
                <div id="meals">
                    <div  id="diner-name">${menuItem.name}</div>
                    <div  id="diner-includes">${menuItem.ingredients}</div>
                    <div  id="diner-price">$${menuItem.price}</div>
                </div>
                <button id="add-item">+</button>
            </div>
    `
});