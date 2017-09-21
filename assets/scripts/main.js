$(document).ready(function() {
    // carousel
    $('.mainCarousel').owlCarousel({
        center: true,
        items: 3,
        dots: false,
        nav: true,
        loop: true,
        margin: 1,
        responsive: {
            // 600:{
            //     items:4
            // }
        }
    });

    // share menu in news feed
    $('.share').click(function() {
        $(this).next().toggle('fast');
    })

    // popup menu
    $('.popupHolder').click(function() {
        $(this).find('.popupMenu').toggle('fast');
    })

    // login modal
    $('.logIn').click(function() {
        $('.blackOverlay').toggle();
        $('.loginModal').toggle();
    })
    $('.close').click(function() {
        $('.blackOverlay').hide();
        $('.loginModal').hide();
    })
})