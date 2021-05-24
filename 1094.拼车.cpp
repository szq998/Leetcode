/*
 * @lc app=leetcode.cn id=1094 lang=cpp
 *
 * [1094] 拼车
 */

// @lc code=start
class Solution {
public:
    bool carPooling(vector<vector<int>> &trips, int capacity) {
        // 想象成装卸货，遍历2遍trips，获取每个位置的乘客数量
        vector<int> load_at_position = vector<int>(1001);
        for (auto &trip : trips) {
            load_at_position[trip[1]] += trip[0];
            load_at_position[trip[2]] -= trip[0];
        }
        int count = 0;
        for (const int &load : load_at_position) {
            count += load;
            if (count > capacity) {
                return false;
            }
        }
        return true;
    }

    bool carPooling_baoli_wunao(vector<vector<int>> &trips, int capacity) {
        // 暴力算法，在每一个位置上，遍历整个trips，得到该位置上的乘客数量
        // 时间复杂度O(MAX_LOCATION * LEN(trips))，时间复杂度O(1)（唯一优点）
        int initial_location = 1000, final_location = 0;
        for (const auto &trip : trips) {
            if (trip[1] < initial_location) {
                initial_location = trip[1];
            }
            if (trip[2] > final_location) {
                final_location = trip[2];
            }
        }
        // 遍历每一个位置
        for (int i = initial_location; i < final_location; ++i) {
            int load = 0;
            for (const auto &trip : trips) {
                if (i >= trip[1] && i < trip[2]) {
                    load += trip[0];
                }
            }
            if (load > capacity) {
                return false;
            }
        }
        return true;
    }
};
// @lc code=end
