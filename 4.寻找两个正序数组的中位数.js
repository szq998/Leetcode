/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const totalLen = nums1.length + nums2.length;
    const midPos = Math.floor((totalLen - 1) / 2);
    const isEvenLen = !(totalLen % 2);

    let ptr1 = -1,
        ptr2 = -1;

    function iterate() {
        if (ptr1 == nums1.length - 1) {
            ++ptr2;
            return;
        }
        if (ptr2 == nums2.length - 1) {
            ++ptr1;
            return;
        }
        if (nums1[ptr1 + 1] < nums2[ptr2 + 1]) {
            ++ptr1;
        } else {
            ++ptr2;
        }
    }
    for (let i = 0; i <= midPos; ++i) {
        iterate();
    }

    function max() {
        if (ptr1 == -1) {
            return nums2[ptr2];
        } else if (ptr2 == -1) {
            return nums1[ptr1];
        } else {
            return Math.max(nums1[ptr1], nums2[ptr2]);
        }
    }
    let mid = max();

    if (isEvenLen) {
        iterate();
        mid = (mid + max()) / 2;
    }

    return mid;
};
// @lc code=end
