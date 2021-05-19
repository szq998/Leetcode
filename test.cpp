#include <iostream>
using namespace std;

#include <string>
#include <vector>

#include "179.最大数.cpp"

int main() {
    vector<int> nums = {34323, 3432};
    Solution *tester = new Solution();
    string result = tester->largestNumber(nums);
    cout << result << endl;
}