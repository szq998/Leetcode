#include <iostream>
using namespace std;

#include <vector>
using std::vector;
#include "350.两个数组的交集-ii.cpp"

int main() {
    vector<int> input1{2, 1, 1};
    vector<int> input2{1, 1};
    // int target = 2;
    Solution *tester = new Solution();
    // string result = tester->search(input, target) ? "true" : "false";
    auto result = tester->intersect(input1, input2);
    for (int &num : result) {
        cout << num << " ";
    }
    cout << endl;
}