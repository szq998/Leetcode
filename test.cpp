#include <iostream>
using namespace std;

#include <vector>
using std::vector;
#include "154.寻找旋转排序数组中的最小值-ii.cpp"

int main() {
    vector<int> input{3,2,3};
    // int target = 2;
    Solution *tester = new Solution();
    // string result = tester->search(input, target) ? "true" : "false";
    int result = tester->findMin(input);
    cout << result << endl;
}