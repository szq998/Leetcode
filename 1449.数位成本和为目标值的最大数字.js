/*
 * @lc app=leetcode.cn id=1449 lang=javascript
 *
 * [1449] 数位成本和为目标值的最大数字
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
function max(a, b) {
    if (a.length !== b.length) {
        return a.length > b.length ? a.slice : b.slice;
    }

    a = a.slice();
    b = b.slice();
    a.sort((a, b) => b - a);
    b.sort((a, b) => b - a);

    for (let i = 0; i < a.length; ++i) {
        if (a[i] < b[i]) {
            return b;
        } else if (a[i] > b[i]) {
            return a;
        }
    }

    return a;
}

var largestNumber = function (cost, target) {
    let sorted = cost.map((val, idx) => ({
        cost: val,
        digit: idx + 1,
    }));
    // rc[i] rc[i+1]: rc[i].cost < rc[i+1].cost
    //                when cost is same: rc[i].digit > rc[i+1].cost
    sorted.sort((a, b) =>
        a.cost == b.cost ? b.digit - a.digit : a.cost - b.cost
    );
    // remove digits with same cost
    sorted = sorted.filter(
        ({ cost }, idx) => idx === 0 || cost !== sorted[idx - 1].cost
    );

    const digits = [];
    let longest = [0];
    let idx = 0;
    let currCost = 0;
    (function dfs() {
        if (longest.length > 1) {
            return;
        }
        if (idx >= sorted.length) {
            return;
        }
        if (currCost > target) {
            return;
        }
        if (currCost === target) {
            longest = max(digits, longest).slice();
            return;
        }

        // consider current one
        digits.push(sorted[idx].digit);
        currCost += sorted[idx].cost;
        // next one is same as current one
        dfs();
        // next one is different
        ++idx;
        dfs();
        --idx;

        currCost -= sorted[idx].cost;
        digits.pop();

        // ignore current one
        ++idx;
        dfs();
        --idx;
    })();

    longest.sort((a, b) => b - a);
    return longest.join('');
};
// @lc code=end
