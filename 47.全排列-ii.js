/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => (a - b));

    const path = [], ans = [];
    const visited = new Array(nums.length);
    visited.fill(false);
    function dfs() {
        if (path.length === nums.length) {
            ans.push([...path]);
            return;
        }
        let lastVisitNum = null;
        for (const [idx, num] of nums.entries()) {
            if (!visited[idx]) {
                if (lastVisitNum === num) { continue; } // prevent duplicate
                lastVisitNum = num;
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

