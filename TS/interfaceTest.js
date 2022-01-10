// interface IPerson {
//     firstName:string,
//     lastName:string,
//     sayHi:()=>string
//
// }
//
// var customer:IPerson={
//     firstName:"Tom",
//     lastName:"hanks",
//     sayHi:():string=>{return "hi there"}
// }
// console.log("Customer 对象")
// console.log(customer.firstName)
// console.log(customer.lastName)
// console.log(customer.sayHi())
//
// var employee:IPerson={
//     firstName:"jam",
//     lastName:"blakes",
//     sayHi:():string=>{
//         return "Hello!!"
//     }
// }
//
// console.log("employee 对象")
// console.log(employee.firstName)
// console.log(employee.lastName)
// console.log(employee.sayHi())
// 创建实例的函数
function CreateClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("deep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
        ß;
    };
    return AnalogClock;
}());
var digital = CreateClock(DigitalClock, 12, 17);
var analog = CreateClock(AnalogClock, 7, 23);
//# sourceMappingURL=interfaceTest.js.map