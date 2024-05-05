$(document).ready(function(){
    navslide();
    searchonoff();
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