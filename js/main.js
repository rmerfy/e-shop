$(function () {

    $('.carousel').owlCarousel({
        items: 1,
        center: true,
        loop: true,
        margin: 10,
        nav: true,
        animateOut: 'fadeOut',
        autoplay: true,
        dots: false
    });

    $('.card-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1,
            },
            548: {
                items: 2,
            },
            724: {
                items: 3,
            },
            1150: {
                items: 4,
            },

        }
    });

    //Категории

    $('.category-btn, .close-btn--category').click(function () {
        $('.category').toggleClass('category--active');
    });


    //Главное меню

    $('.menu-btn, .close-btn--menu').click(function () {
        $('.menu').toggleClass('menu--active');
        $('.close-btn--menu').toggle();
        $('body').toggleClass('overflow-hidden');
    });

});