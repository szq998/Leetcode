#include <iostream>
using namespace std;

#include <vector>
using std::vector;
#include "153.寻找旋转排序数组中的最小值.cpp"

int main() {
    vector<int> input{4, 2};
    // int target = 2;
    Solution *tester = new Solution();
    int result = tester->findMin(input);
    cout << result << endl;
}