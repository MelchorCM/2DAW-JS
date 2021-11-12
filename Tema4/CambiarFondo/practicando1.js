const btn = document.querySelector('button');
const p = document.querySelector('p');
const h2 = document.querySelector('h2');
const img = document.querySelector('img');
const div = document.querySelector('div');



function random(number) {
  return Math.floor(Math.random() * (number+1));
}

function cambiaColor() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}
btn.focus = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
}

p.onclick = cambiaColor;
div.onclick = cambiaColor;
btn.addEventListener("click",cambiaColor);
btn.addEventListener("focus",cambiaColor);
img.onclick = cambiaColor;
h2.onclick = cambiaColor;

for (i=0; i<20; i++)
document.bodt.innerHTML +="<h1> Esto se crea dinamicamente</h1>";