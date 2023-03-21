class Animal
{
    //properties
    price;
    color;
    type;


    //methods
    constructor(price, color, type){
        this.price = price;
        this.color = color;
        this.type = type;
    }

    getDiscount(){
        return this.price * 0.1
    }

    walk(){
        console.log("walks on 4");
    }

    toString(){ //override
        return "ahmed"
    }
}

let x = new Animal(100, "red", "Dog")

class Dog extends Animal
{
    price;

    sell(){

    }
}

class Cat extends Animal
{
    
}

class Chicken extends Animal
{
    walk(){
        console.log("walks on 2");
    }
}

class Snake extends Animal
{
    walk(){
        console.log("Crawls");
    }
}