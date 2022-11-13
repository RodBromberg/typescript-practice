"use strict";
exports.__esModule = true;
exports.str = void 0;
// 1.
// types by inference
exports.str = 'hello world';
console.log(exports.str);
// 2.
// types by inference
var user = {
    name: 'rod',
    id: 1
};
// 3.
// however interface is preferred unless specific type is neccesary
var newUser = {
    name: 'newUser',
    id: 2
};
// 4. Declare type on array
var arrNums = [43];
var arrStr = ['foo', 'bar'];
var obj = {};
obj.name = user.name;
console.log(obj);
function createObj(name, color) {
    var obj = {};
    obj.name = name;
    obj.color = color;
    return obj;
}
var newObj = createObj('jack', 'red');
console.log(newObj);
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var userAccount = new UserAccount("Murphy", 1);
console.log(userAccount);
function wrapArry(str) {
    if (typeof str === "string") {
        return str;
    }
    return str;
}
var strTest = wrapArry('hello');
var strTest2 = wrapArry(['hello', 'yes']);
console.log(strTest);
console.log(strTest2);
var arrTodos = [{ id: 1, todos: ['one', 'two', 'three'] }];
console.log(arrTodos);
var strValue = 'hello';
console.log('HELLO'.toLowerCase());
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date, "!"));
}
function greeting(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date, "!"));
}
greet("Brendan", 'nov 13th');
greeting("Mike", 'nov 13th');
//   const arr: ArrT = [{id: 1, name: 'foo', todos: ['string']}]
