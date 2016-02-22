/**
 * Created by zhoudd on 2016/2/17.
 */
class Greeter1 {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "hello," + this.greeting;
    }
}
var greeter = new Greeter1('world');
//类继承
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(meters = 0) {
        console.log(this.name + ' moved ' + meters + "m.");
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(meters = 5) {
        console.log('Slithering...');
        super.move(meters);
    }
}
class Horse extends Animal {
    constructor(name) {
        super(name);
    }
    move(meters = 45) {
        console.log('Galloping...');
        super.move(meters);
    }
}
var sam = new Snake('Sammy the python');
var tom = new Horse('Tommy the Palomino');
sam.move(); // Galloping... Sammy the python moved 5m.
tom.move(34); // Slithering... Tommy the the Palomino 34m.
//私有共有
//同C#一样，
// protected  只能在子类的内部访问
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employee extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `hello, my name is ${this.name} and I work in ${this.department}`;
    }
}
var howard = new Employee('zhoudd', "Sales");
console.log(howard.getElevatorPitch()); //hello, my name is zhoudd and I work in Sales
//console.log(howard.name)//Error:(88, 13) TS2445: Property 'name' is protected and only accessible within class 'Person' and its subclasses.
//通过给构造函数的参数知道修饰符，相当于在全局定义了个对于修饰符的变量，可以在其他地方访问
class Animal1 {
    constructor(name) {
        this.name = name;
    }
    move(d) {
        //构造函数中定义了name  所以这里可以用this.name来访问
        console.log(this.name, d);
    }
}
//get/set  类似C#的属性。
class E {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
    }
}
//静态属性 （类C#）
class StaticClass {
    constructor() {
    }
    getName() {
        return StaticClass.named;
    }
}
StaticClass.named = 'zdd';
var s = new StaticClass();
console.log(s.getName()); //zdd
StaticClass.named = 'static zdd';
console.log(s.getName()); //static zdd
//抽象类abstract
//abstract class a{
//}
//# sourceMappingURL=class.js.map