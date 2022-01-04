var a = "Hello world";
var b = "小明";
var c = '12';
console.log(a + b + c);
var global_num = 12; //全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //局部变量
    };
    Numbers.sval = 10; //静态变量
    return Numbers;
}());
console.log("全局变量为：" + global_num);
console.log(Numbers.sval);
var obj1 = new Numbers();
console.log("实例变量：" + obj1.num_val);
console.log("实例变量：" + obj1.storeNum()); //返回undefined因为为void声明没有不返回值。
//# sourceMappingURL=hello.js.map