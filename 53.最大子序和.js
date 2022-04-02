/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let maxSumEndingHere = nums[0];
    let ans = maxSumEndingHere;
    for (let i = 1; i < nums.length; ++i) {
        // max sum ending at i
        maxSumEndingHere = Math.max(nums[i], nums[i] + maxSumEndingHere);
        ans = Math.max(ans, maxSumEndingHere);
    }
    return ans;
};
// @lc code=end
