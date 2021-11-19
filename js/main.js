let swiper = new Swiper(".swiper", {
    slidesPerView: 4,
    spaceBetween: 80,
    navigation: {
        nextEl: ".section-3__arrow_right",
        prevEl: ".section-3__arrow_left",
        disabledClass: "section-3__arrow_disable"
    },
});

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