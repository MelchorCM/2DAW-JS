$('#inicio').click(function(){
    $('p').animate({height:'30px'},2000);
    $('p').animate({height:'60px'},2000);
    $('p').animate({height:'90px'},2000);
    $('p').animate({height:'20px'},2000);
});

$('#fin').click(function(){
    $('p').stop(true);
});