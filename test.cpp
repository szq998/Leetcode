#include <iostream>
using namespace std;

#include <vector>
using std::vector;
#include "349.两个数组的交集.cpp"

int main() {
    vector<int> input1{2, 1};
    vector<int> input2{1, 1};
    // int target = 2;
    Solution *tester = new Solution();
    // string result = tester->search(input, target) ? "true" : "false";
    auto result = tester->intersection(input1, input2);
    for (int i = 0; i < result.size(); ++i) {
        cout << result[i] << ", " << endl;
    }
}