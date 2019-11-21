(async function importPages() {
    await import('/js/homePage.js')
        .then(({ homePage }) => {
            loadHomePage = homePage;
        });
    await import('/js/shopsPage.js')
        .then(({ shopsPage }) => {
            loadShopsPage = shopsPage;
        });
    await import('/js/cartPage.js')
        .then(({ cartPage }) => {
            loadCartPage = cartPage;
        });
    await import('/js/aboutPage.js')
        .then(({ aboutPage }) => {
            loadAboutPage = aboutPage;
        });
    await import('/js/loginSignupPage.js')
        .then(({ loginSignupPage }) => {
            loadLoginSignupPage = loginSignupPage;
        });

    switch (localStorage.getItem('currentPage')) {
        case 'shops':
            loadShopsPage();
            break;
        case 'cart':
            loadCartPage();
            break;
        case 'about':
            loadAboutPage();
            break;
        case 'loginSignup':
            loadLoginSignupPage();
            break;
        default:
            loadHomePage();
            break;
    }
    document.getElementById('loadingDiv').style.display = 'none';
    document.querySelector('.content-wrapper').style.display = "block";
    document.querySelector('.navbar').style.display = "flex";
    document.querySelector('.footer').style.display = 'block';
})();
