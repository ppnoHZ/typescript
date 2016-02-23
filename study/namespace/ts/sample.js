/**
 * Created by ID on 16/2/19.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */
/**
 * Created by ID on 16/2/19.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */
///<reference path="Validation.ts"/>
var Validation;
(function (Validation) {
    var numberRegexp = /^[0-9]+$/;
    var ZipCodeValidatorEx = (function () {
        function ZipCodeValidatorEx() {
        }
        ZipCodeValidatorEx.prototype.isAcceptable = function (s) {
            return numberRegexp.test(s);
        };
        return ZipCodeValidatorEx;
    })();
    Validation.ZipCodeValidatorEx = ZipCodeValidatorEx;
})(Validation || (Validation = {}));
/**
 * Created by ID on 16/2/19.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */
/// <reference path="Validation.ts" />
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LettersOnlyValidatorEx = (function () {
        function LettersOnlyValidatorEx() {
        }
        LettersOnlyValidatorEx.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidatorEx;
    })();
    Validation.LettersOnlyValidatorEx = LettersOnlyValidatorEx;
})(Validation || (Validation = {}));
/**
 * Created by ID on 16/2/19.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */
///<reference path="Validation.ts"/>
///<reference path="ZipCodeValidator.ts"/>
///<reference path="LettersOnlyValidator.ts"/>
var strings = ['hello', '656645', '4564'];
var validators = {};
validators['ZIP code'] = new Validation.ZipCodeValidatorEx();
validators['Letters'] = new Validation.LettersOnlyValidatorEx();
strings.forEach(function (s) {
    for (var name in validators) {
        console.log(name + '  ' + (validators[name].isAcceptable(s) ? "matches  " : "does not matches  "));
    }
});
