function loginSignupPage() {
    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbar.classList.add('navbar-shadow');
    state.innerHTML = '';
}