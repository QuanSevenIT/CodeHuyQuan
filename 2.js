$('.nd').slideUp();
$('h3').click(function (e) { 
    // $('.nd').slideDown(); 
    $('.nd').slideUp();
    $(this).next().slideToggle();
});