/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * [22] 括号生成
 */

// @lc code=start
function generateParenthesis(n: number): string[] {
    let lpCnt = 0,
        rpCnt = 0;
    const ans: string[] = [];
    const path: string[] = [];

    (function dfs() {
        if (path.length === n + n) {
            ans.push(path.join(''));
            return;
        }
        if (lpCnt < n) {
            ++lpCnt;
            path.push('(');
            dfs();
            path.pop();
            --lpCnt;
        }
        if (rpCnt < n && lpCnt > rpCnt) {
            ++rpCnt;
            path.push(')');
            dfs();
            path.pop();
            --rpCnt;
        }
    })();

    return ans;
}
// @lc code=end
