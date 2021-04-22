/*
 * @lc app=leetcode.cn id=81 lang=cpp
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
#include <functional>
using std::function;

class Solution {
    int binary_search(int low, int high, function<bool(int)> const &is_high) {
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
        // 两次二分查找
        if (k == -1) {
            // 搜索旋转点k
            k = this->binary_search(search_start - 1, N,
                [&nums, search_start]
                (int mid) -> bool {
                    // 二分查找的分段方式为小于nums[search_start]
                    return nums[mid] < nums[search_start];
                }
            );
        }
        // 常规二分查找（坐标偏移k）
        // 查找首个>=target的位置
        int searched = this->binary_search(-1, N, 
            [&nums, k, N, target]
            (int mid) -> bool {
                // 二分查找分段方式为大于等于target
                return nums[(mid + k) % N] >= target;
            }
        );
        if (searched == N || nums[(searched + k) % N] != target) {
            return false;
        } else {
            return true;
        }
    }
};
// @lc code=end
