/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const stackP: TreeNode[] = [], stackQ: TreeNode[] = [];
    while(p || stackP.length) {
        while(p) {
            if (!q || q.val !== p.val) {
                return false;
            }
            stackP.push(p); stackQ.push(q);
            p = p.left; q = q.left;
        }
        if (q !== null) {
            return false;
        }
        p = stackP.pop(); q = stackQ.pop();
        p = p.right; q = q.right;
    }
    if (q || stackQ.length) {
        return false;
    } else {
        return true;
    }
};
// @lc code=end

