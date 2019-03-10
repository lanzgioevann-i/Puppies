function navToggle() {
    if ($('#navbar').hasClass('show')) {
        $('#nav-hamburger').removeClass('fa-times');
        $('#nav-hamburger').addClass('fa-bars');
    }
    else {
        $('#nav-hamburger').removeClass('fa-bars');
        $('#nav-hamburger').addClass('fa-times');
    }

}

$(document).ready(function () {
    changeBackground()
});

function changeBackground() {

    var w = window.innerWidth;
    var h = window.innerHeight;
    var o = 'landscape';
    var i = 1;

    var max_landscape = 1; //change me (max number of images landscape)
    var max_portrait = 2; //change me (max number of images portrait)

    if(w >= h){
        i = 1 + Math.floor(Math.random() * max_landscape);
        o = 'landscape'
    }
    else{
        i = 1 + Math.floor(Math.random() * max_portrait);
        o = 'portrait'
    }
    
    $('body').css('background', 'url(img/cover/' + o + '/' + i + '.jpg) center center no-repeat');
    $('body').css('-webkit-background-size', 'cover');
    $('body').css('-moz-background-size', 'cover');
    $('body').css('-o-background-size', 'cover');
    $('body').css('background-size', 'cover');
    $('body').css('background-attachment', 'fixed');

    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    if(iOS) $('body').css('background-attachment', 'scroll');
}
