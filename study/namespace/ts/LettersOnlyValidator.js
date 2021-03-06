/**
 * Created by ID on 16/2/19.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */
/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
    const lettersRegexp = /^[A-Za-z]+$/;
    class LettersOnlyValidatorEx {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    Validation.LettersOnlyValidatorEx = LettersOnlyValidatorEx;
})(Validation || (Validation = {}));
//# sourceMappingURL=LettersOnlyValidator.js.map