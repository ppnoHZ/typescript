/**
 * Created by ID on 16/2/19.
 */
//namespace Validation {
//    export interface StringValidator {
//        isAcceptable(s:string):boolean;
//    }
//    const lettersRegexp = /^[A-Za-z]+$/;
//    const numberRegexp = /^[0-9]+$/;
//
//    export class LetterOnlyVaildator implements StringValidator{
//        isAcceptable(s:string){
//            return lettersRegexp.test(s)
//        }
//    }
//    export class ZipCodeValidator implements StringValidator{
//        isAcceptable(s:string){
//
//            return numberRegexp.test(s);
//        }
//    }
//}
//
//var strings = ['hello', '656645', '4564']
//
//
//var validators:{[s:string]:Validation.StringValidator;} = {};
//
//validators['ZIP code'] = new Validation.ZipCodeValidator();
//validators['Letters'] = new Validation.LetterOnlyVaildator();
//
//strings.forEach(s=> {
//    for (var name in validators) {
//        console.log(name+'  '+(validators[name].isAcceptable(s) ? "matches  " : "does not matches  ") );
//    }
//})
//# sourceMappingURL=index1.js.map