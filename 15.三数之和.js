/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    'use strict'
    nums.sort((a, b) => (a - b));

    const ans = [];
    let numLast;
    for (const [idx, num] of nums.entries()) {
        if (idx > 0 && num === numLast) { continue; }
        numLast = num;

        let i = idx + 1, j = nums.length - 1;
        while (i < j) {
            const numI = nums[i], numJ = nums[j];
            const sum = num + numI + numJ;
            if (sum === 0) {
                ans.push([num, numI, numJ]);
            }
            if (sum >= 0) {
                while (i < j && nums[j] === numJ) { --j; }
            }
            if (sum <= 0) {
                while (i < j && nums[i] === numI) { ++i; }
            }
        }
    }
    return ans;
};
// @lc code=end

