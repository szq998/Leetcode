/*
 * @lc app=leetcode.cn id=350 lang=cpp
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
#include <unordered_map>
using std::unordered_map;

class Solution {
    void _quick_recursive(vector<int> &nums, const int low, const int high) {
        if (high - low < 1)
            return;

        int pivot = nums[low], l = low, h = high;
        while (l < h) {
            while (l < h && nums[h] >= pivot)
                --h;
            nums[l] = nums[h];
            while (l < h && nums[l] <= pivot)
                ++l;
            nums[h] = nums[l];
        }
        nums[l] = pivot;
        this->_quick_recursive(nums, low, l - 1);
        this->_quick_recursive(nums, l + 1, high);
    }
    void quick_sort(vector<int> &nums) {
        this->_quick_recursive(nums, 0, nums.size() - 1);
    }

public:
    vector<int> intersect(vector<int> &nums1, vector<int> &nums2) {
        // 哈希
        // 记录nums1中数字的出现次数
        unordered_map<int, int> appearance;
        for (int &num : nums1) {
            ++appearance[num];
        }
        vector<int> inter;
        for (int &num : nums2) {
            if (appearance.count(num)) {
                // 共有数字
                // 加入结果中
                inter.push_back(num);
                // 减少一次，满足题目最小值的要求
                --appearance[num];
                if (!appearance[num]) {
                    appearance.erase(num);
                }
            }
        }
        return inter;
    }

    vector<int> intersect_0(vector<int> &nums1, vector<int> &nums2) {
        // 双指针
        // 排序
        this->quick_sort(nums1);
        this->quick_sort(nums2);
        // 双指针
        vector<int> inter;
        for (int i = 0, j = 0; i < nums1.size() && j < nums2.size();) {
            if (nums1[i] == nums2[j]) {
                inter.push_back(nums1[i]);
                ++i, ++j;
            } else if (nums1[i] < nums2[j]) {
                ++i;
            } else {
                ++j;
            }
        }
        return inter;
    }
};
// @lc code=end
