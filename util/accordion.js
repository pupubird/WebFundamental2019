// javascript for accordion
let isExpand = true;
let categoryList = document.querySelector('.category-list');
let categoryListDropdowns = document.querySelectorAll('.category-list > *');
let height;
function categoryAccordion() {
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