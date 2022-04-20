var nums = [3, 2, 4];
var target = 6;
var twoSum = function (nums, target) {
    for (var i = 0; i <= nums.length; i++) {
        for (var j = i + 1; j <= nums.length - 1; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
            console.log(j);
        }
    }
};
console.log(twoSum(nums, target));
