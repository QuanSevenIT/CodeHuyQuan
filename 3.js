console.log($('body').scrollTop());
$(window).scroll(function(){
    if($(this).scrollTop()>200)
    {
        $('.menu').addClass('doimenu');
    }
    else{
        $('.menu').removeClass('doimenu');
    }
})
console.log($('.phan1').offset().top);
$('.menu:nth-child(1').click(function (e) { 
    e.preventDefault();
    $('html.body').animate({scrollTop:$('phan1').offset().top-40)},1000);
});
$('.menu').click(function (e) { 
    e.preventDefault();
    $('html.body').animate({scrollTop:$('phan1').offset().top-40)},1000);
});
$('.menu').click(function (e) { 
    e.preventDefault();
    $('html.body').animate({scrollTop:$('phan1').offset().top-40)},1000);
});
$('.menu').click(function (e) { 
    e.preventDefault();
    $('html.body').animate({scrollTop:$('phan1').offset().top-40)},1000);
});