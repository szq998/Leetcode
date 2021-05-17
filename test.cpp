#include <iostream>
using namespace std;

// #include <string>
#include <vector>

#include "56.合并区间.cpp"

int main() {
    vector<vector<int>> input1{{1, 2}, {4, 7}, {3, 8}};
    // vector<int> input2{1, 1, 1};
    // int target = 2;
    // string s = "abcde";
    // vector<string> words{"f", "a", "bb", "acd", "ace"};
    Solution *tester = new Solution();
    // cout << tester->numMatchingSubseq(s, words) << endl;
    // string result = tester->search(input, target) ? "true" : "false";
    auto results = tester->merge(input1);
    for (auto &r : results) {
        cout << '[';
        for (int &n : r) {
            cout << n << ' ';
        }
        cout << "] ";
    }
    cout << endl;
}