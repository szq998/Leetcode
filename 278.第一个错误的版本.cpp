/*
 * @lc app=leetcode.cn id=278 lang=cpp
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
// The API isBadVersion is defined for you.
// bool isBadVersion(int version);

class Solution {
public:
    int firstBadVersion(int n) {
        // n可能是最大的int，用long来防止溢出
        long low = 0, high = (long)n + 1;
        while (high - low != 1) {
            long mid = (low + high) >> 1;
            // 规定high所在的版本必定是bad
            if (isBadVersion((int)mid)) {
                high = mid;
            } else {
                low = mid;
            }
        }
        return high;
    }
};
// @lc code=end
