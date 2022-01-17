// class Greeter {
//     greeting:string;
//     constructor(message:string){
//         this.greeting = message;
//     };
//     greet(){
//         return "Hello,"+this.greeting;
//     }
// }
// let greeter = new Greeter("world")
//
// console.log(greeter.greeting)
// console.log(greeter.greet())
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//类的继承
// class Shape{
//     Area:number
//     constructor(a:number){
//         this.Area = a
//     }
// }
//
// class Circle extends Shape {
//     disp():void{
//         console.log("Circle'Area is :" this.Area)
//     }
// }
//
// var obj = new Circle(244);
// obj.disp()
//一个子类只能继承一个父类，但可以实现多重继承
// class Root{
//     str:string;
// }
// class Child extends Root{
//
// }
//
// class Leaf extends Child{}
//
// var obj = new Leaf();
// obj.str = "hello";
// console.log(obj.str)
//----------------继承类的方法重写-------------
//  class PrinterClass {
//      doPrint():void{
//          console.log("父类的doPrint()方法")
//      }
//  }
//  class StringPrinter extends PrinterClass{
//     doPrint():void{
//         super.doPrint() //调用父类的方法
//         console.log("子类的doPrint()方法")
//     }
//  }
//
//  var obj = new StringPrinter()
// obj.doPrint()
// *********案例2*******
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("sam");
var tom = new Horse("tom");
sam.move(23);
tom.move(13);
//----------------static关键字---------------
// class StaticMem {
//     static num:number;
//     static disp():void{
//         console.log("num 值为"+StaticMem.num)
//     }
// }
//
// StaticMem.num = 12  //初始化静态变量
// StaticMem.disp()    //调用静态方法
//------------instanceof运算符-----------------
//用于判断对象是否是指定类型
// class Person{}
// var obj = new Person()
// var  isPerson = obj instanceof Person
// console.log("obj 对象是Person类实例化来的吗？"+ isPerson)
//---------访问控制修饰符---------------------
// class  Encapsulate {
//     str1:string = "hello"
//     private str2:string = "world"
// }
// var obj = new Encapsulate()
// console.log(obj.str1)
// console.log(obj.str2)
//-------------类与接口-----------------
//可以将类转换为接口
// interface Iloan {
//     interest:number
// }
//
// class AgriLoan implements Iloan{
//     interest:number
//     rebate:numer
//
//     constructor(interest:number,rebate:number){
//         this.interest = interest
//         this.rebate = rebate
//     }
// }
// var obj = new AgriLoan(10,1)
// console.log("利润为："+obj.interest,"抽成为："+obj.rebate)
//# sourceMappingURL=%E7%B1%BB.js.map