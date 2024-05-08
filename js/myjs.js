$(document).ready(function(){
    navslide();
    searchonoff();
    topslide();
});

function navslide(){
    $('header nav ul > li').mouseover(function(){
        $(this).children('ol').stop().slideDown(250);
    });
    $('header nav ul > li').mouseleave(function(){
        $(this).children('ol').stop().slideUp(250);
    });
}
function searchonoff(){
    $('.searchPoint input[type="button"]').click(function(){
        $('.searchPoint input[type="search"]').toggleClass("active");
    });
}

// function topslide(){
//     var widthLi = $('.topSlider > ul li')[0].offsetWidth;

//     $('.sldeBTn1').click(function(){
//         // $('.topSlider > ul').css('transform', 'translateX(0)');
//         $('.topSlider > ul li:last-of-type').css('display', 'none');
//         $('.topSlider > ul li:first-of-type').css('display', 'block');
//         $(this).addClass('active');
//         $(this).siblings().removeClass('active');
//     });
    
//     $('.sldeBTn2').click(function(){
//         // $('.topSlider > ul').css('transform', 'translateX(-' + widthLi + 'px)');
//         $('.topSlider > ul li:last-of-type').css('display', 'block');
//         $('.topSlider > ul li:first-of-type').css('display', 'none');
//         $(this).addClass('active');
//         $(this).siblings().removeClass('active');
//     });    
// }
function topslide(){
    function nextSlide(){
        $('.topSlider > ul li:last-of-type').css('display', 'none');
        $('.topSlider > ul li:first-of-type').css('display', 'block');
        $('.sldeBTn1').addClass('active');
        $('.sldeBTn1').siblings().removeClass('active');
    }

    function prevSlide(){
       $('.topSlider > ul li:last-of-type').css('display', 'block');
        $('.topSlider > ul li:first-of-type').css('display', 'none');
        $('.sldeBTn2').addClass('active');
        $('.sldeBTn2').siblings().removeClass('active');
    }

    $('.sldeBTn1').click(nextSlide);

    $('.sldeBTn2').click(prevSlide);
}
