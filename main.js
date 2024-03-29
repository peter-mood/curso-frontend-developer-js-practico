const menuEmail     = document.querySelector('.navbar-email');
const desktopMenu   = document.querySelector('.desktop-menu');
/*menu de mobile */
const menuHamIcon   = document.querySelector('.menu');
const menuMobile    = document.querySelector('.mobile-menu');
/*desplazo de carrito  */
const iconCarrito   = document.querySelector('.navbar-shopping-cart');
const menuCarrito   = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu );
iconCarrito.addEventListener('click',toogleMenuCarrito );

function toogleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}
function toogleMobileMenu() {
    menuMobile.classList.toggle('inactive');
}
function toogleMenuCarrito() {
    menuCarrito.classList.toggle('inactive');   
    
}