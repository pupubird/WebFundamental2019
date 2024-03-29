let navbar = document.querySelector('.navbar');
let footer = document.querySelector('.footer');
let state = document.querySelector('.content-wrapper');
let navbarTabLinks = document.querySelectorAll('.navbar-tab-link');
let mobileNavBarTabLinks = document.querySelectorAll('.mobile-navbar-tab-link');

let title = document.getElementById('title');
let themeColor = document.getElementById('themeColor');

// state of home page
export function homePage() {
    if (interval) {
        clearInterval(interval);
    }
    localStorage.setItem('currentPage', 'home');
    title.innerText = 'CheapDrugs | Home';
    themeColor.content = '#1E2A78';
    footer.style.display = 'none';
    navbar.style.position = 'absolute';

    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbarTabLinks.forEach(item => { item.classList.remove('sub-header-font-color'); });

    navbarTabLinks[0].classList.add('underline');
    navbarTabLinks[0].classList.add('sub-header-font-color');

    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline') });
    mobileNavBarTabLinks[0].classList.add('underline');

    navbar.classList.remove('navbar-shadow');
    state.innerHTML = `
            <div class="carousel">
            <div class="full-screen center-horizontal m-center-vertical
                stock-card carousel-item">
                <img src="assets/stock4.jpg" alt="stock1" class="stock-image">
                <div class="stock-card-description">
                    <p class="m-font-size sub-header-font-color
                        sub-header-font">Your
                        party
                        choice.</p>
                    <p class="xs-font-size paragraph-font-color
                        paragraph-font">
                        Discover our most exciting products that
                        takes your party game to another level.
                        </p>
                    <button onclick="loadShopsPage();" class="medium-button
                        highlight-button">Check out
                        now</button>
                </div>
            </div>
            <div class="full-screen center-horizontal m-center-vertical
                stock-card carousel-item">
                <img src="assets/stock2.jpg" alt="stock2" class="stock-image">
                <div class="stock-card-description">
                    <p class="m-font-size sub-header-font-color
                        sub-header-font">Your
                        personal
                        choice.</p>
                    <p class="xs-font-size paragraph-font-color
                        paragraph-font">
                        Explore our collection of personal use drugs
                        ranging from painkillers to sleeping pills.
                        </p>
                    <button onclick="loadShopsPage();" class="medium-button
                        highlight-button">Check out
                        now</button>
                </div>
            </div>
            <div class="full-screen center-horizontal m-center-vertical
                stock-card carousel-item">
                <img src="assets/bottle.png" alt="stock3" class="stock-image">
                <div class="stock-card-description">
                    <p class="m-font-size sub-header-font-color
                        sub-header-font">Your
                        healthcare
                        choice.</p>
                    <p class="xs-font-size paragraph-font-color
                        paragraph-font">
                        Looking for some specific drugs that treats your
                        specific medical condition?
                        </p>
                    <button onclick="loadShopsPage();" class="medium-button
                        highlight-button">Check out
                        now</button>
                </div>
            </div>
        </div>
                `;
    let carouselScript = document.createElement('script');
    carouselScript.type = 'text/javascript';
    carouselScript.async = true;
    carouselScript.innerHTML = `
        // javascript for carousel
        if(interval){
            clearInterval(interval);
        }
        carousel = new Carousel({
            carousel: '.carousel',
            carouselItem: '.carousel-item',
            defaultItemHeight: '100vh',
            defaultItemWidth: '85vw',
            scrollingResizeTransition: false,
            mobileViewSize: 500
        });
        interval = setInterval(() => {
                carousel.show(1);
        }, 3000);
    `;
    state.appendChild(carouselScript);
    navbar.style.display = "flex";
    navbar.style.position = 'absolute';
    document.querySelector('.navbar-padding').style.minHeight = '0px';
}
