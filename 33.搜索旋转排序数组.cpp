/*
 * @lc app=leetcode.cn id=33 lang=cpp
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
class Solution {
private:
    int target;

    int binary_search(vector<int> &nums, int low, int high) {
        int front = low - 1, rear = high + 1;
        while (rear - front > 1) {
            int mid = (front + rear) >> 1;
            if (nums[mid] >= this->target) {
                rear = mid;
            } else {
                front = mid;
            }
        }
        // 可能会搜索到尾后元素，在这里是不合法的
        return rear > high ? high : rear;
    }

    int search_recursively(vector<int> &nums, int low, int high) {
        // 递归退出条件
        if (low == high) {
            if (nums[low] == this->target) {
                return low;
            } else {
                return -1;
            }
        }

        int mid = (low + high) >> 1;
        // 将数组分为有序和无序两部分
        int seq_low, seq_high, unseq_low, unseq_high;
        if (nums[low] < nums[mid]) {
            seq_low = low, seq_high = mid;
            unseq_low = mid + 1, unseq_high = high;
        } else {
            seq_low = mid + 1, seq_high = high;
            unseq_low = low, unseq_high = mid;
        }
        // seq_low～seq_high是有序的, 尝试二分查找
        int searched = this->binary_search(nums, seq_low, seq_high);
        if (nums[searched] == this->target) {
            return searched;
        } else {
            // target在无序部分中，再次进行划分
            return this->search_recursively(nums, unseq_low, unseq_high);
        }
    }

public:
    // 方法2
    int search(vector<int> &nums, int target) {
        this->target = target;
        return this->search_recursively(nums, 0, nums.size() - 1);
    }

    // 方法1
    int search_1(vector<int> &nums, int target) {
        // 两次二分查找
        // 第一次查找旋转点
        // 旋转点k及其之后的元素满足 nums[k] < nums[0]（如果旋转点k不为0）
        // search rotate postion
        int k;
        if (nums[0] < nums[nums.size() - 1]) {
            // 没有旋转（k=0）
            k = 0;
        } else {
            // 有旋转，nums[0]必然不是最小
            int low = -1, high = nums.size();
            while (high - low > 1) {
                int mid = (low + high) >> 1;
                if (nums[mid] < nums[0]) {
                    high = mid;
                } else {
                    low = mid;
                }
            }
            // high即为旋转点
            k = high;
        }
        // search target position
        int low = -1, high = nums.size();
        while (high - low > 1) {
            int mid = (low + high) >> 1;
            if (nums[(mid + k) % nums.size()] >= target) {
                high = mid;
            } else {
                low = mid;
            }
        }

        if (nums[(high + k) % nums.size()] == target) {
            return (high + k) % nums.size();
        } else {
            return -1;
        }
    }
};
// @lc code=end
