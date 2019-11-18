let navbar = document.querySelector('.navbar');
let state = document.querySelector('.content-wrapper');
let navbarTabLinks = document.querySelectorAll('.navbar-tab-link');
let mobileNavBarTabLinks = document.querySelectorAll('.mobile-navbar-tab-link');

let title = document.getElementById('title');
let themeColor = document.getElementById('themeColor');

export function cartPage() {
    clearInterval(interval);
    localStorage.setItem('currentPage', 'cart');

    document.querySelector('.navbar-padding').style.minHeight = document.querySelector('.navbar').offsetHeight + 'px';

    title.innerText = 'CheapDrugs | Cart';
    themeColor.content = 'rgb(204, 173, 33)';

    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbarTabLinks.forEach(item => { item.classList.remove('sub-header-font-color'); });

    navbarTabLinks[2].classList.add('underline');
    navbarTabLinks[2].classList.add('sub-header-font-color');

    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline') });
    mobileNavBarTabLinks[2].classList.add('underline');

    navbar.classList.add('navbar-shadow');
    state.innerHTML = `
        <div class="center-vertical card" style="margin-top: 4%; padding: 4%;">
            <div class="card" style="margin-top: 2%; padding: 1%; width: 95%;">
                <img src="assets/cat.png" alt="added" style="width: 10%; border: 1px solid black;">
                <p class="s-font-size" style="display: inline;">item</p>
                <div style="margin-top: 9%; float: right;">
                    <input type="number" min="0" max="99" step="1" value="1">
                </div>
            </div>
            <button style="margin: 5% 0% 0% 88%; padding: 5px; width: 100px;">Ship</button>
        </div>
    `;
}

        // Empty Cart
        // <div class="center-vertical card" style="margin-top: 4%; padding: 4%;">
        //     <a onclick="loadShopsPage();">
        //         <div class="underline"><img src="assets/cat.png" alt="empty"></div>
        //         <p class="s-font-size">Discover Your Own Drugs</p>
        //     </a> 
        // </div>