/*
 * @lc app=leetcode.cn id=99 lang=typescript
 *
 * [99] 恢复二叉搜索树
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

/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null): void {
    let rightUnordered: TreeNode, leftUnordered: TreeNode;
    let prev: TreeNode = new TreeNode(-Infinity);
    const stack: TreeNode[] = [];
    let node = root;
    while (node || stack.length) {
        while (node) {
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        if (node.val < prev.val) {
            if (!rightUnordered) {
                rightUnordered = prev;
            }
            leftUnordered = node;
        }
        prev = node;
        node = node.right;
    }
    const tmp = rightUnordered.val;
    rightUnordered.val = leftUnordered.val;
    leftUnordered.val = tmp;
}
// @lc code=end
