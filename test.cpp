#include <iostream>
using namespace std;

#include <string>
#include <vector>

#include "792.匹配子序列的单词数.cpp"

int main() {
    // vector<int> input1{0, 0, 1, 2, 3, 3, 4, 7, 7, 8};
    // vector<int> input2{1, 1, 1};
    // int target = 2;
    string s = "abcde";
    vector<string> words{"f", "a", "bb", "acd", "ace"};
    Solution *tester = new Solution();
    cout << tester->numMatchingSubseq(s, words) << endl;
    // string result = tester->search(input, target) ? "true" : "false";
    // auto result = tester->findClosestElements(input1, 3, 5);
    // for (int &num : result) {
    //     cout << num << " ";
    // }
    // cout << endl;
}