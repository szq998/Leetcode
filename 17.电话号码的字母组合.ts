/*
 * @lc app=leetcode.cn id=17 lang=typescript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
    if (digits === '') {
        return [];
    }

    const dgt2str = [
        ,
        ,
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqrs',
        'tuv',
        'wxyz',
    ];

    const ans: string[] = [];
    const path: string[] = [];
    let idx = 0;
    (function dfs() {
        if (idx === digits.length) {
            ans.push(path.join(''));
            return;
        }

        for (const char of dgt2str[digits.charAt(idx)]) {
            path.push(char);
            ++idx;
            dfs();
            --idx;
            path.pop();
        }
    })();

    return ans;
}
// @lc code=end
