/*
 * @lc app=leetcode.cn id=110 lang=typescript
 *
 * [110] 平衡二叉树
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

function getDepthAndTestBalance(node: TreeNode): number {
    if (!node) {
        return 0;
    }

    const leftD = getDepthAndTestBalance(node.left);
    if (leftD < 0) {
        return -1;
    }
    const rightD = getDepthAndTestBalance(node.right);
    if (rightD < 0) {
        return -1;
    }

    if (leftD - rightD > 1 || rightD - leftD > 1) {
        return -1;
    }
    return leftD > rightD ? leftD + 1 : rightD + 1;
}

function isBalanced(root: TreeNode | null): boolean {
    return getDepthAndTestBalance(root) >= 0;
}
// @lc code=end
