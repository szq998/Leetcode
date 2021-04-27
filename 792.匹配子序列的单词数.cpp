/*
 * @lc app=leetcode.cn id=792 lang=cpp
 *
 * [792] 匹配子序列的单词数
 */

// @lc code=start
#include <unordered_set>

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
    // 只遍历一次s
    int numMatchingSubseq(string s, vector<string> &words) {
        struct WordWithIdx {
            string word;
            int idx = 0;
            inline char curr_char() { return word[idx]; }
        };
        // 按首字母，将words归类
        vector<vector<WordWithIdx>> categorized_words(26);
        for (string &word : words) {
            categorized_words[word[0] - 'a'].push_back({word});
        }
        int match_count = 0;
        for (char &c : s) {
            // 当前字符对应的words
            auto i_words = categorized_words[c - 'a'];
            // 建立新容器
            categorized_words[c - 'a'] = vector<WordWithIdx>();
            for (auto &w : i_words) {
                // 指向word中的下一个字符
                ++w.idx;
                if (w.word.size() == w.idx) {
                    // 指向了word的尾后，表示匹配成功
                    ++match_count;
                } else {
                    // 根据word当前idx指向的字符，归如新类中
                    categorized_words[w.curr_char() - 'a'].push_back(w);
                }
            }
        }
        return match_count;
    }

    // 此方法多次遍历s，速度过慢，复杂度为o(len(s)*len(words)+sigma_i(len(words[i])))
    int numMatchingSubseq_0(string s, vector<string> &words) {
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
