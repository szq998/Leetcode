/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */

function goDownAndSum(node, currSum, targetSum) {

    currSum += node.val;

    if (!node.left && !node.right) {
        // is leaf node
        return currSum === targetSum;
    } else {
        if (node.left && goDownAndSum(node.left, currSum, targetSum)) {
            return true;
        } else if (node.right) {
            return goDownAndSum(node.right, currSum, targetSum);
        }
        return false;
    }

}

var hasPathSum = function(root, targetSum) {
    return root ? goDownAndSum(root, 0, targetSum) : false
};
// @lc code=end

