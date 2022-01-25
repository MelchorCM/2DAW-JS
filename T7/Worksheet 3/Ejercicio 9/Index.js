$('button#start').click(function(){
    let div = $('<div>').width(40).height(40);
    div.css('background-color', 'black');
    $('body').append(div);
    $('div').animate({marginLeft: '+=200px'}, 1000
    ,()=>{$('div').css({backgroundColor: 'blue'});});
    $('div').animate({height: '0'}, 1000);
});

$('button#stop').click(function(){
    $('div').stop(true);
});