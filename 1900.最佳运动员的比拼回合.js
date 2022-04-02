/*
 * @lc app=leetcode.cn id=1900 lang=javascript
 *
 * [1900] 最佳运动员的比拼回合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} firstPlayer
 * @param {number} secondPlayer
 * @return {number[]}
 */
var earliestAndLatest = function (n, firstPlayer, secondPlayer) {
    const F = Array(30),
        G = Array(30);
    for (let n = 0; n < 30; ++n) {
        F[n] = Array(30);
        G[n] = Array(30);
        for (let f = 0; f < 30; ++f) {
            F[n][f] = Array(30);
            G[n][f] = Array(30);
        }
    }

    function dp(n, f, s) {
        if (F[n][f][s]) {
            return [F[n][f][s], G[n][f][s]];
        }
        if (f + s === n + 1) {
            return [1, 1];
        }
        if (f + s > n + 1) {
            return ([F[n][f][s], G[n][f][s]] = dp(n, n + 1 - s, n + 1 - f));
        }

        let earlist = Infinity,
            latest = -Infinity;
        const nHalf = (n + 1) >> 1;
        if (s <= nHalf) {
            for (let i = 0; i < f; ++i) {
                for (let j = 0; j < s - f; ++j) {
                    const res = dp(nHalf, i + 1, i + j + 2);
                    earlist = Math.min(earlist, res[0]);
                    latest = Math.max(latest, res[1]);
                }
            }
        } else {
            const sPrime = n + 1 - s;
            const mid = (n - 2 * sPrime + 1) >> 1;
            for (let i = 0; i < f; ++i) {
                for (let j = 0; j < sPrime - f; ++j) {
                    const res = dp(nHalf, i + 1, i + j + mid + 2);
                    earlist = Math.min(earlist, res[0]);
                    latest = Math.max(latest, res[1]);
                }
            }
        }

        return [(F[n][f][s] = earlist + 1), (G[n][f][s] = latest + 1)];
    }

    if (firstPlayer > secondPlayer) {
        [firstPlayer, secondPlayer] = [secondPlayer, firstPlayer];
    }
    return dp(n, firstPlayer, secondPlayer);
};
// @lc code=end
