/*
 * @lc app=leetcode.cn id=923 lang=javascript
 *
 * [923] 三数之和的多种可能
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

var threeSumMulti = function(arr, target) {
    const MOD = 1_000_000_007;
    const count = new Array(101);
    for (const num of arr) {
        if (count[num]) {
            ++count[num];
        } else {
            count[num] = 1;
        }
    }
    for (let i = 0; i <= 100; ++i) {
        if (!count[i]) { count[i] = 0; }
    }

    let ans = 0;
    // i != j != z
    for (let i = 0; i <= 100; ++i) {
        for (let j = i + 1; j <= 100; ++j) {
            const z = target - i - j;
            if (z > j && z <= 100) {
                ans += count[i] * count[j] * count[z];
                ans %= MOD;
            }
        }
    }
    // i == j != z
    for (let i = 0; i <= 100; ++i) {
        const z = target - 2 * i;
        if (z > i && z <= 100) {
            // C2_count[i] * count[z]
            ans += count[i] * (count[i] - 1) / 2 * count[z];
            ans %= MOD;
        }
    }
    // i != j == z
    for (let i = 0; i <= 100; ++i) {
        const z = (target - i) / 2;
        if (Number.isInteger(z) && z > i && z <= 100) {
            //  count[i] * C2_count[z]
            ans += (count[i] * count[z] * (count[z] - 1) / 2) % MOD;
            ans %= MOD;
        }
    }
    // i == j == z
    if (target % 3 === 0) {
        const i = target / 3;
        // C3_count[i]
        ans += (count[i] * (count[i] - 1) * (count[i] - 2) / 6) % MOD;
        ans %= MOD;
    }
    return ans;
};
// @lc code=end

