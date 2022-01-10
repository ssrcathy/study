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

//联合类型和接口----------------------
// interface runOptions {
//     program:string;
//     commandline:string[]|string|(()=>string);
// }
//
// //commandline是字符串
// var options:RunOptions = {
//     program:"test1",
//     commandline:"hello"
// }
// console.log(options.commandline)
//
// //commandline是字符串数组
// var options1:RunOptions = {
//     program:"test2",
//     commandline:["hello","world"]
// }
// console.log(options1.commandline[0]);
// console.log(options1.commandline[1]);
//
// //commandline是一个函数表达式
// var options2:RunOptions = {
//     program:"test3",
//     commandline:()=>{
//         return "**hello world**"
//     }
// }
//
// var fn = options2.commandline;
// console.log(fn());

//接口和数组------------------
//接口中我们可以将数组的索引与元素设置为不同类型，索引值可以是数字或字符串
// interface namelist{
//     [index:number]:string
// }

// var list:namelist = ["john",1,"bean"] //error:1 不是string
// interface ages{
//     [index:string]:number
// }
// var agelist:ages;
// agelist["john"] = 13

//继承----------------------
//单继承实例
interface Person {
    age:number
}
interface Musician extends Person{
    instrument:string
}

var drummer = <Musician>{};

drummer.age = 17
drummer.instrument = "piano"
console.log("年龄："+drummer.age)
console.log("喜欢的乐器："+drummer.instrument)

//多继承实现
interface IPname {
    name:string;
    idNumber:number
}
interface child extends Person,Musician,IPname {
    language:string,
}

var child1:child={name:"bob",age:"23",idNumber:"10002",instrument:"piano",language:'english'}
console.log('childName:'+child1.name)
console.log('childAge:'+child1.age)
console.log('childIdNumber:'+child1.idNumber)
console.log('childInstrument:'+child1.instrument)
console.log('childLanguage:'+child1.language)
