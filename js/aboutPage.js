let navbar = document.querySelector('.navbar');
let state = document.querySelector('.content-wrapper');
let navbarTabLinks = document.querySelectorAll('.navbar-tab-link');
let mobileNavBarTabLinks = document.querySelectorAll('.mobile-navbar-tab-link');

let title = document.getElementById('title');
let themeColor = document.getElementById('themeColor');

export function aboutPage() {
    clearInterval(interval);
    localStorage.setItem('currentPage', 'about');

    title.innerText = 'CheapDrugs | About';
    themeColor.content = '#1E2A78';
    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbarTabLinks.forEach(item => { item.classList.remove('sub-header-font-color'); });

    navbarTabLinks[3].classList.add('underline');
    navbarTabLinks[3].classList.add('sub-header-font-color');

    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline') });
    mobileNavBarTabLinks[3].classList.add('underline');

    navbar.classList.remove('navbar-shadow');
    state.innerHTML = `
        <div class="center-vertical">
            <p class="header-font primary-color m-font-size">Testing for perfomance</p>
            <div class="card"><img src="//picsum.photos/300/200?1" alt="test"></div>
            <div class="card"><img src="//picsum.photos/300/200?2" alt="test"></div>
            <div class="card"><img src="//picsum.photos/300/200?3" alt="test"></div>
            <div class="card"><img src="//picsum.photos/300/200?4" alt="test"></div>
            <div class="card"><img src="//picsum.photos/300/200?5" alt="test"></div>
            <div class="card"><img src="//picsum.photos/300/200?6" alt="test"></div>
            <div class="card"><img src="//picsum.photos/300/200?7" alt="test"></div>
            <div class="card"><img src="//picsum.photos/300/200?8" alt="test"></div>
            <div class="card"><img src="//picsum.photos/300/200?9" alt="test"></div>
            <div class="card"><img src="//picsum.photos/300/200?10" alt="test"></div>
            <div class="card"><img src="//picsum.photos/300/200?11" alt="test"></div>
            <div class="card"><img src="//picsum.photos/300/200?12" alt="test"></div>
        </div>
    `;

    navbar.style.display = "flex";
    navbar.style.position = 'absolute';
    document.querySelector('.navbar-padding').style.minHeight = '0px';

}