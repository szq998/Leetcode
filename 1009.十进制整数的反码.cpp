/*
 * @lc app=leetcode.cn id=1009 lang=cpp
 *
 * [1009] 十进制整数的反码
 */

// @lc code=start
class Solution {
public:
    int bitwiseComplement(int n) {
        if (!n) {
            return 1;
        }
        int nn = n, bit_mask = 0;
        while (nn) {
            nn >>= 1;
            bit_mask <<= 1;
            bit_mask |= 1;
        }
        return (~n) & bit_mask;
    }
};
// @lc code=end
