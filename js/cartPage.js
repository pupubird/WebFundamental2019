function cartPage() {
    clearInterval(interval);
    title.innerText = 'CheapDrugs | Cart';
    themeColor.content = 'rgb(243, 199, 4)';

    navbarTabLinks.forEach(item => { item.classList.remove('underline'); });
    navbarTabLinks[2].classList.add('underline');

    mobileNavBarTabLinks.forEach(item => { item.classList.remove('underline') });
    mobileNavBarTabLinks[2].classList.add('underline');

    navbar.classList.add('navbar-shadow');
    state.innerHTML = '';
}