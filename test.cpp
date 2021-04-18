#include <iostream>
using namespace std;

#include <vector>
using std::vector;
#include "35.搜索插入位置.cpp"

int main() {
    vector<int> input{3};
    int target = 4;
    Solution *tester = new Solution();
    cout << tester->searchInsert(input, target) << endl;
}