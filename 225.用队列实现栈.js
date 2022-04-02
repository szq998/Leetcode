/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function() {
    this.containerQueue = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    let timesToMakeReverse = this.containerQueue.length;
    this.containerQueue.push(x)
    while (timesToMakeReverse--) {
        let temp = this.containerQueue.shift()
        this.containerQueue.push(temp)
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.containerQueue.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.containerQueue[0];  // the PEEK operation of a queue
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.containerQueue.length === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

