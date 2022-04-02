/*
 * @lc app=leetcode.cn id=449 lang=typescript
 *
 * [449] 序列化和反序列化二叉搜索树
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

/*
 * Encodes a tree to a single string.
 */

function serialize(root: TreeNode | null): string {
    const preOrdered: number[] = [];
    const stack: TreeNode[] = [];
    let node: TreeNode | null = root;
    // pre-order
    while (node || stack.length) {
        while (node) {
            preOrdered.push(node.val);
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        node = node.right;
    }
    return preOrdered.join(',');
}

function serialize(root: TreeNode | null): string {
    const preOrdered: number[] = [];
    const stack: TreeNode[] = [];
    let node: TreeNode | null = root;
    // pre-order
    while (node || stack.length) {
        while (node) {
            preOrdered.push(node.val);
            stack.push(node);
            node = node.left;
        }
        node = stack.pop();
        node = node.right;
    }
    return preOrdered.join(',');
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
    const preOrdered: number[] = [],
        inOrdered: number[] = [];
    const rawNumbers = data.split(',').map((v) => +v);
    for (let i = 0; i < rawNumbers.length; ++i) {
        preOrdered.push(+rawNumbers[i]);
        inOrdered.push(+rawNumbers[i]);
    }
    inOrdered.sort();
    // recover from pre-order and in-order
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
