$(document).ready(function () {
    $('.toggle').click(function () {
        $('#aside').toggleClass('show')
        if ($('#aside').hasClass('show')) {
            $('#aside').animate({
                left: 0
            }, 50)
        } else {
            $('#aside').animate({
                left: '-300px'
            }, 50)
        }
    });
    // Owl-Carousel
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            items: 3,
            loop: true,
            margin: 45,
            dots: true,
            dotsEach: true,
            autoplay: true,
            autoplayTimeout: 1000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    });
});