$('.swiper-slide,.swiper-container').css({
    height: $(window).height()
});

$(window).on('resize', function() {
    $('.swiper-slide,.swiper-container').css({
        height: $(window).height()
    });
});


var mySwiper = new Swiper('.swiper-container', {
    initialSlide: 0,
    setWrapperSize: true,
    direction: "horizontal",
    speed: 1000,
    longSwipesRatio: 0.2,
    grabCursor: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    mousewheelControl: true,
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    lazyLoadingOnTransitionStart: true,
    onInit: function(swiper) {
        setTimeout(function() {
            $("#loading").remove();
            $(".swiper-container").css({ "opacity": "1" });
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        }, 1000);
    },
    onSlideChangeEnd: function(swiper) {
        swiperAnimate(swiper);
    },
    onTransitionEnd: function(swiper) {
        swiperAnimate(swiper);
    }
});