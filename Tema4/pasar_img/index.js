const iz = document.getElementById('iz');
const de = document.getElementById('de');
img = 1;

function cambiaImagenIz(){
    img -= 1;
    if (img < 1){
        img = 3;
    };
    document.getElementById("miimagen").src = img + ".jpg";
    document.getElementById('contador').innerHTML="<p>"+img+"/3</p>"
};

function cambiaImagenDe(){ 
    img += 1;
    if (img > 3){
        img = 1;   
    }
    document.getElementById("miimagen").src = img + ".jpg";
    document.getElementById('contador').innerHTML="<p>"+img+"/3</p>"

};

iz.onclick = cambiaImagenIz;
de.onclick = cambiaImagenDe;

/* window.addEventListener('deviceorientation', trataOrientacion);


function trataOrientacion(e){
    document.getElementById("myslydes fade").style.transform = "rotateX("+e.alpha + "deg) rotateY("+e.beta + "deg) rotateZ("+e.gamma + "deg)";
    //document.getElementById("myslydes fade").style.tr
    ansform = "rotate("+e.beta + "deg)";
    //document.getElementById("myslydes fade").style.transform = "rotate("+e.gamma + "deg)";
} */