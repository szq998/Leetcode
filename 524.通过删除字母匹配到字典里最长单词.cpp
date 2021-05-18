/*
 * @lc app=leetcode.cn id=524 lang=cpp
 *
 * [524] 通过删除字母匹配到字典里最长单词
 */

// @lc code=start
class Solution {
public:
    string findLongestWord(string s, vector<string> &dictionary) {
        // 双指针
        string matched = "";
        for (const string &word : dictionary) {
            if (word.size() < matched.size()) {
                // 题目要求最长的word
                continue;
            }
            if (word.size() == matched.size() && word.compare(matched) > 0) {
                // 等长时，取字典顺序最小的字符，故淘汰字典序大的
                continue;
            }
            int i = 0, j = 0;
            while (i < s.size() && j < word.size()) {
                if (s[i] == word[j]) {
                    ++i;
                    ++j;
                } else {
                    ++i;
                }
            }
            if (j == word.size()) {
                matched = word;
            }
        }
        return matched;
    }
};
// @lc code=end
