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

    document.querySelector('.navbar-padding').style.minHeight = document.querySelector('.navbar').offsetHeight + 'px';

    title.innerText = 'CheapDrugs | Shops';
    themeColor.content = '#FF1F5A';
    footer.style.display = 'block';

    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbarTabLinks.forEach(item => { item.classList.remove('sub-header-font-color'); });

    navbarTabLinks[1].classList.add('underline');
    navbarTabLinks[1].classList.add('sub-header-font-color');

    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline') });
    mobileNavBarTabLinks[1].classList.add('underline');

    navbar.classList.add('navbar-shadow');
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

}
