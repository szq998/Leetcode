/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function dfs(candidates, target, path, idx, ans) {
    if (target === 0) {
        ans.push([...path]);
        return;
    }
    if (idx >= candidates.length || target < candidates[idx]) {
        return;
    }
    // branch 1: sum in current candidate
    path.push(candidates[idx]);
    dfs(candidates, target - candidates[idx], path, idx + 1, ans);
    path.pop();

    // branch2: skip current candidate
    let inc = 1;
    // prevent duplication
    while (idx + inc < candidates.length && candidates[idx + inc - 1] === candidates[idx + inc])  { ++inc; }
    dfs(candidates, target, path, idx + inc, ans);
}

var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => (a - b));
    const ans = [];
    dfs(candidates, target, [], 0, ans);
    return ans;
};
// @lc code=end

