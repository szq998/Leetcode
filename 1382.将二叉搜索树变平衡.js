/*
 * @lc app=leetcode.cn id=1382 lang=javascript
 *
 * [1382] 将二叉搜索树变平衡
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function (root) {
    const vals = [];
    // do inorder traversal
    (function inorder(node) {
        if (node) {
            inorder(node.left);
            vals.push(node.val);
            inorder(node.right);
        }
    })(root);

    // build balance tree
    return (function buildBBST(vals) {
        if (!vals.length) {
            return null;
        }
        const midIdx = vals.length >> 1; // as integer division

        const left = buildBBST(vals.slice(0, midIdx));
        const right = buildBBST(vals.slice(midIdx + 1));

        return new TreeNode(vals[midIdx], left, right);
    })(vals);
};
// @lc code=end
