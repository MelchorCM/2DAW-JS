class Lambdasian{
    constructor(datos){
        this.name = datos.name;
        this.age = datos.age;
        this.location = datos.location;
    }

    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }

};

datos={
    name:"Jose",
    age: 25,
    location: "Granada"
};