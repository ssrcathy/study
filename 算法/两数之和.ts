var nums:number[] = [3,2,4];
var target:number = 6;

var twoSum = function (nums:number[],target:number) {
    for(let i = 0;i<=nums.length;i++){
        for(let j = i+1;j<=nums.length-1;j++){
            if(nums[i]+nums[j]===target){
                return [i,j];
            }
            console.log(j);
        }
    }
}

console.log(twoSum(nums,target));
