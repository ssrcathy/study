var nums = [0, 1, 2, 2, 3, 0, 4, 2];
var nums1 = [3, 2, 2, 3];
var val = 2;
var val1 = 3;
var removeElement = function (nums, val) {
    // nums =  nums.filter(item=>item!=val);
    // return nums;
    var left = 0;
    var right = nums.length;
    while (left < right) {
        if (nums[left] == val) {
            nums[left] = nums[right - 1];
            // console.log(nums,right,nums[left]);
            right--;
        }
        else {
            left++;
        }
    }
    console.log(nums);
    return left;
};
console.log(removeElement(nums1, val1));
