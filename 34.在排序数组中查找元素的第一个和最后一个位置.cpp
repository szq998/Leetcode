/*
 * @lc app=leetcode.cn id=34 lang=cpp
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
#include <functional>
using std::function;
class Solution {
    int binary_search(vector<int> &nums, function<bool(int)> const &is_high) {
        int low = -1, high = nums.size();
        while (high - low != 1) {
            int mid = (low + high) >> 1;
            if (is_high(mid)) {
                high = mid;
            } else {
                low = mid;
            }
        }
        return high;
    }

public:
    vector<int> searchRange(vector<int> &nums, int target) {
        // 两次二分查找
        // 输入为空
        if (!nums.size())
            return {-1, -1};
        // 查找首个>=target的为位置
        int start = this->binary_search(nums, [&nums, target](int mid) -> bool {
            return nums[mid] >= target;
        });
        // 未找到target
        if (start == nums.size() || nums[start] != target)
            return {-1, -1};
        // 直接从target位置开始查找
        int end = this->binary_search(nums, [&nums, target](int mid) -> bool {
            return nums[mid] > target;
        });
        // 找到的是首个>target的位置，应该前移一位
        --end;
        return {start, end};
    }
};
// @lc code=end
