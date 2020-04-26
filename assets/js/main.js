/* $ global */

// when scroll add this class to navbar

    
    $(window).scroll(function () {
        // will appear
        if ($(window).scrollTop() >= 50) {
            $('.nav').addClass('navbar-scroll')
        }
        // disappear
        else{
            $('.nav').removeClass('navbar-scroll')
        }
    });
   
    //link to section
    $('.side-menu  a,.full-nav a').click(function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top - 70
        });

    });
