/*
 * @lc app=leetcode.cn id=173 lang=typescript
 *
 * [173] 二叉搜索树迭代器
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

class BSTIterator {
    node: TreeNode | null;
    stack: TreeNode[] = [];

    constructor(root: TreeNode | null) {
        this.node = root;
    }

    next(): number {
        if (this.hasNext()) {
            while (this.node) {
                this.stack.push(this.node);
                this.node = this.node.left;
            }
            this.node = this.stack.pop();
            const val = this.node.val;
            this.node = this.node.right;
            return val;
        } else {
            return NaN;
        }
    }

    hasNext(): boolean {
        return this.node !== null || this.stack.length !== 0;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end
