/*
 * @lc app=leetcode.cn id=56 lang=cpp
 *
 * [56] 合并区间
 */

// @lc code=start
class Solution {
    void _quick_sort(vector<vector<int>> &arr, const int low, const int high) {
        if (low >= high) {
            return;
        }

        int l = low, h = high;
        vector<int> pivot = arr[low];
        while (l < h) {
            while (l < h && arr[h][0] >= pivot[0]) {
                --h;
            }
            arr[l] = arr[h];
            while (l < h && arr[l][0] <= pivot[0]) {
                ++l;
            }
            arr[h] = arr[l];
        }
        arr[l] = pivot;
        _quick_sort(arr, low, l - 1);
        _quick_sort(arr, l + 1, high);
    }

    void quick_sort(vector<vector<int>> &intervals) {
        this->_quick_sort(intervals, 0, intervals.size() - 1);
    }

public:
    vector<vector<int>> merge(vector<vector<int>> &intervals) {
        // 按照start_i排序
        this->quick_sort(intervals);
        // 合并
        vector<vector<int>> merged;
        merged.push_back(intervals[0]);
        for (auto &curr : intervals) {
            int &last_end = (*merged.rbegin())[1];
            if (curr[0] <= last_end) {
                if (curr[1] > last_end) {
                    last_end = curr[1];
                }
            } else {
                merged.push_back(curr);
            }
        }
        return merged;
    }
};
// @lc code=end
