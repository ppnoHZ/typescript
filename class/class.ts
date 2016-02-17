/**
 * Created by zhoudd on 2016/2/17.
 */
class Greeter {
    greeting:string;

    constructor(message:string) {
        this.greeting = message;
    }

    greet() {
        return "hello," + this.greeting;
    }

}
var greeter = new Greeter('world');


//ผฬณะ
class Animal {
    name:string;

    constructor(theName:string) {
        this.name = theName;
    }

    move(meters:number = 0) {
        alert(this.name + ' moved ' + meters + "m.")
    }

}
class Snake extends Animal {
    constructor(name:string) {
        super(name)
    }

    move(meters = 5) {
        alert('Slithering...');
        super.move(meters);
    }
}
class Horse extends Animal{
    constructor(name:string){
        super(name)
    }
    move(meters=45){
        alert('Galloping...')
        super.move(meters);
    }
}
var sam =new Snake('Sammy the python');
var tom:Animal=new Horse('Tommy the Palomion');

sam.move();
tom.move(34)
