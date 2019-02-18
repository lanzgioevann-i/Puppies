$(function () {
    $(window).scroll(changeBackground);
});

function changeBackground() {
    var window_top = $(window).scrollTop();
    var div_top = $('#description').offset().top;

    if (window_top > (div_top - 1000)) {
        $('body').css('background', 'url(/css/img/cover3.jpg) center center no-repeat fixed');
        $('body').css('-webkit-background-size', 'cover');
        $('body').css('-moz-background-size', 'cover');
        $('body').css('-o-background-size', 'cover');
        $('body').css('background-size', 'cover');
    }
    else {
        $('body').css('background', 'url(/css/img/cover1.jpg) center center no-repeat fixed');
        $('body').css('-webkit-background-size', 'cover');
        $('body').css('-moz-background-size', 'cover');
        $('body').css('-o-background-size', 'cover');
        $('body').css('background-size', 'cover');
    }
}