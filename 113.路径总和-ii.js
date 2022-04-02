/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */

function goDownAndSum(node, walkPath, currSum, targetSum, targetPaths) {
    if (!node) { return; }

    currSum += node.val;
    walkPath.push(node.val);

    if (!node.left && !node.right) {
        // leaf node
        if (currSum === targetSum) {
            targetPaths.push(walkPath.concat());
        }
    } else {
        goDownAndSum(node.left, walkPath, currSum, targetSum, targetPaths);
        goDownAndSum(node.right, walkPath, currSum, targetSum, targetPaths);
    }

    walkPath.pop();
}

var pathSum = function (root, targetSum) {
    const targetPaths = [];
    goDownAndSum(root, [], 0, targetSum, targetPaths);
    return targetPaths;
};
// @lc code=end
