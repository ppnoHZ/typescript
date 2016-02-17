/**
 * Created by ID on 16/2/17.
 */
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
;
var myObj = { size: 12, label: 'size 12 object' };
printLabel(myObj); //size 12 object
;
function printLed(labelledObj) {
    console.log(labelledObj.label);
}
;
var my = { size: 10, label: 'size 10 object' };
printLed(my); //size 10 object
;
//定义返回值的类型必须包含某些字段，定义参数必须符合某些属性
function caeateSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width;
    }
    return newSquare;
}
;
var mySquare = caeateSquare({ color: 'black' });
console.log(mySquare); //Object {color: "black", area: 100}
;
//实现接口的方法（一）
var mySearch;
mySearch = function (source, substring) {
    var result = source.search(substring);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
//实现接口的方法（二）
var mySearch1;
//参数名称无所谓，只有类型对就可以了。
mySearch1 = function (src, sub) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
//虽然索引标识是描述数组和字典类型的数据的好方法，
// 它同时也会强迫其他所有属性都与索引的返回类型相同。
// 在下面的例子中，'length'属性的类型不符合索引的返回类型，这会导致类型检查抛出错误：
//interface Dictionary {
//    [index: number]: string;
//    length: number;    // error, the type of 'length' is not a subtype of the indexer
//}
var myStringArray;
myStringArray = ['bob', 'fred'];
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
})();
//这是因为当一个类实现一个接口时，
//只有实例的部分会被进行检查。构造函数属于静态的部分，
//它并不在检查的范围之内。所以下面会报错
//class Clockd implements ClockInterface1 {
//    constructor(h:number, m:number) {
//
//    }
//}
var Clock2 = (function () {
    function Clock2(h, m) {
    }
    return Clock2;
})();
var cs = Clock2;
var newClock = new cs(2, 30);
var square = {};
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;
var c;
c(10);
c.reset();
c.interval = 5.0;
//# sourceMappingURL=interfaces.js.map