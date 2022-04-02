/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */

function _preorderTraversalRecursive(node, numbers) {
    // node can be null
    if (node) {
        numbers.push(node.val);
        _preorderTraversalRecursive(node.left, numbers);
        _preorderTraversalRecursive(node.right, numbers);
    }
}

function _preorderTraversalNonrecursive(root, numbers) {
    let nodes = [root];
    while (nodes.length > 0) {
        let node = nodes.pop();
        if (node === null) {
            continue
        }
        numbers.push(node.val);
        nodes.push(node.right);
        nodes.push(node.left);
    }
}

var preorderTraversal = function(root) {
    let numbers = [];
    _preorderTraversalNonrecursive(root, numbers);
    return numbers;
};
// @lc code=end

