$(document).ready(function() {
    'use strict';

    //  CODE START

    $('header nav .menuIcon i').on('click', function (){
        $('header nav .menu').slideToggle();
    })

    $(window).scroll(function() {
        let scrlTop = $(window).scrollTop();

        if (scrlTop > 10){
            $('header nav').addClass('sticky');
        }else{
            $('header nav').removeClass('sticky');
        }
    })

    //   owl carousel
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        navText:['<span><i class="far fa-arrow-alt-circle-right"></i></span>' , '<span><i class="far fa-arrow-alt-circle-left"></i></span>'],
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            500:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
        }
    })


})