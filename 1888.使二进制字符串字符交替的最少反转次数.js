/*
 * @lc app=leetcode.cn id=1888 lang=javascript
 *
 * [1888] 使二进制字符串字符交替的最少反转次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function (s) {
    if (s.length === 1) {
        return 0;
    }

    const isNeedFlip = (pos, targetBit) => s[pos] !== targetBit;

    const pre = [Array(s.length), Array(s.length)];
    pre[0][0] = isNeedFlip(0, '0');
    pre[1][0] = isNeedFlip(0, '1');
    for (let i = 1; i < s.length; ++i) {
        pre[0][i] = pre[1][i - 1] + isNeedFlip(i, '0');
        pre[1][i] = pre[0][i - 1] + isNeedFlip(i, '1');
    }

    if (s.length % 2 === 0) {
        return Math.min(pre[0][s.length - 1], pre[1][s.length - 1]);
    }

    const suf = [Array(s.length), Array(s.length)];
    suf[0][s.length - 1] = isNeedFlip(s.length - 1, '0');
    suf[1][s.length - 1] = isNeedFlip(s.length - 1, '1');
    for (let i = s.length - 2; i >= 0; --i) {
        suf[0][i] = suf[1][i + 1] + isNeedFlip(i, '0');
        suf[1][i] = suf[0][i + 1] + isNeedFlip(i, '1');
    }

    let op2Cnt = Math.min(pre[0][s.length - 1], pre[1][s.length - 1]);
    // cases combine op1 & op2
    for (let i = 0; i < s.length - 1; ++i) {
        op2Cnt = Math.min(
            op2Cnt,
            pre[0][i] + suf[0][i + 1],
            pre[1][i] + suf[1][i + 1]
        );
    }
    return op2Cnt;
};
// @lc code=end
