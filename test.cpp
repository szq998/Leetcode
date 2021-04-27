#include <iostream>
using namespace std;

// #include <vector>

int guess(int num) {
    int pick = 6;
    if (num > pick) {
        return -1;
    } else if (num < pick) {
        return 1;
    } else {
        return 0;
    }
}

#include "374.猜数字大小.cpp"

int main() {
    // vector<int> input1{0, 0, 1, 2, 3, 3, 4, 7, 7, 8};
    // vector<int> input2{1, 1, 1};
    // int target = 2;
    Solution *tester = new Solution();
    cout << tester->guessNumber(10) << endl;
    // string result = tester->search(input, target) ? "true" : "false";
    // auto result = tester->findClosestElements(input1, 3, 5);
    // for (int &num : result) {
    //     cout << num << " ";
    // }
    // cout << endl;
}