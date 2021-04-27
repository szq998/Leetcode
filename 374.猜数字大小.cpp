/*
 * @lc app=leetcode.cn id=374 lang=cpp
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param  num   your guess
 * @return 	     -1 if num is lower than the guess number
 *			      1 if num is higher than the guess number
 *               otherwise return 0
 * int guess(int num);
 */

class Solution {
public:
    int guessNumber(int n) {
        // low < n, high >= pick
        int low = 0, high = n;
        while (high - low != 1) {
            // 防止high为2^31-1时，int越界
            int mid = low + ((high - low) >> 1);
            if (guess(mid) <= 0) {
                high = mid;
            } else {
                low = mid;
            }
        }
        return high;
    }
};
// @lc code=end
