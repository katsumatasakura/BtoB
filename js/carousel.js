// カルーセル
$(function() {
    function sliderSetting() {

        var width = $(window).width();

        if (width <= 768) {
            $('.carousel').not('.slick-initialized').slick({
                autoplay: true,
                autoplaySpeed: 10000,
                arrows: false,
                dots: true,
                fade: true,
            });
        }
        else {
            $('.slide.slick-initialized').slick('unslick');
        }
    }

    sliderSetting();

    $(window).resize(function() {
        sliderSetting();
    });
});
