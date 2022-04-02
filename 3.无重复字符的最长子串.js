/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let occur = new Set();
    let result = 0;

    let begin = 0;
    for (let j = 0; j < s.length; ++j) {
        if (occur.has(s[j])) {
            result = Math.max(result, j - begin);
            // find the repeat position
            while (s[begin] !== s[j]) {
                // delete those before the repeated one
                occur.delete(s[begin])
                ++begin;
            }
            // skip the repeated one
            ++begin
        } else {
            occur.add(s[j]);
        }
    }
    result = Math.max(result, s.length - begin);

    return result;
};
// @lc code=end
