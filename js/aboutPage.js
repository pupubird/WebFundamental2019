function aboutPage() {
    clearInterval(interval);
    title.innerText = 'CheapDrugs | About';
    themeColor.content = '#1E2A78';
    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbarTabLinks[3].classList.add('underline');

    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline') });
    mobileNavBarTabLinks[3].classList.add('underline');

    navbar.classList.remove('navbar-shadow');
    state.innerHTML = '';
}