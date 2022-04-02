/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let c = 0;
    let last = { next: null };
    const result = last;
    while (l1 && l2) {
        const add = l1.val + l2.val + c;
        c = Math.floor(add / 10);

        last.next = new ListNode(add % 10);
        last = last.next;

        l1 = l1.next;
        l2 = l2.next;
    }
    let remained = l1 ?? l2;
    while (remained) {
        const add = remained.val + c;
        c = Math.floor(add / 10);

        last.next = new ListNode(add%10)
        last = last.next

        remained = remained.next
    }
    if (c) {
        last.next = new ListNode(1)
    }
    return result.next;
};
// @lc code=end
