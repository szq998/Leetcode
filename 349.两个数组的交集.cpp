/*
 * @lc app=leetcode.cn id=349 lang=cpp
 *
 * [349] 两个数组的交集
 */

// @lc code=start
#include <unordered_set>
using std::unordered_set;

class Solution {
    void _quick_recursive(vector<int> &nums, const int low, const int high) {
        if (high - low < 1) {
            return;
        }
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
    vector<int> intersection(vector<int> &nums1, vector<int> &nums2) {
        // 哈希法
        // 放入两个哈希表中
        unordered_set<int> set1, set2;
        for (auto &num : nums1) {
            set1.insert(num);
        }
        for (auto &num : nums2) {
            set2.insert(num);
        }
        // 求交集
        vector<int> inter;
        for (auto &num : set1) {
            if (set2.count(num)) {
                inter.push_back(num);
            }
        }
        return inter;
    }

    vector<int> intersection_0(vector<int> &nums1, vector<int> &nums2) {
        // 排序后，使用双指针
        this->quick_sort(nums1);
        this->quick_sort(nums2);
        auto result = vector<int>();
        for (int i = 0, j = 0; i < nums1.size() && j < nums2.size();) {
            if (nums1[i] == nums2[j]) {
                if (!result.size() || result[result.size() - 1] != nums1[i]) {
                    result.push_back(nums1[i]);
                }
                i++, j++;
            } else if (nums1[i] < nums2[j]) {
                i++;
            } else {
                j++;
            }
        }
        return result;
    }
};
// @lc code=end
