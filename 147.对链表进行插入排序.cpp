/*
 * @lc app=leetcode.cn id=147 lang=cpp
 *
 * [147] 对链表进行插入排序
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
using NodePtr = ListNode *;

class Solution {
    void insert(NodePtr prevOfSrc, NodePtr prevOfInsertion) {
        const NodePtr nextOfSrc = prevOfSrc->next->next;
        prevOfSrc->next->next = prevOfInsertion->next;
        prevOfInsertion->next = prevOfSrc->next;
        prevOfSrc->next = nextOfSrc;
    }

public:
    ListNode *insertionSortList(ListNode *head) {
        ListNode realHeadNode = ListNode(0, head);

        NodePtr prevOfFirstUnsorted = head;
        while (prevOfFirstUnsorted->next) {
            // 首个未排序元素的值
            const int &srcVal = prevOfFirstUnsorted->next->val;
            // 插入的位置的前驱
            NodePtr prevOfInsertion = &realHeadNode;
            bool needInsertion = true;
            // 寻找插入位置
            while (srcVal >= prevOfInsertion->next->val) {
                prevOfInsertion = prevOfInsertion->next;
                if (prevOfInsertion == prevOfFirstUnsorted->next) {
                    // 插入位置在原位置之后，说明该节点已经有序（目前最大）
                    prevOfFirstUnsorted = prevOfFirstUnsorted->next;
                    // 此时，无需插入
                    needInsertion = false;
                    break;
                }
            }
            if (needInsertion) {
                insert(prevOfFirstUnsorted, prevOfInsertion);
            }
        }
        return realHeadNode.next;
    }
};
// @lc code=end
