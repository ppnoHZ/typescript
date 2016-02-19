class Birds {
    fly() {
        console.log('Birds.fly');
    }
    layEggs() {
        console.log('Birds.layEggs');
    }
}
function getSamllPet() {
    //可以返回 Fish 也可能返回Bird
    return new Birds();
}
var pet = getSamllPet();
pet.layEggs();
//pet.swim();//由于不确定返回Bird哈哈是Fish所以会报错
//下面的判断都会报错
//if (pet.swim) {
//    pet.swim();
//} else if (pet.fly) {
//    pet.fly();
//}
//改良1 类型断言（强转）
if (pet.swim()) {
    pet.swim();
}
else {
    pet.fly();
}
//改良2 类型断言 parameterName is Type的形式
//function isFish (pet:Fish|Bird):pet is Fish{
//    return (<Fish>pet).swim !== undefined;
//}
//
//if (isFish(pet) {
//    pet.swim();
//}
//else {
//    pet.fly();
//}
/**
 * 注意TypeScript不仅知道在if分支里pet是Fish类型； 它还清楚在else分支里，一定不是Fish类型，一定是Bird类型。
 */
/**
 *
 * typeof 判断参数的类型
 * 这些typeof类型保护只有2个形式能被识别：
 *
 * typeof v === "typename"和typeof v !== "typename"，
 *
 * "typename"必须是"number"，"string"，"boolean"或"symbol"。
 *
 * 但是TypeScript并不会阻止你使用除这些以外的字符串，或者将它们位置对换，且语言不会把它们识别为类型保护。
 */
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error("Expected string or number, got '${value}'.");
}
class SpaceRepeatingPadder {
    constructor(numSpaces) {
        this.numSpaces = numSpaces;
    }
    getPaddingString() {
        return Array(this.numSpaces).join(" ");
    }
}
class StringPadder {
    constructor(value) {
        this.value = value;
    }
    getPaddingString() {
        return this.value;
    }
}
function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}
// 类型为SpaceRepeatingPadder | StringPadder
var padder = getRandomPadder();
if (padder instanceof SpaceRepeatingPadder) {
    padder; // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    padder; // 类型细化为'StringPadder'
}
/**
 *instanceof的右侧要求为一个构造函数，TypeScript将细化为：
     这个函数的prototype属性，如果它的类型不为any的话
     类型中构造签名所返回的类型的联合，顺序保持一至。
 *
 */
//# sourceMappingURL=index.js.map