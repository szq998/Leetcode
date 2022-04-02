/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function dfs(candidates, target, seq, idx, ans) {
    if (target === 0) {
        ans.push([...seq]);
        return;
    }
    if (idx === candidates.length || target < candidates[idx]) { return; }
    dfs(candidates, target, seq, idx + 1, ans);
    dfs(candidates, target - candidates[idx], seq.concat(candidates[idx]), idx, ans);
}

var combinationSum = function(candidates, target) {
    candidates.sort((a, b) => (a - b));
    const ans = []
    dfs(candidates, target, [], 0, ans);
    return ans;
};
// @lc code=end

