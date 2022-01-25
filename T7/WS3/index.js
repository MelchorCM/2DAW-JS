$(document).ready(function(){
    $('tr:lt(2)').css({"background-color":"red"})
    $('tr:gt(2)').css({"backgroundColor":"blue"})
})

$(document).ready(function(){
    $('tr:empty').css({"background-color":"yellow"})
})