/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

// function inorderTraversal(node: TreeNode | null): number[] {
//     if (!node) {
//         return [];
//     }
//     const vals = inorderTraversal(node.left);
//     vals.push(node.val);
//     return vals.concat(inorderTraversal(node.right));
// }

// non-recursive version
// function inorderTraversal(root: TreeNode | null): number[] {
//     const stack: TreeNode[] = [];
//     const ans: number[] = [];

//     let node: TreeNode | null = root;
//     while (stack.length || node) {
//         while (node) {
//             stack.push(node);
//             node = node.left;
//         }
//         node = stack.pop();
//         ans.push(node.val);
//         node = node.right;
//     }
//     return ans;
// }

// Morris
function inorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = [];

    let node: TreeNode | null = root,
        pred: TreeNode;
    while (node) {
        if (!node.left) {
            ans.push(node.val);
            node = node.right;
        } else {
            // find predecessor
            pred = node.left;
            while (pred.right && pred.right !== node) {
                pred = pred.right;
            }

            if (pred.right === node) {
                ans.push(node.val);
                pred.right = null;
                node = node.right;
            } else {
                pred.right = node;
                node = node.left;
            }
        }
    }
    return ans;
}
// @lc code=end
