//part1 //navbar
$(document).ready(function(){
    $('.current-page').addClass('text-red');
})
//part7
$(document).ready(function(){
    $('.box1-part7-home').mouseenter(function(){
        $(this).removeClass('bg-red'),
        $(this).addClass('bg-gray2'),
        $('.bi-shield-check').removeClass('text-light'),
        $(this).addClass('text-red');
    }),
    $('.box1-part7-home').mouseleave(function(){
        $(this).removeClass('bg-gray2'),
        $(this).addClass('bg-red'),
        $('.bi-shield-check').removeClass('text-red'),
        $('.bi-shield-check').addClass('text-light');
    }),
    $('.box2-part7-home').mouseenter(function(){
        $(this).removeClass('bg-gray2'),
        $(this).addClass('bg-red'),
        $('.bi-stack').removeClass('text-red'),
        $(this).addClass('text-light');
    }),
    $('.box2-part7-home').mouseleave(function(){
        $(this).removeClass('bg-red'),
        $(this).addClass('bg-gray2'),
        $('.bi-stack').removeClass('text-light'),
        $('.bi-stack').addClass('text-red');
    }),
    $('.box3-part7-home').mouseenter(function(){
        $(this).removeClass('bg-gray2'),
        $(this).addClass('bg-red'),
        $('.bi-file-earmark-medical').removeClass('text-red'),
        $(this).addClass('text-light');
    }),
    $('.box3-part7-home').mouseleave(function(){
        $(this).removeClass('bg-red'),
        $(this).addClass('bg-gray2'),
        $('.bi-file-earmark-medical').removeClass('text-light'),
        $('.bi-file-earmark-medical').addClass('text-red');
    }),
    $('.box4-part7-home').mouseenter(function(){
        $(this).removeClass('bg-red'),
        $(this).addClass('bg-gray2'),
        $('.bi-bar-chart-line').removeClass('text-light'),
        $(this).addClass('text-red');
    }),
    $('.box4-part7-home').mouseleave(function(){
        $(this).removeClass('bg-gray2'),
        $(this).addClass('bg-red'),
        $('.bi-bar-chart-line').removeClass('text-red'),
        $('.bi-bar-chart-line').addClass('text-light');
    })
})