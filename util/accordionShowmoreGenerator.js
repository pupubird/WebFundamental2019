// javascript for accordion
let isExpand = true;
function categoryAccordion() {
    let categoryList = document.querySelector('.category-list');
    let categoryListDropdowns = document.querySelectorAll('.category-list > *');
    let height;
    if (isExpand) {

        // show div
        categoryList.style.display = 'flex';
        categoryList.style.height = 'auto';
        height = categoryList.offsetHeight;
        categoryList.style.height = '0px';
        //show item
        setTimeout(() => {
            categoryList.style.opacity = '1';
            categoryList.style.height = height + 'px';
        }, 25);
        setTimeout(() => {
            categoryListDropdowns.forEach(dropdown => {
                dropdown.style.opacity = '1';
            })
        }, 100)


    } else {

        // remove item
        categoryList.style.opacity = '0';
        categoryListDropdowns.forEach(dropdown => {
            dropdown.style.opacity = '0';
        })
        setTimeout(() => {
            categoryList.style.height = '0px';
        }, 100);
        // remove div
        setTimeout(() => {
            categoryList.style.display = 'none';
        }, 300);
    }


    isExpand = !isExpand;
}
// javascript for showmore -> generator

function showmore() {
    let collapsedItems = document.querySelector('.collapsedItems');
    for (let i = 0; i < 5; i++) {
        collapsedItems.innerHTML += itemsGenerator();
    }
}
function itemsGenerator() {
    let stockImage = Math.round((Math.random() * 8)) + 1;
    let stockDesc;
    switch (stockImage) {
        case 1:
            stockDesc = 'Fun pill';
            break;
        case 2:
            stockDesc = 'happy pill';
            break;
        case 3:
            stockDesc = 'laughing pill';
            break;
        case 4:
            stockDesc = 'cannabis';
            break;
        case 5:
            stockDesc = 'ecstacy';
            break;
        case 6:
            stockDesc = 'oploid';
            break;
        case 7:
            stockDesc = 'spped';
            break;
        case 8:
            stockDesc = 'poppers';
            break;
        case 9:
            stockDesc = 'cocaine';
            break;
    }
    return `
    <div class="collapsed-item-card" onclick="showItemDesc();">
        <h1 class="sub-header-font s-font-size">${stockDesc}</h1>
        <img src="assets/stock${stockImage}.jpg" alt="stock"
            class="collapsed-item-card-image">
        <p class="paragraph-font xs-font-size">RM
            1.00</p>
        <div class="tag-group" style="display:${tagsGenerator()}">
        <p class="tag-primary" style="display:${tagsGenerator()}">new</p>
        <p class="tag-secondary" style="display:${tagsGenerator()}">${Math.round((Math.random() * 30)) + 2}% off</p>
        </div>
    </div >
    `;
}
function tagsGenerator() {
    let tag = Math.round((Math.random() * 2));
    switch (tag) {
        case 0:
            return 'none';
        case 1:
            return 'block';
    }
}