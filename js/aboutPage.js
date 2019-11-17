let navbar = document.querySelector('.navbar');
let state = document.querySelector('.content-wrapper');
let navbarTabLinks = document.querySelectorAll('.navbar-tab-link');
let mobileNavBarTabLinks = document.querySelectorAll('.mobile-navbar-tab-link');

let title = document.getElementById('title');
let themeColor = document.getElementById('themeColor');

export function aboutPage() {
    clearInterval(interval);
    localStorage.setItem('currentPage', 'about');

    document.querySelector('.navbar-padding').style.minHeight = '0px';

    title.innerText = 'CheapDrugs | About';
    themeColor.content = '#1E2A78';
    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbarTabLinks.forEach(item => { item.classList.remove('sub-header-font-color'); });

    navbarTabLinks[3].classList.add('underline');
    navbarTabLinks[3].classList.add('sub-header-font-color');

    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline') });
    mobileNavBarTabLinks[3].classList.add('underline');

    navbar.classList.remove('navbar-shadow');
    state.innerHTML = '';
}