/*
 * @lc app=leetcode.cn id=242 lang=cpp
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
class Solution {
public:
    bool isAnagram(string s, string t) {
        char a[26] = {0}, b[26] = {0};
        for (const char &c : s) {
            ++a[c - 'a'];
        }
        for (const char &c : t) {
            ++b[c - 'a'];
        }
        for (int i = 0; i < 26; ++i) {
            if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    }
};
// @lc code=end
