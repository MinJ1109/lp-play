$(document).ready(function(){
    // headerScroll();
    navslide();
    searchonoff();
    topslide();
    wishlistH();
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

function topslide(){
    function nextSlide(){
        $('.topSlider > ul').css('transform', 'translateX(0)');
        $('.sldeBTn1').addClass('active').siblings().removeClass('active');
    }
    
    function prevSlide(){
        $('.topSlider > ul').css('transform', 'translateX(-100vw)');
        $('.sldeBTn2').addClass('active').siblings().removeClass('active');
    }  
    
    $('.sldeBTn1').click(nextSlide);
    $('.sldeBTn2').click(prevSlide);
}

function wishlistH(){
    $("input[value='찜하기']").click(function(){
        $(this).toggleClass('active');
    });
}

