/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangleRows = [[1]];
    for (let i = 1; i < numRows; ++i) {
        const currRow = [1];
        for (let j = 0; j < Math.max(0, i - 1); ++j) {
            const lastRow = triangleRows[i - 1];
            currRow.push(lastRow[j] + lastRow[j + 1]);
        }
        currRow.push(1);
        triangleRows.push(currRow);
    }
    return triangleRows;
};
// @lc code=end

