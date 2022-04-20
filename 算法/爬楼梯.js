var climbStairs = function (n) {
    var p = 0, q = 0, r = 1;
    for (var i = 1; i <= n; ++i) {
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};
