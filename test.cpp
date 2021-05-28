#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

#include "147.对链表进行插入排序.cpp"

int main() {
    int nums[5] = {-1, 5, 3, 4, 0};
    ListNode *head = nullptr, *prev = nullptr;
    for (int i = 0; i < 5; ++i) {
        auto curr = new ListNode(nums[i]);
        if (head == nullptr) {
            head = curr;
            prev = curr;
        } else {
            prev->next = curr;
            prev = curr;
        }
    }

    Solution *tester = new Solution();
    head = tester->insertionSortList(head);
    while (head) {
        cout << head->val << ' ';
        head = head->next;
    }
    cout << endl;
}