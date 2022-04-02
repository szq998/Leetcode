/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
var reverseKGroup = function (head, k) {
    if (k === 1 || head?.next === null) {
        return head;
    }

    const res = new ListNode(NaN, head);
    let lastTail = res;
    let p = head;
    let currHead, currTail;
    outer: while (p) {
        // find head and tail in current segment of len k
        currHead = p;
        for (let i = 0; i < k - 1; ++i) {
            p = p.next;
            if (p === null) {
                break outer;
            }
        }
        currTail = p;
        p = p.next; // p at nextHead
        // reverse
        let q = currHead,
            redirect = p;
        while (q !== currTail) {
            let tmp = q.next;
            q.next = redirect;
            redirect = q;
            q = tmp;
        }
        currTail.next = redirect;
        lastTail.next = currTail;
        
        lastTail = currHead;
    }

    return res.next;
};
// @lc code=end
