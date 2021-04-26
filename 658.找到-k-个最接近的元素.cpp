/*
 * @lc app=leetcode.cn id=658 lang=cpp
 *
 * [658] 找到 K 个最接近的元素
 */

// @lc code=start
#include <vector>
using std::vector;

class Solution {
    inline int abs(int x) { return x < 0 ? -x : x; }

    inline int selectCloserIdx(vector<int> &arr, int x, int idx_a, int idx_b) {
        if (abs(arr[idx_a] - x) < abs(arr[idx_b] - x)) {
            return idx_a;
        } else if (abs(arr[idx_a] - x) > abs(arr[idx_b] - x)) {
            return idx_b;
        } else {
            if (arr[idx_a] < arr[idx_b]) {
                return idx_a;
            } else {
                return idx_b;
            }
        }
    }

public:
    vector<int> findClosestElements(vector<int> &arr, int k, int x) {
        // 二分查找
        int low = -1, high = arr.size();
        while (high - low != 1) {
            int mid = (low + high) >> 1;
            if (arr[mid] >= x) {
                high = mid;
            } else {
                low = mid;
            }
        }
        // 双指针
        int i, j;
        // 从low或high中，择一作为双指针的开始
        if (low < 0) {
            i = j = 0;
        } else if (high == arr.size()) {
            i = j = arr.size() - 1;
        } else {
            i = j = selectCloserIdx(arr, x, low, high);
        }
        // 循环k-1次, 因为当前i，j所指向元素算作一个
        while (--k) {
            if (i == 0) {
                ++j;
                continue;
            }
            if (j == arr.size() - 1) {
                --i;
                continue;
            }

            if (selectCloserIdx(arr, x, i - 1, j + 1) == i - 1) {
                --i;
            } else {
                ++j;
            }
        }
        return vector<int>(arr.cbegin() + i, arr.cbegin() + j + 1);
    }
};
// @lc code=end
