$(window).on('scroll', function () {
    var windowHeight = $(window).height();
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + windowHeight;
    var bannerTop = $('#banner').offset().top;
    var bannerBottom = bannerTop + $('#banner').outerHeight();

    if (windowBottom >= bannerTop) {
        $('#banner').addClass('slide-down');
    }
    var aboutTop = $('#about').offset().top;
    var aboutBottom = aboutTop + $('#about').outerHeight();

    if (windowTop <= aboutBottom) {
        $('#about').addClass('slide-up');
    }

    var desctTop = $('#prod-desc').offset().top;
    var descBottom = desctTop + $('#prod-desc').outerHeight();

    if (windowBottom >= desctTop) {
        $('#prod-desc').addClass('slide-up');
    }
    var productsTop = $('#products').offset().top;
    var productsBottom = productsTop + $('#products').outerHeight();

    if (windowBottom >= productsTop) {
        $('#products').addClass('slide-right');
    }
    var contactTop = $('#contact').offset().top;
    var contactBottom = contactTop + $('#contact').outerHeight();

    if (windowTop <= contactBottom && windowBottom >= contactTop) {
        $('#contact').addClass('slide-left');
    }
});

setTimeout(function () {
    $('.menu-icon').click(function () {
        $('.dropdown-menu').slideToggle();
    });
}, 1000);

function clearCookies() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
setInterval(clearCookies, 86400000);

$(document).ready(function () {
    $('.modal-image').click(function () {
        var imgSrc = $(this).attr('src');
        $('#modal-image').attr('src', imgSrc);
        $('#modal-container').show();
    });
    $('#modal-container').click(function () {
        $(this).hide();
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 20) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

function showAlert(type, message) {
    var alert = $('#alert');
    var alertMessage = $('#alert-message');

    alert.removeClass('error success');
    alert.addClass(type);
    alertMessage.text(message);
    alert.removeClass('hidden');
}

setTimeout(function () {
    $('#alert-close').click(function () {
        $('.alert').addClass('hidden');
    });
}, 500);
