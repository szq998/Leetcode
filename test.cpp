#include <iostream>
using namespace std;

// #include <vector>
// using std::vector;

bool isBadVersion(int version) { return version >= 2147483647; }

#include "278.第一个错误的版本.cpp"

int main() {
    // vector<int> input{3, 2, 3};
    // int target = 2;
    Solution *tester = new Solution();
    // string result = tester->search(input, target) ? "true" : "false";
    int result = tester->firstBadVersion(2147483647);
    cout << result << endl;
}