/*
 * @lc app=leetcode.cn id=872 lang=typescript
 *
 * [872] 叶子相似的树
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

function traverseToLeaf(stack: TreeNode[]): number | null {
    // last node in stack must be last leaf
    // other node in stack must have right child

    if (stack.length === 1) {
        return null;
    }
    stack.pop();
    let node: TreeNode = stack.pop().right;

    while (true) {
        if (!node.left && !node.right) {
            stack.push(node);
            return node.val;
        }
        if (node.left && node.right) {
            stack.push(node);
            node = node.left;
        } else if (node.left) {
            node = node.left;
        } else if (node.right) {
            node = node.right;
        }
    }
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    const traverseTree1 = traverseToLeaf.bind(null, [
            new TreeNode(0, null, root1),
            null,
        ]),
        traverseTree2 = traverseToLeaf.bind(null, [
            new TreeNode(0, null, root2),
            null,
        ]);

    let leafVal1: number | null = traverseTree1(),
        leafVal2: number | null = traverseTree2();
    while (leafVal1 !== null && leafVal2 !== null) {
        if (leafVal1 !== leafVal2) {
            return false;
        }
        leafVal1 = traverseTree1();
        leafVal2 = traverseTree2();
    }
    if (leafVal1 === null && leafVal2 === null) {
        return true;
    } else {
        return false;
    }
}
// @lc code=end
