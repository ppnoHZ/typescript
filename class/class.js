var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/**
 * Created by zhoudd on 2016/2/17.
 */
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hello," + this.greeting;
    };
    return Greeter;
})();
var greeter = new Greeter('world');
//类继承
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.log(this.name + ' moved ' + meters + "m.");
    };
    return Animal;
})();
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, meters);
    };
    return Snake;
})(Animal);
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        console.log('Galloping...');
        _super.prototype.move.call(this, meters);
    };
    return Horse;
})(Animal);
var sam = new Snake('Sammy the python');
var tom = new Horse('Tommy the Palomino');
sam.move(); // Galloping... Sammy the python moved 5m.
tom.move(34); // Slithering... Tommy the the Palomino 34m.
//私有共有
//同C#一样，
// protected  只能在子类的内部访问
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
})();
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        _super.call(this, name);
        this.department = department;
    }
    Employee.prototype.getElevatorPitch = function () {
        return `hello, my name is ${this.name} and I work in ${this.department}`;
    };
    return Employee;
})(Person);
var howard = new Employee('zhoudd', "Sales");
console.log(howard.getElevatorPitch()); //hello, my name is zhoudd and I work in Sales
//console.log(howard.name)//Error:(88, 13) TS2445: Property 'name' is protected and only accessible within class 'Person' and its subclasses.
//通过给构造函数的参数知道修饰符，相当于在全局定义了个对于修饰符的变量，可以在其他地方访问
var Animal1 = (function () {
    function Animal1(name) {
        this.name = name;
    }
    Animal1.prototype.move = function (d) {
        //构造函数中定义了name  所以这里可以用this.name来访问
        console.log(this.name, d);
    };
    return Animal1;
})();
//get/set  类似C#的属性。
var E = (function () {
    function E() {
    }
    Object.defineProperty(E.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
        },
        enumerable: true,
        configurable: true
    });
    return E;
})();
//静态属性 （类C#）
var StaticClass = (function () {
    function StaticClass() {
    }
    StaticClass.prototype.getName = function () {
        return StaticClass.named;
    };
    StaticClass.named = 'zdd';
    return StaticClass;
})();
var s = new StaticClass();
console.log(s.getName()); //zdd
StaticClass.named = 'static zdd';
console.log(s.getName()); //static zdd
//抽象类abstract
//abstract class a{
//}
//# sourceMappingURL=class.js.map