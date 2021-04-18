/*
 * @lc app=leetcode.cn id=35 lang=cpp
 *
 * [35] 搜索插入位置
 */

// @lc code=start
class Solution {
public:
    int searchInsert(vector<int> &nums, int target) {
        if (nums.empty())
            return 0;

        int low = -1, high = nums.size();
        while (high - low > 1) {
            const int mid = (low + high) >> 1;
            if (nums[mid] >= target) {
                high = mid;
            } else {
                low = mid;
            }
        }
        // return the upper boundary
        return high;
    }
};
// @lc code=end
