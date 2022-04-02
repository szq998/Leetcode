/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function postorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = [],
        stack: TreeNode[] = [];

    let node: TreeNode | null = root,
        prev: TreeNode | null = null;
    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack[stack.length - 1];
        if (node.right === null || node.right === prev) {
            stack.pop();
            ans.push(node.val);
            prev = node;
            node = null;
        } else {
            node = node.right;
        }
    }

    return ans;
}
// @lc code=end
