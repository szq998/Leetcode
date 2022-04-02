/*
 * @lc app=leetcode.cn id=1022 lang=typescript
 *
 * [1022] 从根到叶的二进制数之和
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

function sumRootToLeaf(root: TreeNode | null): number {
    let sum = 0;
    let path = 0;
    (function dfs(node) {
        if (!node) {
            return;
        }

        path <<= 1;
        path += node.val;
        if (!node.left && !node.right) {
            sum += path;
        } else {
            dfs(node.left);
            dfs(node.right);
        }
        path >>= 1;
    })(root);

    return sum;
}
// @lc code=end
