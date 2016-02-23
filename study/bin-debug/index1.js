/**
 * Created by ID on 16/2/19.
 */
var Validation;
(function (Validation) {
    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;
    class LetterOnlyVaildator {
        isAcceptable(s) {
            return lettersRegexp.test(s);
        }
    }
    Validation.LetterOnlyVaildator = LetterOnlyVaildator;
    class ZipCodeValidator {
        isAcceptable(s) {
            return numberRegexp.test(s);
        }
    }
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
var strings = ['hello', '656645', '4564'];
var validators = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters'] = new Validation.LetterOnlyVaildator();
strings.forEach(s => {
    for (var name in validators) {
        console.log(name + '  ' + (validators[name].isAcceptable(s) ? "matches  " : "does not matches  "));
    }
});
//# sourceMappingURL=index1.js.map