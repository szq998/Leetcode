/*
 * @lc app=leetcode.cn id=89 lang=typescript
 *
 * [89] 格雷编码
 */

// @lc code=start
function grayCode(n: number): number[] {
    if (n === 0) {
        return [0];
    }

    if (n === 1) {
        return [0, 1];
    }

    const codes = grayCode(n - 1);
    const codesR = [...codes];
    codesR.reverse();

    let lastCode = codes[codes.length - 1];
    let addToR = 1;
    while (lastCode) {
        addToR <<= 1;
        lastCode >>= 1;
    }
    codesR.forEach((code, idx) => void (codesR[idx] = code + addToR));
    return [...codes, ...codesR];
}
// @lc code=end
