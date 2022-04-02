/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
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

// function maxDepth(root: TreeNode | null): number {
//     let maxDepth: number = 0;
//     let depth = 0;

//     (function dfs(node: TreeNode | null) {
//         if (!node) {
//             return;
//         }
//         ++depth;
//         if (depth > maxDepth) { maxDepth = depth; }
//         dfs(node.left);
//         dfs(node.right);
//         --depth;
//     })(root);

//     return maxDepth;
// };
function maxDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
// @lc code=end
