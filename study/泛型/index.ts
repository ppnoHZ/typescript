

function identity<T>(params: T): T {
    return params;
}

var output = identity<string>("string");
console.log(output) //string

console.log(identity('string'));//string


function identity1<T>(arg: T): T {
    // console.log(arg.length);//error
    return arg;
}

function identity2<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}


//泛型接口方法
interface GenericIdentiryFn {
    <T>(arg: T): T;
}
function identity3<T>(arg: T): T {
    return arg;
}
var myIdentity: GeneratorFunction = identity3;


//泛型接口2
interface GenericIdentiryFn1<T> {
    (arg: T): T;
}
function identity4<T>(arg: T): T {
    return arg;
}
var myIdentity1: GenericIdentiryFn1<number> = identity4;

//泛型类

/**
 * GenericNumber
 */
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T; //方法
}

var myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 6;
myGenericNumber.add = function(x, y) {
    return x + y;
}
console.log(myGenericNumber.add(1, 2));


//泛型约束
interface Lengtwise {
    length: number;
}
function loggingIdentity<T extends Lengtwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}

loggingIdentity({ length: 3, value: 3 })

//在泛型约束中使用类型参数
// function fund<T>(n:T,s:Findable<T>) {
    
// }

/**
 * BeeKeeper
 */
class BeeKeeper {
    hasMask: boolean;
}
/**
 * ZooKeeper
 */
class ZooKeeper {
    nameTag: string;
}

/**
 * Animal
 */
class animal {
    numLegs: number;
}
/**
 * Bee
 */
class Bee extends animal {
    keeper: BeeKeeper;
}

/**
 * Lion
 */
class Lion extends animal {
    keeper: ZooKeeper
}
function findKeeper<A extends animal, K>(a: { new (): A; prototype: { keeper: K } }): K {
    return a.prototype.keeper;
}
// findKeeper(Lion.nametag);