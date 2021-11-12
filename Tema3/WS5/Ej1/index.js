var cat = new Object();

car.tiredness = False;
car.hunger = True;
car.lonliness = True;
car.happiness = True;


car.feed = (() => this.hunger = false );
car.sleep =(() => this.sleep = false);
car.pet = (() => {
    this.happiness = "happy";
    this.lonliness = "in love";
})
