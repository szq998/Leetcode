/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const N = s.length;
    const palindromeTable = Array(N ** 2);

    let resultIdxPair = [0, 1];
    let resultCnt = 1;

    for (let k = 0; k < N; ++k) {
        for (let kLeft = 0; kLeft < 2 && k + kLeft < N; ++kLeft) {
            palindromeTable[k * N + k + kLeft] = s[k] == s[k + kLeft];

            if (palindromeTable[k * N + k + kLeft] && resultCnt < kLeft + 1) {
                resultCnt = kLeft + 1;
                resultIdxPair = [k, k + kLeft + 1];
            }

            let i = k - 1,
                j = k + 1 + kLeft;

            while (i >= 0 && j < N) {
                palindromeTable[i * N + j] =
                    s[i] === s[j] && palindromeTable[(i + 1) * N + j - 1];
                if (palindromeTable[i * N + j] && j - i + 1 > resultCnt) {
                    resultCnt = j - i + 1;
                    resultIdxPair = [i, j + 1];
                }
                --i;
                ++j;
            }
        }
    }

    return s.slice(...resultIdxPair);
};
// @lc code=end
