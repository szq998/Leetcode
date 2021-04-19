/*
 * @lc app=leetcode.cn id=33 lang=cpp
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
class Solution {
public:
    int search(vector<int> &nums, int target) {
        // 两次二分查找
        // 第一次查找旋转点
        // 旋转点k及其之后的元素满足 nums[k] < nums[0]（如果旋转点k不为0）
        // search rotate postion
        int k;
        if (nums[0] < nums[nums.size() - 1]) {
            // 没有旋转
            k = 0;
        } else {
            // 有旋转，nums[0]必然不是最小
            int low = -1, high = nums.size();
            while (high - low > 1) {
                int mid = (low + high) >> 1;
                if (nums[mid] < nums[0]) {
                    high = mid;
                } else {
                    low = mid;
                }
            }
            // high即为旋转点
            k = high;
        }
        // search target position
        int low = -1, high = nums.size();
        while (high - low > 1) {
            int mid = (low + high) >> 1;
            if (nums[(mid + k) % nums.size()] >= target) {
                high = mid;
            } else {
                low = mid;
            }
        }

        if (nums[(high + k) % nums.size()] == target) {
            return (high + k) % nums.size();
        } else {
            return -1;
        }
    }
};
// @lc code=end
