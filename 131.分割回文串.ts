/*
 * @lc app=leetcode.cn id=131 lang=typescript
 *
 * [131] 分割回文串
 */

// @lc code=start

function isPalindrome(s: string, start: number, end: number): boolean {
    if (isPalindrome.target && isPalindrome.target === s) {
        return isPalindrome.cache[start][end - 1];
    } else {
        isPalindrome.target = s;
        const cache: boolean[][] = Array(s.length)
            .fill(0)
            .map(() => Array(s.length).fill(true));
        isPalindrome.cache = cache;

        for (let i = s.length - 2; i >= 0; --i) {
            for (let j = i + 1; j < s.length; ++j) {
                cache[i][j] = cache[i + 1][j - 1] && s[i] === s[j];
            }
        }

        return cache[start][end - 1];
    }
}
isPalindrome.cache = null;
isPalindrome.target = null;

// function partition(s: string, start: number = 0): string[][] {
//     if (start + 1 === s.length) {
//         return [[s.slice(start)]];
//     }

//     const ans: string[][] = [];
//     for (let subEnd = start + 1; subEnd < s.length; ++subEnd) {
//         if (isPalindrome(s, start, subEnd)) {
//             const sub = s.slice(start, subEnd);
//             for (const subParted of partition(s, subEnd)) {
//                 subParted.unshift(sub);
//                 ans.push(subParted);
//             }
//         }
//     }

//     if (isPalindrome(s, start, s.length)) {
//         ans.push([s.slice(start)]);
//     }
//     return ans;
// }

function partition(s: string): string[][] {
    const ans: string[][] = [];

    const path: string[] = [];
    (function dfs(start: number) {
        if (start === s.length) {
            ans.push([...path]);
            return;
        }

        for (let end = start + 1; end <= s.length; ++end) {
            if (isPalindrome(s, start, end)) {
                path.push(s.slice(start, end));
                dfs(end);
                path.pop();
            }
        }
    })(0);

    return ans;
}
// @lc code=end
