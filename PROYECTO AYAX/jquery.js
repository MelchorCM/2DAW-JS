var pelicula = document.getElementById('input1');
var input2 = document.getElementById('input2');
var contador = 1

$(document).ready(function(){
    $('#button').hide();
})  


$(document).ready(function(){
    $('#input2').click(function(){
        peticionAJAX()    
 })

})

function peticionAJAX() {
    let input = $('#input1').val();
    $.getJSON("http://www.omdbapi.com/?s="+input+"&apikey=1bd95b4d&page="+contador, 
        function(data){
            for(let i=0;i<data.Search.length;i++){
                maquetarPelicula(data.Search[i])
                console.log(data.Search[i])
        }}
    )

    $(document).ready(function(){
        $('#button').show()
        })
    $(document).ready(function(){
        $('#button').click(function(){contador++;
        peticionAJAX()})
    })
    }

function maquetarPelicula(datos){
    let title = datos.Title;    
    let year = datos.Year;
    let img = datos.Poster;
    if(img=='N/A'){
        img = 'no_disponible.jpg'
    }
    $('div.main').append('<div class="flex-container"><h1>'+title+'</h1><img src='+img+'><p>'+year+'</p></div>')
}
