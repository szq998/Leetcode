/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
    const queues: (TreeNode | null)[][] = [[root], []];
    const ans: number[][] = [];

    while (true) {
        const currAns: number[] = [];
        const [currQueue, nextQueue] = queues;
        while (currQueue.length) {
            const node = currQueue.shift();
            if (node) {
                currAns.push(node.val);
                nextQueue.push(node.left);
                nextQueue.push(node.right);
            }
        }
        if (!currAns.length) {
            return ans;
        }
        ans.push(currAns);
        queues.reverse();
    }
}
// @lc code=end
