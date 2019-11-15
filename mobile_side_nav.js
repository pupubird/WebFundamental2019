let mobileSideNav = document.querySelector('.mobile-side-nav');
document.body.addEventListener('click', (e) => {
    if (!e.target.className.includes('mobile-side-nav')
        && !e.target.className.includes('ham-burger')) {
        collapseSideNav();
    }
})
function expandSideNav() {
    mobileSideNav.style.right = '0px';
    mobileSideNav.style.boxShadow = '0px 0px 100px rgba(0, 0, 0, 0.25)';
}
function collapseSideNav() {
    mobileSideNav.style.right = '-80vw';
    mobileSideNav.style.boxShadow = 'none';
}