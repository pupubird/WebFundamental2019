let navbar = document.querySelector('.navbar');
let state = document.querySelector('.content-wrapper');
let footer = document.querySelector('.footer');
let navbarTabLinks = document.querySelectorAll('.navbar-tab-link');
let mobileNavBarTabLinks = document.querySelectorAll('.mobile-navbar-tab-link');

let title = document.getElementById('title');
let themeColor = document.getElementById('themeColor');

export function shopsPage() {
    clearInterval(interval);
    localStorage.setItem('currentPage', 'shops');

    title.innerText = 'CheapDrugs | Shops';
    themeColor.content = '#FF1F5A';
    footer.style.display = 'block';
    navbar.style.position = 'fixed';

    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbarTabLinks.forEach(item => { item.classList.remove('sub-header-font-color'); });

    navbarTabLinks[1].classList.add('underline');
    navbarTabLinks[1].classList.add('sub-header-font-color');

    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline') });
    mobileNavBarTabLinks[1].classList.add('underline');

    navbar.classList.add('navbar-shadow');
    // state.innerHTML = `
    // `;

    navbar.style.display = "flex";
    navbar.style.position = 'fixed';

    document.querySelector('.navbar-padding').style.minHeight = navbar.offsetHeight + 'px';
}
