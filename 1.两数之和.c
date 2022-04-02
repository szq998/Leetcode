/*
 * @lc app=leetcode.cn id=1 lang=c
 *
 * [1] 两数之和
 */

// @lc code=start


/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int* twoSum(int* nums, int numsSize, int target, int* returnSize){
    int indexes[2] = [0, 1];

    for (; indexes[0] < numsSize - 1; ++indexes[0]) {
        for (indexes[1] = indexes[0] + 1; indexes[1] < numsSize; ++indexes[1]) {
            if (nums[indexes[0]] + nums[indexes[1]] == target) {
                return indexes;
            }
        }
    }
    return indexes;
}
// @lc code=end

