$(function () {
    $(window).on('load', function () {
        $(".loading-anime-wrap").delay(2000).fadeOut('slow');
    });
    function loaderClose() {
        $(".loading-anime-wrap").fadeOut('slow');
    }
    setTimeout(loaderClose, 10000);
});


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


$('.mainElementTitleIcecrimer').click(function () {
    if (parseInt($(".mainElement").css("width")) * 0.5 == parseInt($(".mainElementIcecrimer").css("width"))) {
        $(".mainElementIcecrimer").animate({ 'width': '100%' },
            1000,
            function () {
                $(".mainElementExplainIcecrimer").fadeIn()
            }
        )
    } else {
        $(".mainElementExplainIcecrimer").fadeOut(
            1000,
            function () {
                $(".mainElementIcecrimer").animate({ 'width': '50%' })
            }
        )
    }
});

$('.mainElementTitleAtoz').click(function () {
    if (parseInt($(".mainElement").css("width")) * 0.5 == parseInt($(".mainElementAtoz").css("width"))) {
        $(".mainElementAtoz").animate({ 'width': '100%' },
            1000,
            function () {
                $(".mainElementExplainAtoz").fadeIn()
            }
        )
    } else {
        $(".mainElementExplainAtoz").fadeOut(
            1000,
            function () {
                $(".mainElementAtoz").animate({ 'width': '50%' })
            }
        )
    }
});

