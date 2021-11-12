class Car {
    constructor(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
    };

    fill(gallons){
        this.tank += gallons;
    };

    drive(distance){
        if (this.tank >(distance/milesPerGallon)){
            this.odometer += distance
            this.tank -= (distance/milesPerGallon)
        }else{
            this.odometer += this.tank*this.milesPerGallon 
            this.tank = 0
            return `I ran out of fuel at ${odometer} miles!`
        }
        
    }






}