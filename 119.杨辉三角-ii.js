/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (!rowIndex) { return [1]; }

    const row = new Array(rowIndex + 1);
    row[0] = row[1] = 1;
    let solvedNum = 2;
    while (solvedNum < rowIndex + 1) {
        row[solvedNum] = 1;
        for (let i = solvedNum - 1; i > 0; --i) {
            row[i] = row[i] + row[i-1];
        }
        ++solvedNum;
    }
    return row;
};
// @lc code=end

