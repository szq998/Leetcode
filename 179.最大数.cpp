/*
 * @lc app=leetcode.cn id=179 lang=cpp
 *
 * [179] 最大数
 */

// @lc code=start
#include <algorithm>
#include <cmath>
using std::reverse;
class Solution {
    void _quick_sort(vector<string> &nums, const int start, const int end) {
        if (end <= start) {
            return;
        }

        string pivot = nums[start];
        int l = start, h = end;
        while (l < h) {
            while (l < h && str_num_compare(nums[h], pivot) >= 0) {
                --h;
            }
            nums[l] = nums[h];
            while (l < h && str_num_compare(nums[l], pivot) <= 0) {
                ++l;
            }
            nums[h] = nums[l];
        }
        nums[l] = pivot;
        _quick_sort(nums, start, l - 1);
        _quick_sort(nums, l + 1, end);
    }

    void quick_sort(vector<string> &nums) {
        _quick_sort(nums, 0, nums.size() - 1);
    }

    string num2str(int num) {
        if (!num) {
            return "0";
        }
        string s = "";
        for (; num > 0; num /= 10) {
            s.push_back('0' + num % 10);
        }
        reverse(s.begin(), s.end());
        return s;
    }

    int str_num_compare(string num1, string num2) {
        string num1num2 = num1 + num2;
        string num2num1 = num2 + num1;
        // TDOD: 能否不拼接，直接比较？
        return num1num2.compare(num2num1) * -1;
    }

public:
    string largestNumber(vector<int> &nums) {
        // 先转为字符串
        vector<string> str_nums;
        for (const int &num : nums) {
            str_nums.push_back(num2str(num));
        }
        // 排序
        quick_sort(str_nums);
        if (str_nums[0][0] == '0') {
            return "0";
        }
        // 拼接
        string result = "";
        for (auto str_num : str_nums) {
            result += str_num;
        }
        return result;
    }
};
// @lc code=end
