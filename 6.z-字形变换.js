/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }

    const result = [];

    const stride = numRows * 2 - 2;
    let innerZStride = stride - 2;
    for (let i = 0; i < numRows; ++i) {
        let ptr = i;
        while (ptr < s.length) {
            result.push(s[ptr]);
            if (i !== 0 && i !== numRows - 1 && ptr + innerZStride < s.length) {
                result.push(s[ptr + innerZStride]);
            }
            ptr += stride;
        }
        if (i !== 0) {
            innerZStride -= 2;
        }
    }

    return result.join('');
};
// @lc code=end
