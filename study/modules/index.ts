/**
 * Created by ID on 16/2/19.
 * Author:zhoudd
 * email:zhoudd@stark.tm
 */
import {ZipCodeValidator} from "./ZipCodeValidator";//导入模块中部分 numberRegexp 没有导入

//import "./ZipCodeValidator" //导出所有了

//导入默认的
//import validation from "./ZipCodeValidator";

import {ParseIntBasedZipCodeValidator} from "./ParseIntBasedZipCodeValidator"
//import {ParseIntBasedZipCodeValidator as Validator} from "./ParseIntBasedZipCodeValidator"
//var d = new Validator();


//将整个模块导入到一个变量
//import * as Validator from  "./ParseIntBasedZipCodeValidator"
//var d = new Validator();

var d = new ParseIntBasedZipCodeValidator();
d.isAcceptable('234204')
//d.isA

var a=new ParseIntBasedZipCodeValidator();
a.isAcceptable('dddff')

