/*global $*/

$(function () {
    "use strict";
    $(".nev li a").css("paddingTop", $(".nev").innerHeight());
    $(".nev li a").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 2000);
    });
    $(".nev li a").click(function () {
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    });
    
    $(window).scroll(function () {
        $(".block").each(function () {
            if ($(window).scrollTop() > $(this).offset().top) {
                var blockId = $(this).attr("id");
                $(".nev li a[data-scroll='" + blockId + "']").addClass("active").parent().siblings().find("a").removeClass("active");
            }
        });
        /* سهم الرجوع للاعلى  */
        if ($(window).scrollTop() > 1000) {
            $('.scrollTop').fadeIn(500);
        } else {
            $('.scrollTop').fadeOut(500);
        }
        
    });
    $('.scrollTop').click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
    });
});