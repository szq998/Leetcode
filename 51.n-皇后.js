/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */

function path2ans(path, n) {
    const ans = [];
    for (const num of path) {
        const row = [];
        for (let i = 0; i < n; ++i) {
            if (i === num) {
                row.push("Q");
            } else {
                row.push(".");
            }
        }
        ans.push(row.join(""));
    }
    return ans;
}

function canCoexist(path, newColumn) {
    const newRow = path.length;
    for (const [row, column] of path.entries()) {
        if (newColumn === column) { return false; }
        if (newRow - row === Math.abs(newColumn - column)) { return false; }
    }
    return true;
}

var solveNQueens = function(n) {
    const path = [];
    const ans = [];

    function dfs() {
        if (path.length === n) {
            ans.push(path2ans(path, n));
            return;
        }
        for (let i = 0; i < n; ++i) {
            if (canCoexist(path, i)) {
                path.push(i);
                dfs()
                path.pop();
            }
        }
    }

    dfs();
    return ans;
};
// @lc code=end

