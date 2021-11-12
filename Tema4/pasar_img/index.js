const iz = document.getElementById('prev');
const de = document.getElementById('next');
img = 1;

function cambiaImagenIz(){
    img -= 1;
    if (img < 0){
        img = 2;
    };
    document.getElementById("mySlides fade").src = img + ".jpg";
};

function cambiaImagenDe(){ 
    img += 1;
    if (img > 2){
        img = 0;   
    }
    document.getElementById("mySlides fade").src = img + ".jpg";
};

iz.onclick = cambiaImagenIz;
de.onclick = cambiaImagenDe;

window.addEventListener('deviceorientation', trataOrientacion);


function trataOrientacion(e){
    document.getElementById("myslydes fade").style.transform = "rotateX("+e.alpha + "deg) rotateY("+e.beta + "deg) rotateZ("+e.gamma + "deg)";
    //document.getElementById("myslydes fade").style.tr
    ansform = "rotate("+e.beta + "deg)";
    //document.getElementById("myslydes fade").style.transform = "rotate("+e.gamma + "deg)";
}