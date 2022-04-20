var a = "11";
var b = "1";
var addBinary = function (a, b) {
    var arrA = a.split("");
    var arrB = b.split("");
    while (arrA.length > arrB.length) {
        arrB.unshift("0");
    }
    while (arrA.length < arrB.length) {
        arrA.unshift("0");
    }
    var prev = 0;
    var arrAdd = new Array(a.length);
    if (arrA.length == arrB.length) {
        for (var i = arrA.length - 1; i >= 0; i--) {
            var value = parseInt(arrB[i]) + parseInt(arrA[i]) + prev;
            if (value == 0) {
                arrAdd[i] = "0";
                prev = 0;
            }
            else if (value == 1) {
                arrAdd[i] = "1";
                prev = 0;
            }
            else if (value == 2) {
                arrAdd[i] = "0";
                prev = 1;
            }
            else if (value == 3) {
                arrAdd[i] = "1";
                prev = 1;
            }
        }
        if (prev == 1) {
            arrAdd.unshift("1");
        }
    }
    var lastValue = arrAdd.join("");
    return lastValue;
};
addBinary(a, b);
