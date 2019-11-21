let lists = document.querySelectorAll('.quantity');
let lists_total = document.querySelectorAll('.item-total');
let lists_price = document.querySelectorAll('.item-price');
let quantity, itemQuantity;
function minus(index) {
    quantity = parseInt(lists[index].textContent);
    itemQuantity = parseInt(lists_total[index].textContent);
    itemPrice = parseInt(lists_price[index].textContent);
    if (quantity > 0) {
        quantity -= 1;
        lists[index].textContent = quantity;
        lists_total[index].textContent = quantity * itemPrice;
    }
}
function plus(index) {
    quantity = parseInt(lists[index].textContent);
    itemQuantity = parseInt(lists_total[index].textContent);
    itemPrice = parseInt(lists_price[index].textContent);
    if (quantity >= 0) {
        quantity += 1;
        lists[index].textContent = quantity;
        lists_total[index].textContent = quantity * itemPrice;
    }
}
(function randomizePrice() {
    for (let i = 0; i < lists_price.length; i++) {
        let random = Math.round(Math.random() * 200) + 20;
        lists_price[i].textContent = random;
        lists_total[i].textContent = random;
    }
})()