/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    const char2OccurTimes = new Map();
    for (const char of s) {
        const times = char2OccurTimes.get(char);
        if (Number.isInteger(times)) {
            char2OccurTimes.set(char, times + 1);
        } else {
            char2OccurTimes.set(char, 1);
        }
    }
    let num = 0;
    for (const times of char2OccurTimes.values()) {
        num += times - (times & 1);
    }
    return num + (num < s.length ? 1 : 0);
};
// @lc code=end
