/*
 * @lc app=leetcode.cn id=1367 lang=javascript
 *
 * [1367] 二叉树中的列表
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */

function isSubPathFromRoot(head, root) {
    if (head === null) {
        return true;
    }
    if (root === null) {
        return false;
    }

    return (
        head.val === root.val &&
        (isSubPathFromRoot(head.next, root.left) ||
            isSubPathFromRoot(head.next, root.right))
    );
}

var isSubPath = function (head, root) {
    if (root === null) {
        return false;
    }

    return (
        isSubPathFromRoot(head, root) ||
        isSubPath(head, root.left) ||
        isSubPath(head, root.right)
    );
};
// @lc code=end
