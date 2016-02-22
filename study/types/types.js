/**
 * Created by ID on 16/2/17.
 */
//bool
var isDon = false;
//number
var decLiteral = 6;
var hexLiteral = 0x9831abdef;
var name = 'bob';
name = 'zdd';
//字符模板
console.log("---------字符模板--------");
var n = `Gene`;
var age = 37;
var sentenct = `hello ,my name is ${n},age: ${age + 1}`;
console.log(sentenct); //hello ,my name is Gene,age: 38
console.log("---------字符模板--------");
//数组
var list = [1, 2, 3];
//泛型数组
var list1 = [1, 2, 3];
var listStrings = ["1", "22", "2"];
//枚举
//定义
var color3;
(function (color3) {
    color3[color3["red"] = 0] = "red";
    color3[color3["green"] = 1] = "green";
    color3[color3["blue"] = 2] = "blue";
})(color3 || (color3 = {}));
//定义值
var color1;
(function (color1) {
    color1[color1["red"] = 1] = "red";
    color1[color1["green"] = 2] = "green";
    color1[color1["blue"] = 3] = "blue";
})(color1 || (color1 = {}));
var color2;
(function (color2) {
    color2[color2["red"] = 1] = "red";
    color2[color2["green"] = 5] = "green";
    color2[color2["blue"] = 6] = "blue";
})(color2 || (color2 = {}));
//使用
var cc = color3.red;
//通过数值查找对应的名字。
var colorName = color3[1];
console.log(colorName); //green
//any
var notSure = 4;
notSure = '4';
notSure = false;
console.log(notSure); //false
//any和object的区别
//any
var n1 = 4;
n1.toString(); //error
var o1 = 4;
console.log(o1.toString()); //4
var listAny = [1, "d", true];
//void于any相反
function warnUser() {
}
//# sourceMappingURL=types.js.map