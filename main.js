const menuEmail     = document.querySelector('.navbar-email');
const desktopMenu   = document.querySelector('.desktop-menu');
/*menu de mobile */
const menuHamIcon   = document.querySelector('.menu');
const menuMobile    = document.querySelector('.mobile-menu');
menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu );

function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
function toogleMobileMenu() {
    menuMobile.classList.toggle('inactive');
}