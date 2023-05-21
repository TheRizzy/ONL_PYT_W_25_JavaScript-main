class Duck{
    constructor(){
        this.type = "ordinary duck";
    }

    sound(){
        console.log("Quack quack");
    }

    swim(){
        console.log("I'm swimming");
    }

    print(){
        console.log(`Looks like ${this.type}`);
    }

    fly(){
        console.log("I'm flying");
    }
}

const donaldDuck = new Duck();
donaldDuck.sound();
donaldDuck.swim();
donaldDuck.print();

class WildDuck extends Duck{
    constructor() {
        super();
        this.type = "wild";
    }
}

const daffyDuck = new WildDuck();
daffyDuck.sound();
daffyDuck.swim();
daffyDuck.print();


class MallardDuck extends Duck{
    constructor() {
        super();
        this.type = "mallard";
    }
}

const daisyDuck = new MallardDuck();
daisyDuck.sound();
daisyDuck.swim();
daisyDuck.print();

donaldDuck.fly();
daffyDuck.fly();
daisyDuck.fly();


class RubberDuck extends Duck{
    constructor(){
        super();
        this.type = 'rubber';
    }
    fly(){
        console.log("Rubber ducks can't fly!");
    }
}

const howardTheDuck = new RubberDuck();
howardTheDuck.sound();
howardTheDuck.swim();
howardTheDuck.print();
howardTheDuck.fly();
