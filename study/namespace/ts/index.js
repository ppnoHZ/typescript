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
strings.forEach(s => {
    for (var name in validators) {
        console.log(name + '  ' + (validators[name].isAcceptable(s) ? "matches  " : "does not matches  "));
    }
});
//# sourceMappingURL=index.js.map