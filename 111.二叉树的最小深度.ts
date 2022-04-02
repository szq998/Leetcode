/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

function minDepth(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }

    let ans = Infinity;
    let currD = 1;
    (function dfs(node: TreeNode) {
        if (!node.left && !node.right) {
            ans = currD;
            return;
        }
        if (currD + 1 >= ans) {
            return;
        }
        if (node.left) {
            ++currD;
            dfs(node.left);
            --currD;
        }
        if (node.right) {
            ++currD;
            dfs(node.right);
            --currD;
        }
    })(root);
    return ans;
}
// @lc code=end
