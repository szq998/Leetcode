/*
 * @lc app=leetcode.cn id=69 lang=cpp
 *
 * [69] x 的平方根
 */

// @lc code=start
class Solution {
public:
    // TODO: 牛顿迭代法

    int mySqrt(int x) {
        if (x <= 1)
            return x;
        // 二分查找法
        int low = 0, high = (x >> 1) + 1;
        while (high - low != 1) {
            // int是32位，相乘不会超过64位的long
            long mid = (low + high) >> 1;
            if (mid * mid > x) {
                high = mid;
            } else {
                low = mid;
            }
        }
        return low;
    }
};
// @lc code=end
