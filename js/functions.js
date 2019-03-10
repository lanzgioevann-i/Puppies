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
