let navbar = document.querySelector('.navbar');
let state = document.querySelector('.content-wrapper');
let footer = document.querySelector('.footer');
let navbarTabLinks = document.querySelectorAll('.navbar-tab-link');
let mobileNavBarTabLinks = document.querySelectorAll('.mobile-navbar-tab-link');

let title = document.getElementById('title');
let themeColor = document.getElementById('themeColor');

export function cartPage() {
    clearInterval(interval);
    localStorage.setItem('currentPage', 'cart');
    navbar.style.position = 'fixed';

    title.innerText = 'CheapDrugs | Cart';
    themeColor.content = 'rgb(204, 173, 33)';
    footer.style.display = 'block';

    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbarTabLinks.forEach(item => { item.classList.remove('sub-header-font-color'); });

    navbarTabLinks[2].classList.add('underline');
    navbarTabLinks[2].classList.add('sub-header-font-color');

    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline') });
    mobileNavBarTabLinks[2].classList.add('underline');

    navbar.classList.add('navbar-shadow');
    state.innerHTML = `
    <div class="card table-wrapper">
        <table class="cart-table ">
            <tr class="table-header card">
                <th width='25%' class="sub-header-font light-primary-color s-font-size">Product</th>
                <th width='25%' class="sub-header-font light-primary-color s-font-size">Price</th>
                <th width='25%' class="sub-header-font light-primary-color s-font-size">Quantity</th>
                <th width='25%' class="sub-header-font primary-color s-font-size">Total</th>
            </tr>
            <tr class="table-row">
                <td class="table-product">
                    <p class="sub-header-font s-font-size">ecstasy</p>
                    <img src="assets/stock5.jpg">
                </td>
                <td class="table-price">
                    <p class="primary-color s-font-size action-call-font" >RM<span class="item-price">100</span></p>
                </td>
                </td>
                <td class="table-quantity">
                <div> 
                    <a onclick="minus(0)" class="m-font-size sub-header-font darken-secondary-color">-</a>
                    <p class="s-font-size sub-header-font primary-color quantity" contenteditable>1</p>
                    <a onclick="plus(0)" class="m-font-size sub-header-font tertiary-color">+</a>
                </div>
                </td>
                <td class="table-total tertiary-color action-call-font s-font-size"><p>RM<span class="item-total">100</span></p></td>
            </tr>
            <tr class="table-row">
                <td class="table-product">
                    <p class="sub-header-font s-font-size">cannabis</p>
                    <img src="assets/stock4.jpg">
                </td>
                <td class="table-price">
                    <p class="primary-color s-font-size action-call-font" >RM<span class="item-price">100</span></p>
                </td>
                </td>
                <td class="table-quantity">
                <div> 
                    <a onclick="minus(1)" class="m-font-size sub-header-font darken-secondary-color">-</a>
                    <p class="s-font-size sub-header-font primary-color quantity" contenteditable>1</p>
                    <a onclick="plus(1)" class="m-font-size sub-header-font tertiary-color">+</a>
                </div>
                </td>
                <td class="table-total tertiary-color action-call-font s-font-size"><p>RM<span class="item-total">100</span></p></td>
            </tr>
            <tr class="table-row">
                <td class="table-product">
                    <p class="sub-header-font s-font-size">poppers</p>
                    <img src="assets/stock8.jpg">
                </td>
                <td class="table-price">
                    <p class="primary-color s-font-size action-call-font" >RM<span class="item-price">100</span></p>
                </td>
                <td class="table-quantity">
                <div> 
                    <a onclick="minus(2)" class="m-font-size sub-header-font darken-secondary-color">-</a>
                    <p class="s-font-size sub-header-font primary-color quantity" contenteditable>1</p>
                    <a onclick="plus(2)" class="m-font-size sub-header-font tertiary-color">+</a>
                </div>
                </td>
                <td class="table-total tertiary-color action-call-font s-font-size"><p>RM<span class="item-total">100</span></p></td>
            </tr>
            
        </table>
        <div class="checkout">
            <div>
                <p class="action-call-font primary-color s-font-size">Total: RM<span class="all-total">100</span></p>
                <p class="paragraph-font xs-font-size">Discounts: RM0</p>
                <a href="index.html" class="medium-button highlight-button">Checkout</a>
            </div>
        </div
    </div>
    
    
    `;

    if (!document.querySelector('.cartScript')) {
        let cartScript = document.createElement('script');
        cartScript.type = 'text/javascript';
        cartScript.src = 'util/cart.js';
        cartScript.className = 'cartScript';
        document.body.appendChild(cartScript);
    }
    navbar.style.display = "flex";
    document.querySelector('.navbar-padding').style.minHeight = navbar.offsetHeight + 'px';
}
