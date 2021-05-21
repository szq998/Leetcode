/*
 * @lc app=leetcode.cn id=958 lang=cpp
 *
 * [958] 二叉树的完全性检验
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left),
 * right(right) {}
 * };
 */
class Solution {
public:
    bool isCompleteTree(TreeNode *root) {
        // 层次遍历
        queue<TreeNode *> levelQueues;
        levelQueues.push(root);
        bool nullChildEncountered = false;
        while (!levelQueues.empty()) {
            TreeNode *currNode = levelQueues.front();
            levelQueues.pop();

            if (currNode->left) {
                if (nullChildEncountered) {
                    return false;
                }
                levelQueues.push(currNode->left);
            } else {
                nullChildEncountered = true;
            }

            if (currNode->right) {
                if (nullChildEncountered) {
                    return false;
                }
                levelQueues.push(currNode->right);
            } else {
                nullChildEncountered = true;
            }
        }
        return true;
    }
};
// @lc code=end
