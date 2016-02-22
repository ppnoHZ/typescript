/**
 * Created by ID on 16/2/19.
 */
var lettersRegexp = /^[A-Za-z]+$/;
var numberRegexp = /^[0-9]+$/;
class LetterOnlyVaildator {
    isAcceptable(s) {
        return lettersRegexp.test(s);
    }
}
class ZipCodeValidator {
    isAcceptable(s) {
        return numberRegexp.test(s);
    }
}
var strings = ['hello', '656645', '4564'];
var validators = {};
validators['ZIP code'] = new ZipCodeValidator();
validators['Letters'] = new LetterOnlyVaildator();
strings.forEach(s => {
    for (var name in validators) {
        console.log(name + '  ' + (validators[name].isAcceptable(s) ? "matches  " : "does not matches  "));
    }
});
//# sourceMappingURL=index.js.map