let navbar = document.querySelector('.navbar');
let state = document.querySelector('.content-wrapper');
let navbarTabLinks = document.querySelectorAll('.navbar-tab-link');
let mobileNavBarTabLinks = document.querySelectorAll('.mobile-navbar-tab-link');

let title = document.getElementById('title');
let themeColor = document.getElementById('themeColor');

export function cartPage() {
    clearInterval(interval);
    localStorage.setItem('currentPage', 'cart');

    document.querySelector('.navbar').style.position = "relative";

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
            <a onclick="loadShopsPage();">
                <div class="underline"><img src="assets/cat.png" alt="empty"></div>
                <p class="s-font-size">Discover Your Own Drugs</p>
            </a> 
        </div>
    `;
}