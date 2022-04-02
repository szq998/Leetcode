/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const map = {};
    const stack = [];

    for (let i = nums2.length - 1; i >= 0; --i) {
        while (stack.length && nums2[i] > stack[stack.length - 1]) {
            stack.pop();
        }
        if (stack.length) {
            map[nums2[i]] = stack[stack.length - 1];
        } else {
            map[nums2[i]] = -1;
        }
        stack.push(nums2[i]);
    }
    const res = Array(nums1.length);
    nums1.forEach((num, idx) => void (res[idx] = map[num]));
    return res;
};
// @lc code=end
