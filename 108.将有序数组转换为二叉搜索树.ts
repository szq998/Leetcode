/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
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
function sortedArrayToBST(nums: number[]): TreeNode | null {
    return (function dfs(start: number, end: number): TreeNode | null {
        if (start === end) {
            return null;
        }
        const mid = (start + end) >> 1;
        return new TreeNode(nums[mid], dfs(start, mid), dfs(mid + 1, end));
    })(0, nums.length);
}
// @lc code=end
