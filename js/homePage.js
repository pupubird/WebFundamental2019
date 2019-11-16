// state of home page
function homePage() {
    title.innerText = 'CheapDrugs | Home';

    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbarTabLinks[0].classList.add('underline');
    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline') });
    mobileNavBarTabLinks[0].classList.add('underline');

    navbar.classList.remove('navbar-shadow');
    state.innerHTML = `
            <div class="carousel">
                <div class="full-screen center-horizontal m-center-vertical
                    stock-card carousel-item">
                    <img src="assets/stock1.jpg" alt="stock1"
                        class="stock-image">
                    <div class="stock-card-description">
                        <p class="m-font-size sub-header-font-color
                            sub-header-font">Your
                            party
                            choice.</p>
                        <p class="xs-font-size paragraph-font-color
                            paragraph-font">Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam
                            id
                            blandit lorem, non lobortis elit.</p>
                        <button class="medium-button highlight-button">Check out
                            now</button>
                    </div>
                </div>
                <div class="full-screen center-horizontal m-center-vertical
                    stock-card carousel-item">
                    <img src="assets/stock2.jpg" alt="stock2"
                        class="stock-image">
                    <div class="stock-card-description">
                        <p class="m-font-size sub-header-font-color
                            sub-header-font">Your
                            personal
                            choice.</p>
                        <p class="xs-font-size paragraph-font-color
                            paragraph-font">Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam
                            id
                            blandit lorem, non lobortis elit.</p>
                        <button class="medium-button highlight-button">Check out
                            now</button>
                    </div>
                </div>
                <div class="full-screen center-horizontal m-center-vertical
                    stock-card carousel-item">
                    <img src="assets/stock3.jpg" alt="stock3"
                        class="stock-image">
                    <div class="stock-card-description">
                        <p class="m-font-size sub-header-font-color
                            sub-header-font">Your
                            healthcare
                            choice.</p>
                        <p class="xs-font-size paragraph-font-color
                            paragraph-font">Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit.
                            Etiam
                            id
                            blandit lorem, non lobortis elit.</p>
                        <button class="medium-button highlight-button">Check out
                            now</button>
                    </div>
                </div>
                `;
    let carouselScript = document.createElement('script');
    carouselScript.type = 'text/javascript';
    carouselScript.async = true;
    carouselScript.innerHTML = `
        // javascript for carousel
        carousel = new Carousel({
            carousel: '.carousel',
            carouselItem: '.carousel-item',
            defaultItemHeight: '100vh',
            defaultItemWidth: '85vw',
            scrollingResizeTransition: false,
            mobileViewSize: 500
        });
        setInterval(()=>{
            carousel.show(0);
        },3000);
    `;
    state.appendChild(carouselScript);
}
homePage();
