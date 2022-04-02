/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let head1 = new ListNode(NaN, list1),
        head2 = new ListNode(NaN, list2);
    let newList = new ListNode(NaN, null);
    let p = head1.next,
        q = head2.next,
        r = newList;

    while (p && q) {
        if (p.val < q.val) {
            r.next = p;
            r = p;
            p = p.next;
        } else {
            r.next = q;
            r = q;
            q = q.next;
        }
    }
    if (p) {
        r.next = p;
    } else if (q) {
        r.next = q;
    }

    return newList.next;
};
// @lc code=end
