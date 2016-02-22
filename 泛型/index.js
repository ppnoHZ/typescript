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
//# sourceMappingURL=index.js.map