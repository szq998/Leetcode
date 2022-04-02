/*
 * @lc app=leetcode.cn id=960 lang=javascript
 *
 * [960] 删列造序 III
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    const strLen = strs[0].length;
    if (strLen === 1) {
        return 0;
    }

    const dp = Array(strLen);
    dp.fill(1);

    for (let i = strLen; i >= 0; --i) {
        search: for (let j = i + 1; j < strLen; ++j) {
            for (const row of strs) {
                if (row[i] > row[j]) {
                    continue search;
                }
            }
            dp[i] = Math.max(1 + dp[j], dp[i]);
        }
    }

    let maxSorted = 1;
    for (const len of dp) {
        maxSorted = Math.max(maxSorted, len);
    }

    return strLen - maxSorted;
};
// @lc code=end
