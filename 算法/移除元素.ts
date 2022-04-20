var nums:number[] = [0,1,2,2,3,0,4,2];
var nums1:number[] = [3,2,2,3];
var val:number = 2;
var val1:number = 3
var removeElement = function (nums:number[],val:number) {
    // nums =  nums.filter(item=>item!=val);
    // return nums;
    let left:number = 0;
    let right:number = nums.length;
    while(left<right){
        if (nums[left]==val){
            nums[left] = nums[right-1];
            // console.log(nums,right,nums[left]);
            right--
        } else{
            left++
        }
    }
    console.log(nums);
    return left;

}

console.log(removeElement(nums1,val1));
