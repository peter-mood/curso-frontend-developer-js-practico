const menuEmail     = document.querySelector('.navbar-email');
const desktopMenu   = document.querySelector('.desktop-menu');
/*menu de mobile */
const menuHamIcon   = document.querySelector('.menu');
const menuMobile    = document.querySelector('.mobile-menu');
/*desplazo de carrito  */
const iconCarrito   = document.querySelector('.navbar-shopping-cart');
const menuCarrito   = document.querySelector('.product-detail');

menuEmail.addEventListener  ('click',   mostarMenuEscri);
menuHamIcon.addEventListener('click',   mostrarMenuMobi );
iconCarrito.addEventListener('click',   mostrarMenuCarrito);

function mostarMenuEscri() {/**muestra el menun de correo */
  const isMenuCarritoclosed   =   menuCarrito.classList.contains('inactive');
    if (!isMenuCarritoclosed) {
        menuCarrito.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function mostrarMenuMobi() {
    const isMenuCarritoclosed   =   menuCarrito.classList.contains('inactive');
    if (!isMenuCarritoclosed) {
        menuCarrito.classList.add('inactive');
    }
    menuMobile.classList.toggle('inactive');
}

function mostrarMenuCarrito() {
    const isMenuMobileClosed =      menuHamIcon.classList.contains('inactive');
    const isMenuDesktopclosed=      desktopMenu.classList.contains('inactive');
    if (!isMenuDesktopclosed) {
        desktopMenu.classList.add('inactive');
    }
    if (!isMenuMobileClosed) {
        menuMobile.classList.add('inactive');
    }
    menuCarrito.classList.toggle('inactive');   
    
}