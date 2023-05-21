class Vehicle {
    constructor(){
        this.engine = true;
    }

}

class Boat extends Vehicle {
    sail() {
        console.log("I am saling");
    }
}

class Car extends Vehicle {
    drive() {
        console.log('I am driving');
    }

}

class Plane extends Vehicle {
    fly() {
        console.log('I am flying');
    }
}

const plane = new Plane;
plane.fly;

const car = new Car;
car.drive;

const boat = new Boat;
boat.sail;