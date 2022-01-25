export{Game, Player}


window.onload



class Game {
    constructor(player1, player2){
        this.ganador = "";
        this.j1 = player1;
        this.j2 = player2;
    };

    partida(){
        while (this.ganador == ""){
            this.j1.tirada_actual = prompt('Ingresa opción("tijera", "papel", "piedra"): ');
            this.j2.tirada_actual = prompt('Ingresa opción("tijera", "papel", "piedra"): ');
            this.j1.historial.push(this.j1.tirada_actual);
            this.j2.historial.push(this.j2.tirada_actual);
            if ((this.j1.tirada_actual == "tijera" && this.j2.tirada_actual == "papel")||(this.j1.tirada_actual == "papel" & this.j2.tirada_actual == "piedra")||(this.j1.tirada_actual == "piedra" & this.j2.tirada_actual == "tijera")){
                this.ganador = this.j1.name;
            }
            if ((this.j2.tirada_actual == "tijera" && this.j1.tirada_actual == "papel")||(this.j2.tirada_actual == "papel" & this.j1.tirada_actual == "piedra")||(this.j2.tirada_actual == "piedra" & this.j1.tirada_actual == "tijera")){
                this.ganador = this.j2.name;
            }
        };

        document.write(`El ganador es ${this.ganador}`);     
        this.ganador = "";
    };

};



class Player {
    constructor(name) {
    this.name = name
    this.tirada_actual = ""
    this.historial = [];
    };
}

a = new Player("Carcelero");
b = new Player("Mel");

g = new Game(a,b);
g.partida();



