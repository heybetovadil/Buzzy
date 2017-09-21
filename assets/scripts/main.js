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
})