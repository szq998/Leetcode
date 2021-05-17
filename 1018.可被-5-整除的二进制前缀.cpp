/*
 * @lc app=leetcode.cn id=1018 lang=cpp
 *
 * [1018] 可被 5 整除的二进制前缀
 */

// @lc code=start
class Solution {
public:
    vector<bool> prefixesDivBy5(vector<int> &nums) {
        vector<bool> answer;
        int sum = 0;
        for (int &num : nums) {
            sum <<= 1;
            sum += num;
            sum %= 5;
            answer.push_back(sum == 0);
        }
        return answer;
    }
};
// @lc code=end
