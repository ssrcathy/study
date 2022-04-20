var nums = [1, 3, 5, 6];
var target = 4;
var searchInsert = function (nums, target) {
    if (nums.includes(target)) {
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                return i;
            }
        }
    }
    else {
        if (target < nums[0]) {
            return 0;
        }
        else if (target > nums[nums.length - 1]) {
            return nums.length;
        }
        else {
            for (var i = 0; i < nums.length; i++) {
                if (target > nums[i] && target < nums[i + 1]) {
                    return i + 1;
                }
            }
        }
    }
};
console.log(searchInsert(nums, target));
