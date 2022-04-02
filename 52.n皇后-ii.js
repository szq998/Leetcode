/*
 * @lc app=leetcode.cn id=52 lang=typescript
 *
 * [52] N皇后 II
 */
// @lc code=start
function totalNQueens(n) {
    var ans = 0;
    var path = [];
    var columns = Array(n);
    columns.fill(false);
    var adds = Array(n + n - 1);
    adds.fill(false);
    var diffs = Array(n + n - 1);
    diffs.fill(false);
    (function dfs() {
        if (path.length === n) {
            ++ans;
            return;
        }
        var row = path.length;
        for (var column = 0; column < n; ++column) {
            var add = row + column;
            var diff = row - column + n - 1;
            if (columns[column] || adds[add] || diffs[diff]) {
                continue;
            }
            path.push(column);
            columns[column] = true;
            adds[add] = true;
            diffs[diff] = true;
            dfs();
            path.pop();
            columns[column] = false;
            adds[add] = false;
            diffs[diff] = false;
        }
    })();
    return ans;
}
// @lc code=end
