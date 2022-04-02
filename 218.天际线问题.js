/*
 * @lc app=leetcode.cn id=218 lang=javascript
 *
 * [218] 天际线问题
 */

// @lc code=start
/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
// eslint-disable-next-line no-unused-vars
const getSkyline = function (buildings) {
    // COPIED FROM https://leetcode-cn.com/problems/the-skyline-problem/solution/gong-shui-san-xie-sao-miao-xian-suan-fa-0z6xc/
    const endPoints = []
    buildings.forEach((b) => {
        // left end
        endPoints.push([b[0], b[2]])
        // right end
        endPoints.push([b[1], -b[2]])
    })
    endPoints.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0]
        else return -a[1] + b[1]
    })
    const res = []
    const heights = { 0: 1 }
    const getHighest = () => (
        Object.keys(heights).reduce((a, b) => (Math.max(+a, +b)))
    )
    let prev = 0
    for (const end of endPoints) {
        const height = end[1]
        if (height > 0) {
            heights[height] = heights[height] ? heights[height] + 1 : 1
        } else {
            heights[-height] -= 1
            if (heights[-height] === 0) { delete heights[-height] }
        }
        const highest = getHighest()
        if (highest !== prev) {
            prev = highest
            res.push([end[0], highest])
        }
    }
    return res
}
// @lc code=end
