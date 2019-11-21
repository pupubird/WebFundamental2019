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
                    <img src="assets/stock3.jpg">
                </td>
                <td class="table-price">
                    <p class="primary-color s-font-size action-call-font" >RM100</p>
                </td>
                <td class="table-quantity">
                <div> 
                    <p class="m-font-size sub-header-font darken-secondary-color">-</p>
                    <p class="s-font-size sub-header-font primary-color" contenteditable>1</p>
                    <p class="m-font-size sub-header-font tertiary-color">+</p>
                </div>
                </td>
                <td class="table-total tertiary-color action-call-font s-font-size">RM100</td>
            </tr>
            <tr class="table-row">
                <td class="table-product">
                    <p class="sub-header-font s-font-size">ecstasy</p>
                    <img src="assets/stock3.jpg">
                </td>
                <td class="table-price">
                    <p class="primary-color s-font-size action-call-font" >RM100</p>
                </td>
                <td class="table-quantity">
                <div> 
                    <p class="m-font-size sub-header-font darken-secondary-color">-</p>
                    <p class="s-font-size sub-header-font primary-color" contenteditable>1</p>
                    <p class="m-font-size sub-header-font tertiary-color">+</p>
                </div>
                </td>
                <td class="table-total tertiary-color action-call-font s-font-size">RM100</td>
            </tr>
            <tr class="table-row">
                <td class="table-product">
                    <p class="sub-header-font s-font-size">ecstasy</p>
                    <img src="assets/stock3.jpg">
                </td>
                <td class="table-price">
                    <p class="primary-color s-font-size action-call-font" >RM100</p>
                </td>
                <td class="table-quantity">
                <div> 
                    <p class="m-font-size sub-header-font darken-secondary-color">-</p>
                    <p class="s-font-size sub-header-font primary-color" contenteditable>1</p>
                    <p class="m-font-size sub-header-font tertiary-color">+</p>
                </div>
                </td>
                <td class="table-total tertiary-color action-call-font s-font-size">RM100</td>
            </tr>
            
        </table>
        <div class="checkout">
            <div>
                <p class="action-call-font primary-color s-font-size">Total: RM100</p>
                <p class="paragraph-font xs-font-size">Discounts: RM0</p>
                <button class="medium-button">Update</button>
                <button class="medium-button highlight-button">Checkout</button>
            </div>
        </div
    </div>
    
    
    `;
    navbar.style.display = "flex";
    document.querySelector('.navbar-padding').style.minHeight = navbar.offsetHeight + 'px';
}
