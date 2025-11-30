var subMenu = document.querySelector('.submenu');
var openSubMenu = document.querySelector('.open_submenu');

openSubMenu.addEventListener('click', function() {
    subMenu.classList.toggle('show');
})

document.addEventListener('click', function(e) {
    if(subMenu.classList.contains('show')
    && !subMenu.contains(e.target)
    && !openSubMenu.contains(e.target)){

        subMenu.classList.remove('show');
    }
})

var swiper = new Swiper(".mySwiper", {

    sliderPerView: 1,
    spaceBetween: 1,
    grabCursor: true,
    loop: true,
    breakpoints : {
        991: {
            slidesPerView:3
        },
        200: {
            slidesPerView:1
        }
    }
})

