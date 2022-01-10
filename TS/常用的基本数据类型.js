/*
Number
var num = new Number() MAX_VALUE/MIN_VALUE/NEGATIVE_INFINITY/POSITIVE_INFINITY

Number对象属性
*
* */
// console.log("TypeScript Number 属性: ");
// console.log("最大值为: " + Number.MAX_VALUE);
// console.log("最小值为: " + Number.MIN_VALUE);
// console.log("负无穷大: " + Number.NEGATIVE_INFINITY);
// console.log("正无穷大:" + Number.POSITIVE_INFINITY);
// var month = 0
// if(month<=0||month>12){
//     month = Number.NaN
//     console.log("month is error"+month)
// }else{
//     console.log("month is"+month)
// }
// function employee(id:number,name:string){
//     this.id = id
//     this.name = name
// }
// var emp = new employee(123,"admin");
// employee.prototype.email="admin@gmail.com"
//
// console.log("员工号"+emp.id)
// console.log("员工名"+emp.name)
// console.log("员工邮箱"+emp.email)
// /*数组*/
// var arrA:number[] = new Array(4)
// for(let i = 0;i<arrA.length;i++){
//     arrA[i]=i*2
//     console.log(arrA[i])
// }
//解构
// var arr:number[] = [12,13]
// var [x,y] = arr //将数组的两个元素赋值给比那辆x和y
// console.log(x);
// console.log(y);
//作为参数传递给函数
// var sites:string[] = new Array("Google","baidu","wiki");
// function disp(arr_sites:string[]){
//     for(let i=0;i<arr_sites.length;i++){
//         console.log(arr_sites[i])
//     }
// }
// disp(sites);
//作为函数的返回值
// function disp():string[]{
//     return new Array("google","taobao","faceBook");
// }
// var sites:string[] = disp()
// for (var i in sites){
//     console.log(sites[i]);
// }
// //map
// let myMap = new Map();
//
// myMap.set("admin",1);
// myMap.set("admin2",2);
// myMap.set("admin3",3);
//
// //迭代map中的key
// for (let key of myMap.keys()){
//     console.log(key)
// }
// //迭代map中的value
// for (let value of myMap.values()){
//     console.log(value)
// }
// //迭代Map中的key=>value
// for (let  entry of myMap.entries()){
//     console.log(entry[0],entry[1]);
// }
// //使用对象解析
// for (let  [key,value] of myMap){
//     console.log(key,value);
// }
// //元组
// //解构元组
// var a = [10,"robot"]
// var [b,c] = a
// console.log(b)
// console.log(c)
//联合类型
// var val:string|number
// val = 12
// console.log("数字为"+val);
// val = "rob"
// console.log("字符"+val)
// function disp(name:string|string[]){
//     if (typeof name == "string"){
//         console.log(name)
//     } else{
//         var i;
//         for (i=0;i<name.length;i++){
//             console.log(name[i])
//         }
//     }
//
// }
// disp("rob");
// console.log("输出数组...")
// disp(['sdfs1','12312w','wee23']);
var arr;
var i;
arr = [1, 2, 4];
console.log("**数字数组**");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr = ['xxx1', 'xxx2', 'xxx3'];
console.log('**字符串数组');
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//# sourceMappingURL=%E5%B8%B8%E7%94%A8%E7%9A%84%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.js.map