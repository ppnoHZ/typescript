function identity(params) {
    return params;
}
var output = identity("string");
console.log(output); //string
console.log(identity('string')); //string
function identity1(arg) {
    // console.log(arg.length);//error
    return arg;
}
function identity2(arg) {
    console.log(arg.length);
    return arg;
}
function identity3(arg) {
    return arg;
}
var myIdentity = identity3;
function identity4(arg) {
    return arg;
}
var myIdentity1 = identity4;
//泛型类
/**
 * GenericNumber
 */
class GenericNumber {
}
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 6;
myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log(myGenericNumber.add(1, 2));
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity({ length: 3, value: 3 });
//在泛型约束中使用类型参数
// function fund<T>(n:T,s:Findable<T>) {
// }
/**
 * BeeKeeper
 */
class BeeKeeper {
}
/**
 * ZooKeeper
 */
class ZooKeeper {
}
/**
 * Animal
 */
class animal {
}
/**
 * Bee
 */
class Bee extends animal {
}
/**
 * Lion
 */
class Lion extends animal {
}
function findKeeper(a) {
    return a.prototype.keeper;
}
// findKeeper(Lion.nametag); 
//# sourceMappingURL=index.js.map