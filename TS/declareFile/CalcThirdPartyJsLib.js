var Runoob;
(function(Runoob){
    var Calc = (function () {
        function Calc() {

        }
    })
    Calc.prototype.doSum = function (limit) {
        var sum = 0;
        for (var i = 0;i<=limit;i++){
            sum = sum+i
        }
        return sum
    }
    Runoob.Calc = Calc
})(Runoob||(Runoob={}));

var  test = new  Runoob.Calc;
