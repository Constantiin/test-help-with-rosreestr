let mobileMenu = document.querySelector('.mobile-menu');

document.addEventListener('click', getActive);

function getActive(event) {
    if (event.target.closest('.header__burger-menu')) {
        mobileMenu.classList.add('mobile-menu_active');
    }
    
    if (event.target.closest('.mobile-menu__cross-menu')) {
        mobileMenu.classList.remove('mobile-menu_active');
    }
}