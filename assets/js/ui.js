$(document).ready( function() {
    $("#headers").load("layout/header.html");  //헤더 인클루드
    $("#footers").load("layout/footer.html");  //푸터부분 인클루드

    if ( $('.top_banner').length > 0 ) {
        var swiper = new Swiper(".top_banner", {
            pagination: {
                el: ".top_banner .swiper-pagination",
            },
            on: {
                slideChangeTransitionEnd: function () {
                    //alert(this.activeIndex);
                    $('.current_num').text(this.activeIndex + 1);
                },
            },
        });
        var total_num = $('.top_banner .swiper-slide').length;
        $('.total_num').text(total_num);
    }

    if ($('.realtime').length > 0 ) {
        var swiper2 = new Swiper(".realtime", {
            direction: "vertical",
            loop: true,
            slidesPerView: 5,
            freeMode: true,
            spaceBetween: 0,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });
    }
    if ( $('.jackpot').length > 0) {
        var swiper3 = new Swiper(".jackpot", {
            direction: "vertical",
            loop: true,
            slidesPerView: 5,
            freeMode: true,
            spaceBetween: 0,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
        });
    }
});