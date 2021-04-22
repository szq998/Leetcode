/*
 * @lc app=leetcode.cn id=154 lang=cpp
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
class Solution {
public:
    int findMin(vector<int> &nums) {
        const int N = nums.size();
        if (nums[0] < nums[N - 1]) {
            // 旋转了n次，也即没有旋转
            return nums[0];
        }
        int search_start = 0;
        if (nums[search_start] == nums[N - 1]) {
            // 首位元素相同时，无法直接查找
            // 尝试搜索到大于nums[0]的元素
            while (search_start < N && nums[search_start] == nums[0]) {
                ++search_start;
            }
            if (search_start == N) {
                // 所有元素都相同
                return nums[0];
            }
            if (nums[search_start] < nums[0]) {
                // [0,
                // search_start)处的重复元素已经是最大值，故最小值就在search_start
                return nums[search_start];
            }
        }
        // 使用二分查找，从seach_start开始查找旋转点k
        int low = search_start - 1, high = N;
        while (high - low != 1) {
            int mid = (low + high) >> 1;
            if (nums[mid] < nums[search_start]) {
                high = mid;
            } else {
                low = mid;
            }
        }
        return nums[high];
    }
};
// @lc code=end
