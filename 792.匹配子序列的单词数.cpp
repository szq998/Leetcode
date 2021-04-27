/*
 * @lc app=leetcode.cn id=792 lang=cpp
 *
 * [792] 匹配子序列的单词数
 */

// @lc code=start
#include <unordered_set>
using std::unordered_set;

class Solution {
    bool testCharInclude(unordered_set<char> &characters, string &word) {
        for (char &c : word) {
            if (!characters.count(c)) {
                return false;
            }
        }
        return true;
    }

    bool matchSubseq(string &s, string &word) {
        // 双指针
        int j = 0;
        for (int i = 0; i < s.size() && j < word.size();) {
            if (s[i] == word[j]) {
                ++i, ++j;
            } else {
                ++i;
            }
        }
        // 若匹配成功，j必定指向word的尾后
        if (j == word.size()) {
            return true;
        } else {
            return false;
        }
    }

public:
    int numMatchingSubseq(string s, vector<string> &words) {
        // 记录s中的所有字符
        unordered_set<char> characters;
        for (char &c : s) {
            characters.insert(c);
        }

        int match_count = 0;
        for (string &word : words) {
            // 首先通过哈希查找，判断是否有s中没有出现的字符
            // 再使用双指针法匹配子序列
            if (testCharInclude(characters, word) && matchSubseq(s, word)) {
                ++match_count;
            }
        }
        return match_count;
    }
};
// @lc code=end
