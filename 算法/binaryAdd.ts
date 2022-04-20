let a:string = "11";
let b:string = "1";

var addBinary = function (a,b) {
    let arrA:string[] = a.split("");
    let arrB:string[] = b.split("");
    while (arrA.length>arrB.length){
        arrB.unshift("0")
    }
    while (arrA.length<arrB.length){
        arrA.unshift("0");
    }
    let prev=0;
    let arrAdd=new Array(a.length);
    if (arrA.length == arrB.length){
        for (let i = arrA.length-1;i>=0;i--){
            let value=parseInt(arrB[i])+parseInt(arrA[i])+prev;
            if(value==0){
                arrAdd[i]="0"
                prev=0
            }else if (value==1){
                arrAdd[i]="1"
                prev=0
            }else if (value==2){
                arrAdd[i]="0"
                prev=1
            }else if (value==3){
                arrAdd[i]="1"
                prev=1
            }
        }
        if(prev==1){
            arrAdd.unshift("1")
        }

    }
    let lastValue:string =  arrAdd.join("");
    return lastValue;
}

addBinary(a,b)
