/*
 * @lc app=leetcode.cn id=153 lang=cpp
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
class Solution {
public:
    int findMin(vector<int>& nums) {
        // 旋转了n次，也即没有旋转
        if (nums[0] <= nums[nums.size() - 1]) return nums[0];
        // 二分查找旋转点
        int low = -1, high = nums.size();
        while (high - low != 1) {
            int mid = (low + high) >> 1;
            // 二分查找分段条件是比nums[0]小
            if (nums[mid] < nums[0]) {
                high = mid;
            } else {
                low = mid;
            }
        }
        return nums[high];
    }
};
// @lc code=end

