let digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
let di = [9];
var plusOne = function(digits) {
    // let str1 = digits.join('');
    //     // let str = parseInt(str1)+1+'';
    //     // console.log(str)
    //     // let arr = []
    //     // for(let i = 0;i<str.length;i++){
    //     //     arr.push(str[i]);
    //     // }
    //     //
    //     // return arr;
    for(let i = digits.length;i>=0;i--){
        if(0<=digits[i]&&digits[i]<9){
            console.log('@',digits[i])

            digits[i]= digits[i]+1
            break;
        }else if (digits[i] == 9) {
            digits[i] = 0;
        }
    }
    if (digits[0] == 0){
        digits.unshift(1);
    }
    console.log(digits);
    return digits;
};
plusOne(di)
