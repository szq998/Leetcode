/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
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

function sumOfLeftLeaves(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let sum = 0;
    if (root.left && !root.left.left && !root.left.right) {
        // root has left child and it is leaf
        sum += root.left.val;
    } else {
        sum += sumOfLeftLeaves(root.left);
    }
    sum += sumOfLeftLeaves(root.right);
    return sum;
}
// @lc code=end
