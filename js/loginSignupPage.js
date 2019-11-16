function loginSignupPage() {
    clearInterval(interval);
    title.innerText = 'CheapDrugs | Login/Sign Up';
    themeColor.content = '#6A76C6';

    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline'); });

    navbar.classList.add('navbar-shadow');
    state.innerHTML = '';
}