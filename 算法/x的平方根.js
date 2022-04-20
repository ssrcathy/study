var num = 5;
var mySqrt = function (x) {
    if (x == 0 || x == 1) {
        return x;
    }
    var left = 1;
    var right = x / 2;
    while (left < right) {
        var mid = left + (right - left + 1) / 2;
        if (mid > x / mid) {
            right = mid - 1;
        }
        else {
            left = mid;
        }
    }
    // console.log(parseInt(left))
    console.log(left)
    return left;
};
mySqrt(num);
