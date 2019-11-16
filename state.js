let navbar = document.querySelector('.navbar');
let state = document.querySelector('.content-wrapper');
let navbarTabLinks = document.querySelectorAll('.navbar-tab-link');
let mobileNavBarTabLinks = document.querySelectorAll('.mobile-navbar-tab-link');

let title = document.getElementById('title');
// change state of the page so that it becomes a single page application

// import home page
homePageScript = document.createElement('script');
homePageScript.type = 'text/javascript';
homePageScript.async = true;
homePageScript.src = 'js/homePage.js';
document.body.appendChild(homePageScript);

// import shops page
shopsPageScript = document.createElement('script');
shopsPageScript.type = 'text/javascript';
shopsPageScript.async = true;
shopsPageScript.src = 'js/shopsPage.js';
document.body.appendChild(shopsPageScript);

// import cart page
cartPageScript = document.createElement('script');
cartPageScript.type = 'text/javascript';
cartPageScript.async = true;
cartPageScript.src = 'js/cartPage.js';
document.body.appendChild(cartPageScript);

// import about page
aboutPageScript = document.createElement('script');
aboutPageScript.type = 'text/javascript';
aboutPageScript.async = true;
aboutPageScript.src = 'js/aboutPage.js';
document.body.appendChild(aboutPageScript);

// import login signup page
loginSignupPageScript = document.createElement('script');
loginSignupPageScript.type = 'text/javascript';
loginSignupPageScript.async = true;
loginSignupPageScript.src = 'js/loginSignupPage.js';
document.body.appendChild(loginSignupPageScript);
