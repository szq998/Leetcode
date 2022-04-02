/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function mergeTwoList(list0, list1) {
    let p = list0,
        q = list1;
    const res = new ListNode(NaN, null);
    let r = res;

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
    return res.next;
}

var mergeKLists = function (lists) {
    if (lists.length == 0) {
        return null;
    } else if (lists.length == 1) {
        return lists[0];
    } else if (lists.length == 2) {
        return mergeTwoList(...lists);
    }
    const mid = lists.length >> 1;
    return mergeTwoList(
        mergeKLists(lists.slice(0, mid)),
        mergeKLists(lists.slice(mid))
    );
};
// @lc code=end
