/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 可以被一步捕获的棋子数
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
    // find R
    let rPos;
    searchR: for (let i = 0; i < 8; ++i) {
        for (let j = 0; j < 8; ++j) {
            if (board[i][j] === 'R') {
                rPos = [i, j];
                break searchR;
            }
        }
    }
    let ans = 0;
    // return should break
    const testCand = (cand) => {
        if (cand === 'B') {
            return true;
        } else if (cand === 'p') {
            ++ans;
            return true;
        }
        return false;
    };
    //
    for (let i = rPos[0] - 1; i >= 0; --i) {
        const cand = board[i][rPos[1]];
        if (testCand(cand)) {
            break;
        }
    }
    for (let i = rPos[0] + 1; i < 8; ++i) {
        const cand = board[i][rPos[1]];
        if (testCand(cand)) {
            break;
        }
    }
    for (let i = rPos[1] - 1; i >= 0; --i) {
        const cand = board[rPos[0]][i];
        if (testCand(cand)) {
            break;
        }
    }
    for (let i = rPos[1] + 1; i < 8; ++i) {
        const cand = board[rPos[0]][i];
        if (testCand(cand)) {
            break;
        }
    }
    return ans;
};
// @lc code=end
