let navbar = document.querySelector('.navbar');
let state = document.querySelector('.content-wrapper');
// change state of the page so that it becomes a single page application
function templatePage() {
    navbar.classList.add('navbar-shadow');
    state.innerHTML = '';
}
// state to home page
function homePage() {
    navbar.classList.remove('navbar-shadow');
    state.innerHTML = `
            <div class="carousel">
                <div class="full-screen center-horizontal m-center-vertical
                    stock-card carousel-item">
                    <img src="assets/stock1.svg" alt="stock1"
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
                    <img src="assets/stock2.svg" alt="stock2"
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
                    <img src="assets/stock3.svg" alt="stock3"
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
}
function shopsPage() {
    navbar.classList.add('navbar-shadow');
    state.innerHTML = '';

}
function aboutPage() {
    navbar.classList.remove('navbar-shadow');
    state.innerHTML = '';

}
function loginSignupPage() {
    navbar.classList.add('navbar-shadow');
    state.innerHTML = '';

}