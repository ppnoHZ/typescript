function logClass(target: any) {

    // console.log('targe', target)

    // var original = target;
    // console.log('original',original)
    // function construct(constructor, args) {
    //     var c: any = function () {
    //         return constructor.apply(this, args);
    //     }
    //     c.prototype = constructor.prototype;
    //     return new c();
    // }


    // var f: any = function (...args) {
    //     console.log('new' + original.name);
    //     return construct(original, args);
    // }

    // f.prototype = original.prototype;

    // return f;

    return target;
}
function logMethod(target: any, key: string, descriptor: any) {
    console.log('ddddd', arguments)
}

function test(age: number): string;
function test(name: string): string;
function test(value: (string | number | boolean)): string {
    //判断value类型
    return ''
}
class User {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    greet() {
        alert(`我的名字叫${this.name}`);
    }
    greetDelay(time: number) {
        setTimeout(() => {
            alert(`我的名字叫${this.name}`);
        }, time);
    }
}

let t = new User('typescript');
t.greet();
t.greetDelay(1000)

class Order {

}

function getUsers(cb: (users: User[]) => void): void {
    //POST 获取到User之后调用cb
    cb([]);
}
getUsers(function (user: User[]) {
    // for
})

function getEntities<T>(url: string, cb: (list: T[]) => void): void {
    cb([]);
}

getEntities<User>('api/users', function (user: User[]) {
    // for
})
getEntities<Order>('api/users', function (user: Order[]) {
    // for
})

@logClass
class PersonTest {
    constructor(private name: string, private fullname: string) {

    }
    @logMethod
    sayHello(someting: string) {
        return this.name + "   " + this.fullname + ":" + 'hello'
    }

}


let z = new PersonTest('zhou', 'test')
z.sayHello('method');

console.log('z', z)