/*
 * @lc app=leetcode.cn id=883 lang=cpp
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
#include <vector>
using namespace std;
class Solution {
    int getAreaXY(vector<vector<int>> &grid) {
        int area = 0;
        for (const auto &yIdxArr : grid) {
            for (const int &v : yIdxArr) {
                if (v > 0) {
                    ++area;
                }
            }
        }
        return area;
    }

    int getAreaXZ(vector<vector<int>> &grid) {
        int area = 0;
        for (const auto &yIdxArr : grid) {
            // 找出最大值
            int max = 0;
            for (const int &v : yIdxArr) {
                if (v > max) {
                    max = v;
                }
            }
            area += max;
        }
        return area;
    }

    int getAreaYZ(vector<vector<int>> &grid) {
        int area = 0;
        int N = grid.size();
        for (int i = 0; i < N; ++i) {
            int max = 0;
            for (int j = 0; j < N; ++j) {
                if (grid[j][i] > max) {
                    max = grid[j][i];
                }
            }
            area += max;
        }

        return area;
    }

public:
    int projectionArea(vector<vector<int>> &grid) {
        return getAreaXY(grid) + getAreaXZ(grid) + getAreaYZ(grid);
    }
};
// @lc code=end
