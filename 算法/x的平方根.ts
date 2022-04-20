let num:number = 8
var mySqrt = function(x:number) {
    if (x==0||x==1){
        return x;
    }
    let left:number = 0;
    let right:number = x/2;
    while (left<right){
        let mid:number = left+(right-left+1)/2
        if (mid>x/mid){
            right = mid-1
        }else{
            left = mid;
        }
    }
    return left;


};
mySqrt(num)
