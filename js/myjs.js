$(document).ready(function(){
    // headerScroll();
    navslide();
    searchonoff();
    topslide();
    wishlistH();
    discountSlide();
    navclick();
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

function discountSlide(){
    var slidetool = $('.discount > div div'); 
    var slidebox = $('.discount > div div ul');
    var slideChildren = $('.discount > div div ul li');
    var prevBtn = $("input[value='이전']");
    var nextBtn = $("input[value='다음']");

    var currentPosition = 0;
    var maxPosition = 0;
    var childWidth = slideChildren.eq(0).outerWidth();
    
    nextBtn.click(function(){
        maxPosition = slidebox[0].scrollWidth - slidetool.width();
    
        if(currentPosition > -maxPosition){ 
            currentPosition -= childWidth;
            currentPosition = Math.max(currentPosition, -maxPosition);
            slidebox.css('transform', "translateX("+currentPosition+"px)");
        }
    });
    prevBtn.click(function(){
        if(currentPosition < 0){
            currentPosition += childWidth;
            currentPosition = Math.min(currentPosition, 0);
            slidebox.css('transform', "translateX("+ currentPosition+"px)");
        }
    });
}

function navclick(){
    var navBtn = $('span[data-panel="mobileNavPanel"]');
    var navTarget = $('#mobileNavPanel > ul');
    var accBtn = $('span[data-panel="accountPanel"]');
    var accTarget = $('#accountPanel');

    accBtn.click(function(){
        accTarget.toggleClass('active');
        navTarget.removeClass('active');

        if(navTarget.hasClass('active')){
            $(navBtn).text('close');
        }else{
            $(navBtn).text('menu');
        }
    });

    navBtn.click(function(){
        navTarget.toggleClass('active');
        accTarget.removeClass('active');

        if(navTarget.hasClass('active')){
            $(this).text('close');
        }else{
            $(this).text('menu');
        }
    });
}