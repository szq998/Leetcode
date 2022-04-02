/*
 * @lc app=leetcode.cn id=52 lang=typescript
 *
 * [52] N皇后 II
 */

// @lc code=start

function totalNQueens(n: number): number {
    let ans = 0;
    const path: number[] = [];

    const columns: boolean[] = Array(n);  columns.fill(false);
    const adds: boolean[] = Array(n + n - 1); adds.fill(false);
    const diffs: boolean[] = Array(n + n - 1);    diffs.fill(false);

    (function dfs() {
        if (path.length === n) {
            ++ans;
            return;
        }
        const row = path.length;
        for (let column = 0; column < n; ++column) {
            const add = row + column;
            const diff = row - column + n - 1;

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
