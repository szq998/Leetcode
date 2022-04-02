/*
 * @lc app=leetcode.cn id=907 lang=javascript
 *
 * [907] 子数组的最小值之和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
    const dp = Array(2);
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        dp[0] = arr[i];
        sum += arr[i];
        for (let len = 2, roll = 1; len <= arr.length - i; ++len, roll ^= 1) {
            dp[roll] = Math.min(dp[roll ^ 1], arr[i + len - 1]);
            sum += dp[roll];
        }
        sum %= 10 ** 9 + 7;
    }
    return sum;
};
// @lc code=end
