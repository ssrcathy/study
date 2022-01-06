// var a:string = "Hello world"
// var b:string = "小明"
// var c:number = '12'
// console.log(a+b+c);
//
// var global_num = 12  //全局变量
// class Numbers{
//     num_val = 13;    //实例变量
//     static sval = 10;  //静态变量
//     storeNum():void{   //void 用于标识方法返回值类型，表示该方法没有返回值。
//         var local_num = 14 //局部变量
//     }
// }
//
// console.log("全局变量为："+ global_num);
// console.log(Numbers.sval)
// var obj1 = new Numbers();
// console.log("实例变量："+obj1.num_val)
// console.log("实例变量："+obj1.storeNum()) //返回undefined因为为void声明没有不返回值。
//
// function buildName(firstName: String, lastName?: String) {
//     if (lastName)
//         return firstName + " " + lastName;
//     else
//         return firstName;
// }
//
// let result1 = buildName("Bob");  // 正确
// let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
// let result3 = buildName("Bob", "Adams");  // 正确
// console.log(result2)

// function calculate_discount(price:number,rate:number=0.50){
//     var discount = price * rate;
//     console.log("计算结果：",discount);
// }
// calculate_discount(1000);
// calculate_discount(1000,0.30);

// function buildName(firstName: String, ...restOfName?: String[]) {
//         return firstName + " " + restOfName.join(" ");
//
// }
//
// let result2 = buildName("Bob", "Adams", "Sr.");  // 错误，参数太多了
// console.log(result2)

// function addNum( ...nums : Numbber[]) {
//     var i;
//     var sum:number = 0;
//
//     for (i=0;i<nums.length;i++){
//         sum=sum+nums[i]
//     }
//     console.log("和为：",sum)
// }
//
// addNum(1,2,3);
// addNum(10,20,30);

// var func1 = new Function("a","b","return a * b");
// var x = func1(4,3);
// console.log(x)

// var func = (x) => {
//     if(typeof x =="number"){
//         console.log(x+"是一个数字");
//     }else if(typeof x=="string"){
//         console.log(x+"是一个字符串");
//     }
// }
// func(12);
// func("Tom")
//单个参数（）是可选的；
//无参数时可以设置空括号
//我们可以不指定函数的参数类型，通过函数内部来推断参数类型

//this

// interface Card{
//     msg:string;
//     card:number;
// }
// interface Info{
//     msgs:string[];
//     cards:number[];
//     createInfoCard(this:Info):() => Card
//
// }
//
// let info: Info = {
//     msgs:["I","love","you","xu","yong"],
//     cards:Array(52),
//     createInfoCard:function(this:Info){
//         // return function(){
//         //     let pickedCard = Math.floor(Math.random() * 52);
//         //     let pickedSuit = Math.floor(pickedCard / 13);
//         //
//         //     return {msg: this.msgs[pickedSuit], card: pickedCard % 13};
//         //     //这里的this指向的是window
//         // }
//         return ()=>{
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
//
//             return {msg: this.msgs[pickedSuit], card: pickedCard % 13};
//             //这里的this指向的是window
//         }
//     },
// //如果你给编译器设置了--noImplicitThis标记。 它会指出 this.suits[pickedSuit]里的this的类型为any。
//
// }
//
// let cardPicker = info.createInfoCard();
// let pickedCard = cardPicker();
// console.log("card:"+pickedCard.card+"of"+pickedCard.msg);
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}
class Handler{
    info:string;
    onCLickBad(this:Handler,e:Event){
        this.info = e.message;
    }
}
let h = new Handler();
UIElement.addClickListener(h.onClickBad)
