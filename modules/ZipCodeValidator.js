//export const numberRegexp = /^[0-9]+$/
//默认导出,只能有一个
//export default class ZipCodeValidator implements StringValidator {
//    isAcceptable(s:string) {
//        return numberRegexp.test(s);
//    }
//}
/**
 * 重命名
 */
exports.numberRegexp = /^[0-9]+$/;
class ZipCodeValidator {
    isAcceptable(s) {
        return exports.numberRegexp.test(s);
    }
}
exports.ZipCodeValidator = ZipCodeValidator;
exports.mainValidator = ZipCodeValidator;
//export {ZipCodeValidator}
//# sourceMappingURL=ZipCodeValidator.js.map