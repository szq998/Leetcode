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
        // 第0个(不存在)版本必然“不bad”，low必须指向它
        // 最后一个版本必然bad，所以high可以直接指向它
        int low = 0, high = n;
        while (high - low != 1) {
            int mid = low + ((high - low) >> 1);
            // 规定high所在的版本必定是bad
            if (isBadVersion(mid)) {
                high = mid;
            } else {
                low = mid;
            }
        }
        return high;
    }
};
// @lc code=end
