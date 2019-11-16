function loginSignupPage() {
    title.innerText = 'CheapDrugs | Login/Sign Up';
    themeColor.content = '#848484';

    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline'); });

    navbar.classList.add('navbar-shadow');
    state.innerHTML = '';
}