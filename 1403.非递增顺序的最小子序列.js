/*
 * @lc app=leetcode.cn id=1403 lang=javascript
 *
 * [1403] 非递增顺序的最小子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
    nums.sort((a, b) => b - a);
    const halfOfSum = nums.reduce((sum, currVal) => sum + currVal) / 2;
    let end = 0,
        sum = nums[0];
    while (sum <= halfOfSum) {
        end += 1;
        sum += nums[end];
    }
    return nums.slice(0, end + 1);
};
// @lc code=end
