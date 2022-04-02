/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var nextPermutation = function (nums) {
    if (nums.length == 1) {
        return;
    }
    let i = nums.length - 2;
    for (; i >= 0 && nums[i] >= nums[i + 1]; --i) {}

    if (i >= 0) {
        // binary search
        // to find the smallest num that larger than nums[i]

        let low = i + 1 - 1,
            high = nums.length;
        while (high - low > 1) {
            const mid = (low + high) >> 1;
            if (nums[mid] > nums[i]) {
                low = mid;
            } else {
                high = mid;
            }
        }
        // nums[high] <= nums[i] 
        // HIGH CAN BE OUT OF RANGE OF NUMS
        high = Math.min(high, nums.length - 1);
        // do a few extra linear search
        while (nums[high] <= nums[i]) {
            --high;
        }
        // swap
        [nums[i], nums[high]] = [nums[high], nums[i]];
        // sort by just reverse
        low = i + 1;
        high = nums.length - 1;
        while (high - low > 0) {
            [nums[low], nums[high]] = [nums[high], nums[low]];

            ++low;
            --high;
        }

        return;
    }

    // reverse
    let low = 0,
        high = nums.length - 1;
    while (high - low > 0) {
        [nums[low], nums[high]] = [nums[high], nums[low]];

        ++low;
        --high;
    }
};
// @lc code=end
