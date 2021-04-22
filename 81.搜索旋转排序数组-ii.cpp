/*
 * @lc app=leetcode.cn id=81 lang=cpp
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
class Solution {
public:
    bool search(vector<int> &nums, int target) {
        const int N = nums.size();
        int search_start = 0, k = -1;
        if (nums[0] == nums[N - 1]) {
            // 首尾元素相同，无法二分查找旋转点k
            // 此时，只能进行O(n)的顺序查找，找出第一个大于nums[0]的元素
            while (search_start < N && nums[search_start] == nums[0]) {
                ++search_start;
            }
            if (search_start == N) {
                // 所有元素相同
                return (target == nums[0]);
            }
            if (nums[search_start] < nums[0]) {
                // 重复元素是最大的元素，直接找到了k
                k = search_start;
            }
        }
        if (k == -1) {
            // 搜索旋转点k
            int low = search_start - 1, high = N;
            while (high - low != 1) {
                int mid = (low + high) >> 1;
                if (nums[mid] < nums[search_start]) {
                    high = mid;
                } else {
                    low = mid;
                }
            }
            k = high;
        }
        // 常规二分查找（坐标偏移k）
        int low = -1, high = N;
        while (high - low != 1) {
            int mid = (low + high) >> 1;
            if (nums[(mid + k) % N] >= target) {
                high = mid;
            } else {
                low = mid;
            }
        }
        if (high == N || nums[(high + k) % N] != target) {
            return false;
        } else {
            return true;
        }
    }
};
// @lc code=end
