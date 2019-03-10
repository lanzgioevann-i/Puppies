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

var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
if(iOS) $('body').css('background-attachment', 'scroll');