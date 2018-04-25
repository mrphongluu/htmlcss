
$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 2000);
});
$("#books").click(function() {
    $('html, body').animate({
        scrollTop: $("#book").offset().top
    }, 1000);
});
$(document).ready(function () {
    $('.midslide').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        arrows: false,            //căn giữa màn hình
        speed: 300,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
$(document).ready(function () {
    $('.dragon').slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        autoplay: true,
        arrows: false,            //căn giữa màn hình
        speed: 300,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
$("#artwork_type").click(function(){
    $(".artwork_type").fadeIn("fast");
    $(".character_type").hide();

});
$("#character_type").click(function(){
    $(".character_type").fadeIn("fast");
    $(".artwork_type").hide();
});