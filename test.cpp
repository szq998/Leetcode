#include <iostream>
using namespace std;

#include <vector>
using std::vector;
#include "81.搜索旋转排序数组-ii.cpp"

int main() {
    vector<int> input{3, 2};
    int target = 2;
    Solution *tester = new Solution();
    string result = tester->search(input, target) ? "true" : "false";
    cout << result << endl;
}