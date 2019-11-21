function shopsPage() {
    clearInterval(interval);
    title.innerText = 'CheapDrugs | Shops';
    themeColor.content = '#FF1F5A';

    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbarTabLinks[1].classList.add('underline');

    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline') });
    mobileNavBarTabLinks[1].classList.add('underline');

    navbar.classList.add('navbar-shadow');
    state.innerHTML = '';
}
