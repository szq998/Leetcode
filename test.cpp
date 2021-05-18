#include <iostream>
using namespace std;

#include <string>
#include <vector>

#include "524.通过删除字母匹配到字典里最长单词.cpp"

int main() {
    // vector<vector<int>> input1{{1, 2}, {4, 7}, {3, 8}};
    // vector<int> input2{1, 1, 1};
    // int target = 2;
    string s = "abce";
    vector<string> words{"f", "va", "bb", "aecd", "abece", "abe", "abc"};
    Solution *tester = new Solution();
    // cout << tester->numMatchingSubseq(s, words) << endl;
    // string result = tester->search(input, target) ? "true" : "false";
    auto result = tester->findLongestWord(s, words);
    cout << result << endl;
}