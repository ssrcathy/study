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
class Animal {
    name:string;
    constructor(theName:string){
        this.name = theName
    }
    move(distanceInMeters:number=0){
        console.log(`${this.name} moved ${distanceInMeters}m.`)
    }
}
class Snake extends Animal {
    constructor(name:string){
        super(name);
    }
    move(distanceInMeters=5){
        console.log("Slithering...")
        super.move(distanceInMeters)
    }
}

class Horse extends Animal{
    constructor(name:string){
        super(name)
    }
    move(distanceInMeters=45){
        console.log("Galloping...")
        super.move(distanceInMeters)
    }

}
let sam = new Snake("sam")
let tom = new Horse("tom")
sam.move(23)
tom.move(13)
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
