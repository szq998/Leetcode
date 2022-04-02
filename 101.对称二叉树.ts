/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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
function isSymmetric(root: TreeNode | null): boolean {
    if (!root) {
        return true;
    }
    const stackL: TreeNode[] = [],
        stackR: TreeNode[] = [];
    let nodeL = root.left,
        nodeR = root.right;
    while (nodeL || stackL.length) {
        while (nodeL) {
            if (!nodeR || nodeR.val !== nodeL.val) {
                return false;
            }
            stackR.push(nodeR);
            nodeR = nodeR.right;

            stackL.push(nodeL);
            nodeL = nodeL.left;
        }
        if (nodeR) {
            return false;
        }
        nodeL = stackL.pop();
        nodeL = nodeL.right;
        nodeR = stackR.pop();
        nodeR = nodeR.left;
    }
    if (nodeR || stackR.length) {
        return false;
    }
    return true;
}
// @lc code=end
