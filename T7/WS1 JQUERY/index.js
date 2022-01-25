/* $(document).ready(function(){
    $('li:lt(2)').hide(2000);
})  */

$(document).ready(function(){
    $('p').eq(0).css('font-size',10)
    $('div > div').eq(1).children().eq(1).css('font-size',20)
    $('div > div').eq(2).children().eq(1).css('font-size',30)
})

$(document).ready(function(){
    $('h1').click(function(){
        $(this).siblings('p:first').toggle(2000)
    })
})