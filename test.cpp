#include <iostream>
using namespace std;

#include <vector>
using std::vector;
#include "33.搜索旋转排序数组.cpp"

int main() {
    vector<int> input{0, 1,2,3};
    int target = 0;
    Solution *tester = new Solution();
    cout << tester->search(input, target) << endl;
}   