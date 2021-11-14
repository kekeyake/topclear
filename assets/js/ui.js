$(document).ready( function() {
    $("#headers").load("layout/header.html");  //헤더 인클루드
    $("#footers").load("layout/footer.html");  //푸터부분 인클루드
    $(window).scroll(function (event) {
        if ($(window).scrollTop() >= 100) {
            $('header').addClass('sticky');
            $('.wrap').addClass('sticky');
        }
        else {
            $('header').removeClass('sticky');
            $('.wrap').removeClass('sticky');
        }
    });

    var mql = window.matchMedia("screen and (min-width: 1023px)");
    if (mql.matches) {
        $('.__user li').mouseenter(function () {
            if ( !$(this).hasClass('in_menu') ) {
                $('.in_menu .sub_tab').hide();
                $('.sub_menu_bg').hide();
            } else {
                $('.in_menu .sub_tab').hide();
                $(this).find('.sub_tab').show();
                $('.sub_menu_bg').show();
                
            }
        });
        $('.in_menu .sub_tab').mouseleave(function () {
            $(this).hide();
            $('.sub_menu_bg').hide();
        });
    }


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
    $('.game_list .btm_box a').on('click',function(){
        $('.alert_pop').show();
        $('.bg_dimmed').addClass('on');
    });
    $('.btn_x').on('click',function(){
        // $(this).closest('.alert_pop').hide();
        $('.bg_dimmed').removeClass('on');
    });
    $('.button_b').on('click', function () {
        $(this).closest('.alert_pop').hide();
        $('.bg_dimmed').removeClass('on');
    });

    $('.inner_tab .selected').on('click', function() {
        $(this).toggleClass('open');
        $('.inner_tab ul').toggleClass('open');
    });
    $('.inner_tab ul li a').on('click', function() {
        var txt = $(this).text();
        console.log(txt);
        $('.inner_tab .selected').text(txt);
        $('.inner_tab .selected').removeClass('open');
        $('.inner_tab ul').removeClass('open');
    });
    $('.faq_list .q').on('click', function() {
        $(this).toggleClass('open');
        $(this).next('.a').toggleClass('open');
    });
    $('.pay_wrap .price_box').on('click', function() {
        $(this).toggleClass('open');
        $(this).next('.date_box').toggleClass('open');
    });
    common = {
        popOpen: function(o) {
            $(o).show().addClass('open');
            $('.bg_dimmed').addClass('on');
        },
        popClose: function(o) {
            $(o).hide().removeClass('open');
            $('.bg_dimmed').removeClass('on');
        },
    }
});