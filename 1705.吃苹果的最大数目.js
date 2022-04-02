/*
 * @lc app=leetcode.cn id=1705 lang=javascript
 *
 * [1705] 吃苹果的最大数目
 */

// @lc code=start
/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */

class ApplePile {
    remainingDays;
    count;
    constructor(remainingDays, count) {
        this.remainingDays = remainingDays;
        this.count = count;
    }
}

function rot(piles) {
    piles.forEach((a) => void --a.remainingDays);
    piles = piles.filter((a) => a.remainingDays > 0);
    return piles;
}

function eat(piles) {
    if (piles[piles.length - 1].count > 1) {
        --piles[piles.length - 1].count;
    } else {
        piles.pop();
    }
}

var eatenApples = function (apples, days) {
    let piles = [];
    let eatenCount = 0;

    for (let i = 0; i < apples.length; ++i) {
        // harvest
        if (apples[i]) {
            const existingPile = piles.find((p) => p.remainingDays == days[i]);
            if (existingPile) {
                existingPile.count += apples[i];
            } else {
                const pile = new ApplePile(days[i], apples[i]);
                let j = piles.length;
                for (; j > 0 && piles[j - 1].remainingDays < days[i]; --j) {
                    piles[j] = piles[j - 1];
                }
                piles[j] = pile;
            }
        }
        // eat
        if (piles.length) {
            eat(piles);
            ++eatenCount;
        }
        // rot
        piles = rot(piles);
    }

    while (piles.length) {
        eat(piles);
        ++eatenCount;
        piles = rot(piles);
    }

    return eatenCount;
};

// @lc code=end
