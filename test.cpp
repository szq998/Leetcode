#include <iostream>
using namespace std;

#include <string>
// #include <vector>

#include "242.有效的字母异位词.cpp"

int main() {
    Solution *tester = new Solution();
    bool result = tester->isAnagram("bnagram", "nagaram");
    cout << (result ? "true" : "false") << endl;
}