/* jslint white: true, onevar: true, undef: true, nomen :true, eqeqeq :true, plusplus :true, bitwise :true, regexp :true, newcap :true, immed :true, jslint node: true, strict :true */
/*global $, jQuery*/
var currentSlide, currentDot, nextSlide, nextDot, prevSlide, prevDot;
$(document).ready(function () {
    'use strict';
    $('.dropdown').click(function () {
        $('.dropdown-menu').toggle();
    });
    $('.arrow-next').click(function () {
        currentSlide = $('.active-slide');
        nextSlide = currentSlide.next();
        currentDot = $('.active-dot');
        nextDot = currentDot.next();
        if (nextSlide.length === 0) {
            nextSlide = $('.slide').first();
            nextDot = $('.dot').first();
        }
        currentSlide.fadeOut(300).removeClass('active-slide');
        nextSlide.fadeIn(300).addClass('active-slide');
        currentDot.removeClass('active-dot');
        nextDot.addClass('active-dot');
    });
    $('.arrow-prev').click(function () {
        currentSlide = $('.active-slide');
        prevSlide = currentSlide.prev();
        currentDot = $('.active-dot');
        prevDot = currentDot.prev();
        if (prevSlide.length === 0) {
            prevSlide = $('.slide').last();
            prevDot = $('.dot').last();
        }
        currentSlide.fadeOut(300).removeClass('active-slide');
        prevSlide.fadeIn(300).addClass('active-slide');
        currentDot.removeClass('active-dot');
        prevDot.addClass('active-dot');
    });
});
