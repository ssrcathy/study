var a:string = "Hello world"
var b:string = "小明"
var c:number = '12'
console.log(a+b+c);

var global_num = 12  //全局变量
class Numbers{
    num_val = 13;    //实例变量
    static sval = 10;  //静态变量
    storeNum():void{   //void 用于标识方法返回值类型，表示该方法没有返回值。
        var local_num = 14 //局部变量
    }
}

console.log("全局变量为："+ global_num);
console.log(Numbers.sval)
var obj1 = new Numbers();
console.log("实例变量："+obj1.num_val)
console.log("实例变量："+obj1.storeNum()) //返回undefined因为为void声明没有不返回值。
