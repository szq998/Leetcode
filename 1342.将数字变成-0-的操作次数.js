/*
 * @lc app=leetcode.cn id=1342 lang=javascript
 *
 * [1342] 将数字变成 0 的操作次数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    if (num === 0) {
        return 0;
    }

    return numberOfSteps(num % 2 ? num - 1 : num / 2) + 1;
};
// @lc code=end
