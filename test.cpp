#include <iostream>
using namespace std;

#include <vector>
using std::vector;
#include "69.x-的平方根.cpp"

int main() {
    // vector<int> input{1, 1, 2};
    // int target = 2;
    Solution *tester = new Solution();
    int result = tester->mySqrt(2147395599);
    cout << result << endl;
}