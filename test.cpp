#include <iostream>
using namespace std;

#include <vector>
using std::vector;
#include "34.在排序数组中查找元素的第一个和最后一个位置.cpp"

int main() {
    vector<int> input{1, 1, 2};
    int target = 2;
    Solution *tester = new Solution();
    vector<int> result = tester->searchRange(input, target);
    cout << result[0] << ", " << result[1] << endl;
}