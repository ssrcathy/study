// 冒泡排序
//当前元素跟下一个元素进行比较，如果当前元素比下一个元素大，向上冒泡


function bubbleSort(arr){
    let l = arr.length;
    while(arr.length>0){
        for (let j = 0;j< l-1;j++){
            if (arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
       l--;
    }
    return arr;
}

let arr = [1,4,2,6,3,7];

bubbleSort(arr);

function bubbleSort(arr){
    let l = arr.length;
    while (arr.length>0){
        for (let j = 0;j<l-1;j++){
            if (arr[j]>arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
        l--;
    }
}
//思想当前元素跟下一个元素比较大小，当前元素如果大于下一个元素，那么向上冒泡。
