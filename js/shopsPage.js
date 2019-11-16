function shopsPage() {
    title.innerText = 'CheapDrugs | Shops';
    themeColor.content = '#6A76C6';

    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbarTabLinks[1].classList.add('underline');

    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline') });
    mobileNavBarTabLinks[1].classList.add('underline');

    navbar.classList.add('navbar-shadow');
    state.innerHTML = '';
}
