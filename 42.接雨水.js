/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let sum = 0;
    let nonZeroIdx = 0
    while (nonZeroIdx < height.length && height[nonZeroIdx] === 0) {
        ++nonZeroIdx
    }

    let left = nonZeroIdx
    for (let i = nonZeroIdx + 1; i < height.length; ++i) {
        
    }
};
// @lc code=end

