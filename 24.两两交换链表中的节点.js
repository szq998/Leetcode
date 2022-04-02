/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) {
        return head;
    }
    const res = new ListNode(NaN, head);
    let lastTail = res;
    let p = head,
        q = p.next;
    while (q) {
        let tmp = q.next;
        q.next = p;
        p.next = tmp;
        lastTail.next = q;

        lastTail = p;
        p = lastTail.next;
        q = p?.next;
    }

    return res.next;
};
// @lc code=end
