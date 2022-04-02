/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next) {
        return head;
    }

    let p = head,
        count = 1;
    while (p.next) {
        p = p.next;
        ++count;
    }
    p.next = head;

    const realK = k % count;
    const breakPos = count - realK;
    for (let i = 0; i < breakPos; ++i) {
        p = p.next;
    }
    const newHead = p.next;
    p.next = null;
    return newHead;
};
// @lc code=end
