function aboutPage() {
    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbarTabLinks[3].classList.add('underline');
    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline') });
    mobileNavBarTabLinks[3].classList.add('underline');
    navbar.classList.remove('navbar-shadow');
    state.innerHTML = '';
}