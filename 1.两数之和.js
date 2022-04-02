/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const val2idx = new Map();

    for (let i = 0; i < nums.length; ++i) {
        const remains = target - nums[i];
        if (val2idx.get(remains) !== undefined) {
            return [i, val2idx.get(remains)];
        } else {
            val2idx.set(nums[i], i);
        }
    }
};
// @lc code=end
