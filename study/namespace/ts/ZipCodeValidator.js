/**
 * Created by ID on 16/2/19.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */
///<reference path="Validation.ts"/>
var Validation;
(function (Validation) {
    const numberRegexp = /^[0-9]+$/;
    class ZipCodeValidatorEx {
        isAcceptable(s) {
            return numberRegexp.test(s);
        }
    }
    Validation.ZipCodeValidatorEx = ZipCodeValidatorEx;
})(Validation || (Validation = {}));
//# sourceMappingURL=ZipCodeValidator.js.map