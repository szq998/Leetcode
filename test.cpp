#include <iostream>
using namespace std;

#include <vector>
using std::vector;
#include "658.找到-k-个最接近的元素.cpp"

int main() {
    vector<int> input1{0, 0, 1, 2, 3, 3, 4, 7, 7, 8};
    // vector<int> input2{1, 1, 1};
    // int target = 2;
    Solution *tester = new Solution();
    // string result = tester->search(input, target) ? "true" : "false";
    auto result = tester->findClosestElements(input1, 3, 5);
    for (int &num : result) {
        cout << num << " ";
    }
    cout << endl;
}