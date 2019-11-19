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

    document.querySelector('.navbar-padding').style.minHeight = document.querySelector('.navbar').offsetHeight + 'px';

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
    state.innerHTML = '';
}