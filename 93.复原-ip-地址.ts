/*
 * @lc app=leetcode.cn id=93 lang=typescript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
function restoreIpAddresses(s: string): string[] {
    const dots: number[] = [0],
        ans: string[] = [];

    (function dfs() {
        if (dots.length === 4) {
            const lastPart = s.slice(dots[3]);
            if (lastPart.length >= 2 && lastPart.startsWith('0')) {
                return;
            }
            if (lastPart.length >= 3 && parseInt(lastPart) > 255) {
                return;
            }

            ans.push(
                [
                    s.slice(dots[0], dots[1]),
                    s.slice(dots[1], dots[2]),
                    s.slice(dots[2], dots[3]),
                    lastPart,
                ].join('.')
            );

            return;
        }

        const lastDot = dots[dots.length - 1];
        for (let i = 1; i <= 3; ++i) {
            if (lastDot + i >= s.length) {
                return;
            }

            const addrPart = s.substr(lastDot, i);
            if (i >= 2 && addrPart.startsWith('0')) {
                return;
            }
            if (i === 3 && parseInt(addrPart) > 255) {
                return;
            }
            dots.push(lastDot + i);
            dfs();
            dots.pop();
        }
    })();
    return ans;
}
// @lc code=end
