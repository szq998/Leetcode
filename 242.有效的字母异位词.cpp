/*
 * @lc app=leetcode.cn id=242 lang=cpp
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
class Solution {

public:
    bool isAnagram(string s, string t) {
        if (s.size() != t.size()) {
            // determine by length
            return false;
        }
        vector<int> table = vector<int>(26, 0);
        for (const char &c : s) {
            ++table[c - 'a'];
        }
        for (const char &c : t) {
            --table[c - 'a'];
            if (table[c - 'a'] < 0) {
                return false;
            }
        }
        return true;
    }
};
// @lc code=end
