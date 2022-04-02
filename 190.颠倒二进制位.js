/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

const NUM_BITS = 32;

function getBitAtPos(pos, n) {
    return (n & (1 << pos)) >>> pos;
}

var reverseBits = function(n) {
    let reversed = 0;
    for (let i = 0; i < NUM_BITS; ++i) {
        let bit = getBitAtPos(i, n);
        reversed <<= 1;
        reversed |= bit;
        j =0;
    }
    return reversed >>> 0;  //  ">>> 0" is a trick to make unsigned
};
// @lc code=end

