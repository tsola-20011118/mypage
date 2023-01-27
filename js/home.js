


$(window).on('load', function(){
    $('header').animate({
        'width': '80%'
    });
});

$('.menuSelect').hover(function () {
    $(this).animate({
        'left': '0%',
    });

},function(){
    $(this).animate({
        'left': '85%',
    });

});



$('.menuMe, footer').click(function () {
    var position = $('#mainMe').offset().top;
    $("html,body").animate({
        scrollTop: position
    }, {
        queue: false
    });
});

$('.menuPage').click(function () {
    var position = $('#mainPage').offset().top;
    $("html,body").animate({
        scrollTop: position
    }, {
        queue: false
    });
});

$('.menuGame').click(function () {
    var position = $('#mainGame').offset().top;
    $("html,body").animate({
        scrollTop: position
    }, {
        queue: false
    });
});

$('.menuApp').click(function () {
    var position = $('#mainApp').offset().top;
    $("html,body").animate({
        scrollTop: position
    }, {
        queue: false
    });
});

$('.menuCG').click(function () {
    var position = $('#mainCG').offset().top;
    $("html,body").animate({
        scrollTop: position
    }, {
        queue: false
    });
});

$('.menuPhoto').click(function () {
    var position = $('#mainPhoto').offset().top;
    $("html,body").animate({
        scrollTop: position
    }, {
        queue: false
    });
});
