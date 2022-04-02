/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var permute = function(nums) {
    nums.sort((a, b) => (a - b));

    const path = [], ans = [];
    const visited = new Array(nums.length);
    visited.fill(false);
    function dfs() {
        if (path.length === nums.length) {
            ans.push([...path]);
            return;
        }
        for (const [idx, num] of nums.entries()) {
            if (!visited[idx]) {
                visited[idx] = true;
                path.push(num);
                dfs()
                path.pop();
                visited[idx] = false;
            }
        }
    }

    dfs();
    return ans;
};
// @lc code=end

