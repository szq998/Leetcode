/*
 * @lc app=leetcode.cn id=37 lang=typescript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 Do not return anything, modify board in-place instead.
 */

function getCandidates(board: string[][], pos: number[]): string[] {
    const appeared: boolean[] = Array(10);
    appeared.fill(false, 1); 
    appeared[0] = true; // appeared[0] will always be true

    // row
    for (const mayDigit of board[pos[0]]) {
        const digit = parseInt(mayDigit);
        if (!isNaN(digit)) { appeared[digit] = true; }
    }
    // column
    for (const row of board) {
        const digit = parseInt(row[pos[1]]);
        if (!isNaN(digit)) { appeared[digit] = true; }
    }
    // 3x3 block
    const startPos = [Math.floor(pos[0] / 3) * 3, Math.floor(pos[1] / 3) * 3];
    for (let i = 0; i < 3; ++i) {
        const row = startPos[0] + i;
        for (let j = 0; j < 3; ++j) {
            const column = startPos[1] + j;
            const digit = parseInt(board[row][column]);
            if (!isNaN(digit)) { appeared[digit] = true; }
        }
    }

    const candidates: string[] = [];
    appeared.forEach((val, idx) => {
        if (val === false) { candidates.push('' + idx); }
    });
    return candidates;
}

function solveSudoku(board: string[][]): void {
    const posToFill: number[][] = [];
    board.forEach((row, rowIdx) => {
        row.forEach((val, colIdx) => {
            if (val === '.') { posToFill.push([rowIdx, colIdx]); }
        })
    })
    let posIdx = 0;
    (function dfs(){
        if (posIdx === posToFill.length) { return true; }

        const pos = posToFill[posIdx]
        const candidates = getCandidates(board, pos);
        for (const digit of candidates) {
            board[pos[0]][pos[1]] = digit;
            ++posIdx;
            if (dfs() === true) { return true; };
            --posIdx;
            board[pos[0]][pos[1]] = '.';
        }
        return false;
    })();
}
// @lc code=end
