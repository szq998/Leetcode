/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    const stacks: (TreeNode | null)[][] = [[root], []];
    const ans: number[][] = [];

    let order: 'l2r' | 'r2l' = 'l2r';
    while (true) {
        const currAns: number[] = [];
        const [currStk, nextStk] = stacks;
        while (currStk.length) {
            const node = currStk.pop();
            if (node) {
                currAns.push(node.val);
                if (order === 'l2r') {
                    nextStk.push(node.left);
                    nextStk.push(node.right);
                } else {
                    nextStk.push(node.right);
                    nextStk.push(node.left);
                }
            }
        }
        order = order === 'l2r' ? 'r2l' : 'l2r';
        if (!currAns.length) {
            return ans;
        }
        ans.push(currAns);
        stacks.reverse();
    }
}
// @lc code=end
